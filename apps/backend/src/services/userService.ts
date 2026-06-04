import "dotenv/config";
import {
    ResetPasswordValues,
    SignInValues,
    SignUpValues,
} from "../utils/schema/user";
import * as userRepositories from "../repositories/userRepositories";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import transporter from "../utils/mailtrap";
import { error } from "node:console";

export const signUp = async (data: SignUpValues, file: Express.Multer.File) => {
    const isEmailExist = await userRepositories.isEmailExist(data.email);
    if (isEmailExist > 1) {
        throw new Error("Email already taken");
    }
    const user = await userRepositories.createUser(
        {
            ...data,
            password: bcrypt.hashSync(data.password, 12),
        },
        file.filename,
    );
    const token = jwt.sign({ id: user.id }, process.env.SECRET_AUTH ?? "", {
        expiresIn: "1 days",
    });

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo_url,
        token,
    };
};

export const signIn = async (data: SignInValues) => {
    const isEmailExist = await userRepositories.isEmailExist(data.email);
    if (isEmailExist === 0) {
        throw new Error("Email not registered");
    }
    const user = await userRepositories.findUserByEmail(data.email);
    if (!bcrypt.compareSync(data.password, user.password)) {
        throw new Error("Invalid password");
    }
    const token = jwt.sign({ id: user.id }, process.env.SECRET_AUTH ?? "", {
        expiresIn: "1 days",
    });

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        photo: user.photo_url,
        token,
    };
};

export const getEmailReset = async (email: string) => {
    const data = await userRepositories.createPasswordReset(email);

    await transporter.sendMail({
        from: "Chat App",
        to: email,
        subject: "Reset Password",
        text: `Berikut link untuk reset password ${data.token}`,
    });

    return true;
};

export const updatePassword = async (
    data: ResetPasswordValues,
    token: string,
) => {
    const tokenData = await userRepositories.findResetDataByToken(token);
    if (!tokenData) {
        throw new Error("Token Reset Invalid");
    }
    await userRepositories.updatePassword(
        tokenData.user.email,
        bcrypt.hashSync(data.password, 12),
    );
    await userRepositories.deleteTokenResetById(tokenData.id);
};

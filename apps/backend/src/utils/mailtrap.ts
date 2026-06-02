import "dotenv/config";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_HOST as string,
    port: Number(process.env.MAILTRAP_PORT),
    secure: false,
    auth: {
        user: process.env.MAILTRAP_USER as string,
        pass: process.env.MAILTRAP_PASS as string,
    },
});

export default transporter;

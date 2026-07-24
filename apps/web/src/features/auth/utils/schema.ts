import z from "zod";

export const signUpSchema = z.object({
    photo: z.any().refine((file: File) => file?.type?.startsWith("image/"), {
        message: "File must be an image",
    }),
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
});

export const signInSchema = signUpSchema.pick({
    email: true,
    password: true,
});

export const forgotPasswordSchema = signUpSchema.pick({
    email: true,
});

export const updatePasswordSchema = z
    .object({
        password: z.string().min(8),
        confirmPassword: z.string().min(8),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password and Confirm Password must be same",
    });

export type signUpValues = z.infer<typeof signUpSchema>;
export type signInValues = z.infer<typeof signInSchema>;
export type forgotPasswordValues = z.infer<typeof forgotPasswordSchema>;
export type updatePasswordValues = z.infer<typeof updatePasswordSchema>;

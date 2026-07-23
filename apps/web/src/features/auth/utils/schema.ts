import z from "zod";

export const signUpSchema = z.object({
    avatar: z.any().refine((file: File) => file?.type?.startsWith("image/"), {
        message: "File must be an image",
    }),
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
});

export type signUpValues = z.infer<typeof signUpSchema>;

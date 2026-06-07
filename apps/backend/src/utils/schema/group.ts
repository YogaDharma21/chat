import z from "zod";

export const groupFreeSchema = z.object({
    name: z.string().min(3),
    about: z.string(),
});

export type groupFreeValues = z.infer<typeof groupFreeSchema>;

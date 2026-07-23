import { useMutation } from "@tanstack/react-query";
import { signUp } from "../api/SignUp";

export const useSignUp = () => {
    const { mutateAsync, isPending, isError, error } = useMutation({
        mutationFn: async (data: FormData) => signUp(data),
    });

    return {
        mutateAsync,
        isPending,
        isError,
        error,
    };
};

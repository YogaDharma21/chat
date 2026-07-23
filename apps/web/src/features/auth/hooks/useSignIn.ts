import { useMutation } from "@tanstack/react-query";
import type { signInValues } from "../utils/schema";
import { signIn } from "../api/SignIn";

export const useSignIn = () => {
    const { mutateAsync, isPending, isError, error } = useMutation({
        mutationFn: (data: signInValues) => signIn(data),
    });

    return {
        mutateAsync,
        isPending,
        isError,
        error,
    };
};

import { useMutation } from "@tanstack/react-query";
import type { forgotPasswordValues } from "../utils/schema";
import { forgotPassword } from "../api/ForgotPassword";

export const useForgotPassword = () => {
    const { mutateAsync, isPending, isError, error } = useMutation({
        mutationFn: (data: forgotPasswordValues) => forgotPassword(data),
    });

    return {
        mutateAsync,
        isPending,
        isError,
        error,
    };
};

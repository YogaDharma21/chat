import { useMutation } from "@tanstack/react-query";
import type { updatePasswordValues } from "../utils/schema";
import { updatePassword } from "../api/UpdatePassword";

export const useUpdatePassword = (token: string) => {
    const { mutateAsync, isPending, isError, error } = useMutation({
        mutationFn: (data: updatePasswordValues) => updatePassword(token, data),
    });

    return {
        mutateAsync,
        isPending,
        isError,
        error,
    };
};

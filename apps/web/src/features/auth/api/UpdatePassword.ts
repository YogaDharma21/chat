import instanceApi from "../../../shared/utils/axios";
import type { updatePasswordValues } from "../utils/schema";

export const updatePassword = async (
    token: string,
    data: updatePasswordValues,
) =>
    instanceApi
        .put(`/auth/reset-password/${token}`, data)
        .then((res) => res.data);

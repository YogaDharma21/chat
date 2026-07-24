import instanceApi from "../../../shared/utils/axios";
import type { forgotPasswordValues } from "../utils/schema";

export const forgotPassword = async (data: forgotPasswordValues) =>
    instanceApi.post("/auth/reset-password", data).then((res) => res.data);

import type { BaseResponse } from "../../../shared/types/response";
import instanceApi from "../../../shared/utils/axios";
import type { signInValues } from "../utils/schema";
import type { SignUpResponse } from "./SignUp";

export const signIn = async (
    data: signInValues,
): Promise<BaseResponse<SignUpResponse>> =>
    instanceApi.post("/auth/sign-in", data).then((res) => res.data);

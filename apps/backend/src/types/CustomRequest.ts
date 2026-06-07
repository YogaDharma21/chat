import { Request } from "express";
import { RoleType } from "../generated/prisma/enums";

type User = {
    id: string;
    email: string;
    name: string;
    role: RoleType;
};

export interface CustomRequest extends Request {
    user?: User | null;
}

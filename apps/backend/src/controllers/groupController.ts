import { NextFunction, Response } from "express";
import { CustomRequest } from "../types/CustomRequest";
import { groupFreeSchema } from "../utils/schema/group";
import * as groupService from "../services/groupService";

export const createFreeGroup = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction,
) => {
    try {
        const parse = groupFreeSchema.safeParse(req.body);
        if (!parse.success) {
            const errorMessage = parse.error.issues.map(
                (err) => `${err.path} - ${err.message}`,
            );

            return res.status(400).json({
                success: false,
                message: "Validation Error",
                detail: errorMessage,
            });
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "File is required",
            });
        }

        const group = await groupService.createFreeGroup(
            parse.data,
            req.file.filename,
            req.user?.id ?? "",
        );

        return res.json({
            success: true,
            message: "Group Created Successfully",
            data: group,
        });
    } catch (error) {
        next(error);
    }
};

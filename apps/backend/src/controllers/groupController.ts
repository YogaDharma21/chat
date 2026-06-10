import { NextFunction, Response } from "express";
import { CustomRequest } from "../types/CustomRequest";
import { groupFreeSchema, groupPaidSchema } from "../utils/schema/group";
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

        const group = await groupService.upsertFreeGroup(
            parse.data,
            req.user?.id ?? "",
            req.file.filename,
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

export const updateFreeGroup = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { groupId } = req.params;
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

        const group = await groupService.upsertFreeGroup(
            parse.data,
            req.user?.id ?? "",
            req?.file?.filename,
            groupId,
        );

        return res.json({
            success: true,
            message: "Group Updatted Successfully",
            data: group,
        });
    } catch (error) {
        next(error);
    }
};

export const createPaidGroup = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction,
) => {
    try {
        const parse = groupPaidSchema.safeParse(req.body);
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

        const file = req.files as {
            photo?: Express.Multer.File[];
            assets?: Express.Multer.File[];
        };

        if (!file.photo) {
            return res.status(400).json({
                success: false,
                message: "Photo is required",
            });
        }

        if (!file.assets) {
            return res.status(400).json({
                success: false,
                message: "Assets are required",
            });
        }
        const assets = file.assets.map((file) => file.filename);

        const group = await groupService.upsertPaidGroup(
            parse.data,
            file.photo[0].filename,
            req?.user?.id ?? "",
            assets,
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

export const updatePaidGroup = async (
    req: CustomRequest,
    res: Response,
    next: NextFunction,
) => {
    const { groupId } = req.params;
    try {
        const parse = groupPaidSchema.safeParse(req.body);
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

        const file = req.files as {
            photo?: Express.Multer.File[];
            assets?: Express.Multer.File[];
        };

        const assets = file?.assets?.map((file) => file.filename);

        const group = await groupService.upsertPaidGroup(
            parse.data,
            req?.user?.id ?? "",
            file?.photo?.[0]?.filename,
            assets,
            groupId
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

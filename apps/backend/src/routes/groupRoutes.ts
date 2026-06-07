import express from "express";
import { storageGroupPhoto } from "../utils/multer";
import multer from "multer";
import verifyToken from "../middlewares/verifyToken";
import * as groupController from "../controllers/groupController";

const groupRoutes = express.Router();
const uploadPhoto = multer({
    storage: storageGroupPhoto,
    fileFilter(req, file, callback) {
        if (file.mimetype.startsWith("image/")) {
            callback(null, true);
        }
        callback(null, false);
    },
});

groupRoutes.post(
    "/groups/free",
    verifyToken,
    uploadPhoto.single("photo"),
    groupController.createFreeGroup,
);

export default groupRoutes;

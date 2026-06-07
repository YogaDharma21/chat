import express from "express";
import { storageGroupPaidPhoto, storageGroupPhoto } from "../utils/multer";
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

const uploadPhotoPaid = multer({
    storage: storageGroupPaidPhoto,
    // fileFilter(req, file, callback) {
    //     if (file.fieldname === "assets") {
    //         callback(null, true);
    //         return;
    //     }

    //     if (file.mimetype.startsWith("image/")) {
    //         callback(null, true);
    //         return;
    //     }
    //     callback(null, false);
    // },
});

groupRoutes.post(
    "/groups/free",
    verifyToken,
    uploadPhoto.single("photo"),
    groupController.createFreeGroup,
);

groupRoutes.post(
    "/groups/paid",
    verifyToken,
    uploadPhotoPaid.fields([
        { name: "photo", maxCount: 1 },
        { name: "assets" },
    ]),
    groupController.createPaidGroup,
);

export default groupRoutes;

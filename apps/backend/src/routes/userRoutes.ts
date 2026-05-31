import express from "express";
import multer from "multer";
import { storageUserPhoto } from "../utils/multer";

const userRoutes = express.Router();
const uploadPhoto = multer({
    storage: storageUserPhoto,
    fileFilter(req, file, callback) {
        if (file.mimetype.startsWith('image/')) {
            callback(null, false)
        }

        callback(null, true)
    },
})

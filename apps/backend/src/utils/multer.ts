import multer from "multer";
import path from "path";

export const storageUserPhoto = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, "../../public/assets/uploads/photos"));
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        const extension = file.mimetype.split("/")[1];
        const filename = `photo-${uniqueSuffix}.${extension}`;
        cb(null, filename);
    },
});

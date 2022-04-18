import { postImageStorage } from "../utils/PostImageStorage.utils.js";
import multer from "multer";

const maxSize = 1 * 1024 * 1024; // for 1MB

export const postUploadFile = (req, res, next) => {
  const postUpload = multer({
    storage: postImageStorage,
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
  });

  //single file upload
  const upload = postUpload.single("postImage");

  upload(req, res, (error) => {
    if (error instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.send(error);
    } else if (error) {
      // An unknown error occurred when uploading.
      res.send({ ...error, message: "Your file is not an image!" });
    }
    // Everything went fine.
    next();
  });
};

import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

export const postImageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, process.env.PUBLIC_FILE_DIR + "/public/storyUploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + ".jpg");
  },
});

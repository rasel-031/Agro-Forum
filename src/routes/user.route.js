import express from "express";
const userRouter = express.Router();
import {
  userSignUp,
  userSignIn,
  userNewPost,
} from "../controllers/user.controller.js";
import { postUploadFile } from "../middlewares/MulterErrorHandle.middleware.js";

//json middleware
userRouter.use(express.json());

userRouter.post("/signup", userSignUp);

userRouter.post("/signin", userSignIn);

userRouter.post("/new-post", postUploadFile, userNewPost);

export default userRouter;

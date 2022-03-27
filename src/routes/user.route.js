import express from "express";
const userRouter = express.Router();
import { userSignUp, userSignIn } from "../controllers/user.controller.js";

//json
userRouter.use(express.json());

userRouter.post("/signup", userSignUp);

userRouter.post("/signin", userSignIn);

export default userRouter;

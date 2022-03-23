import express from "express";
const userRouter = express.Router();
import { userSignUp } from "../controllers/userController.js";

//json
userRouter.use(express.json());

userRouter.post("/signup", userSignUp);

export default userRouter;

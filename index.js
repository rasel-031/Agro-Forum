import express from "express";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
import userRouter from "./src/routes/user.route.js";
import { DatabaseConnect } from "./src/configs/db.config.js";

//environment viriable setup
dotenv.config({ path: "./config.env" });

//database connction
DatabaseConnect();

//middlewares
app.use(cors());

//router code here
app.use("/user", userRouter);

//create server
const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running.." + PORT);
});

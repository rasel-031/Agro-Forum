import express from "express";
import cors from "cors";
const app = express();
import userRouter from "./src/routes/userRouter.js";

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running..");
});

//middlewares
app.use(cors());
//router code here
app.use("/user", userRouter);

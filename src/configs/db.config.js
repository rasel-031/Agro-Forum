import mongoose from "mongoose";

export const DatabaseConnect = () => {
  mongoose.connect(process.env.DATABASE_URL, (err) => {
    if (err) {
      console.log(err);
      console.log("Database is not connected.");
    } else {
      console.log("Database is connected.");
    }
  });
};

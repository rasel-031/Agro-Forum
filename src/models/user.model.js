import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  datetime: { type: Date, default: Date.now },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
  this.email = this.email.toLowerCase();
});

const userModel = mongoose.model("user", userSchema);

export default userModel;

import mongoose from "mongoose";
import bcrypt from "bcryptjs";

//2 methods of mongoose used here to make schema - Schema and Model
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassowrd) {
  return await bcrypt.compare(enteredPassowrd, this.password);
};

//Encrypt password using bcrypt
userSchema.pre("save", async function (next) {
  console.log("this represent---", this);

  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;

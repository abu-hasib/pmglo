import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: Number,
    firstname: String,
    lastname: String,
    gender: String,
    date_of_birth: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (this.isNew) {
    User.count().then((res) => {
      console.log("&&: ", res);
      this.id = res; // Increment count
      next();
    });
  } else {
    next();
  }
});
const User = mongoose.model("User", userSchema);

export default User;

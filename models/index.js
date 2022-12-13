import mongoose from "mongoose";
import User from "./users";

const connectDb = async () => {
  return mongoose.connect(process.env.DATABASE_URL);
};

const models = { User };

export { connectDb };

export default models;

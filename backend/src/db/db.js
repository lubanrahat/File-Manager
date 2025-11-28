import mongoose from "mongoose";
import ENV from "../config/env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("MongoDB conneted successfully ✅");
  } catch (error) {
    console.error("Error MongoDB conneting ❌");
    process.exit(1);
  }
};

export default connectDB;

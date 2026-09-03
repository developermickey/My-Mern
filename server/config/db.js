import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process?.env?.MONGODB);
    console.log("Database Connected Successfuly");
  } catch (error) {
    console.error(error);
    console.log("Database Server have some issue");
    process.exit(1);
  }
};

export default connectDB;

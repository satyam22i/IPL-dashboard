import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();


export const connectDB = async () => {
  try {
    console.log("mongo_uri");

    if (!process.env.Mongo_URI) {
      throw new Error("mongoDB_uri not defined please check your env file");

    }

    const conn = await mongoose.connect(process.env.Mongo_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);

  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
  }
};

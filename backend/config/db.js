import mongoose from "mongoose";

import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(ENV_VARS.MONGO_URI);
    console.log("MongoDB connected: ", connect.connection.host);
  } catch (error) {
    console.error("MongoDB Error in connection: ", error);
    process.exit(1); // 1 means there was an error, 0 means success
  }
};

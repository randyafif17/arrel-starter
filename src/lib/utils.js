import mongoose from "mongoose";

const connectToDb = async () => {
  if (mongoose.connection.readyState) {
    console.log("Using existing connection");
    return true;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Mongodb connected");
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Failed to connect to database");
  }
};

export default connectToDb;

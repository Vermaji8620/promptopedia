import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("DB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODBURI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Database connected");
  } catch (error) {
    console.log("error is", error);
  }
};

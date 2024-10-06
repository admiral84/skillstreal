import mongoose from "mongoose";

let connection;

export const connectToDb = async (retries = 5, delay = 1000) => {
  try {
    if (connection && connection.isConnected) {
      console.log("Already connected to the database");
      return;
    }

    console.log("Connecting to the database...");
    connection = await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);

    if (retries > 0) {
      console.log(`Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return connectToDb(retries - 1, delay); // Retry
    } else {
      console.error("Max retries reached. Could not connect to the database.");
      throw new Error("Could not connect to the database");
    }
  }
};

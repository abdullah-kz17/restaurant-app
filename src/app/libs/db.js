import mongoose from "mongoose";

// Connection string setup
const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
const connectionURL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.8oure.mongodb.net/restaurantapp?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB
export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(connectionURL);
};

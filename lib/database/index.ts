import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };

const MONGODB_URI = process.env.MONGODB_URI;

export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;
  if (!MONGODB_URI) return new Error("MONGODB_URI IS MISSING");
  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "Evently",
      bufferCommands: false,
    });
  cached.conn = await cached.promise;
  return cached.conn;
};

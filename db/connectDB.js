import mongoose from "mongoose";

const connectDB = (url) => {
  console.log('Connected to the database');
  return mongoose.connect(url)
}

export default connectDB
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  try {
    await mongoose.connect(uri);
    console.log(`Connected To DB`);
  } catch (error) {
    console.error(`Error connecting to DB: ${error.message}`);
  }
};

connectDB();

import colors from 'colors';
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected to mongodb ${conn.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Error connecting to database: ${error}`.bgRed.white);
  }
};

export default connectDB;

import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';

// dotenv config
dotenv.config();

// rest object
const app = express();

// database config
connectDB();

// middleware
app.use(express.json());
app.use(morgan('dev')); // log request in

// rest api
app.get('/', (req, res) => {
  res.send('<h1>Welcome to MODMAN</h1>');
});

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan
      .white
  )
);

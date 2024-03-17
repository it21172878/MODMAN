import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import cors from 'cors';

// dotenv config
dotenv.config();

// rest object
const app = express();

// database config
connectDB();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // log request in

// routes
app.use('/api/v1/auth', authRoutes);

// rest api
app.get('/', (req, res) => {
  res.send('<h1>Welcome to MODMAN</h1>');
});

// port
const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan
      .white
  )
);

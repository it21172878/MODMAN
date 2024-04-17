import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import groupRoutes from './routes/projectGroupRoute.js';
import emailRoutes from './routes/emailRoutes.js';
import assignmentRoutes from './routes/assignmentRoute.js';
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
app.use('/api/v1/group', groupRoutes);
app.use('/api/v1/otpemail', emailRoutes);
app.use('/api/v1/assignment', assignmentRoutes);

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

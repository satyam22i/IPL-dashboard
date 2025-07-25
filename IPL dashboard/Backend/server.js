import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import matchRoutes from "./routes/rotes.js";

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5000;



const allowedOrigins = [
  'http://localhost:5173',
  'https://fluffy-cupcake-9ebe78.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));


app.use(express.json());


connectDB();


app.use("/api/matches", matchRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

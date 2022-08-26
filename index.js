import express from "express";
import cors from "cors";
import 'dotenv/config';
import router from "./routes/index.js";
import rateLimit from "express-rate-limit";

const PORT = process.env.PORT || 5001;

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 5
});
app.use(limiter);
app.set('trust proxy', 1)

// Set static folder
app.use(express.static('public'))

// Routes
app.use("/api", router)

// Enable CORS
app.use(cors());

app.listen(PORT, () => {
  console.log("Server running on port ", PORT);
})

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { logger } from "./middleware/loggermiddlware.js";
import coursesRoute from "./routes/coursesRoute.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// Logger middleware
app.use(logger);

// Routes
app.use("/", coursesRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
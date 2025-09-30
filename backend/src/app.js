require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const userRoutes = require("./routes/userRoutes");
const { errorHandler } = require("./middlewares");

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json({ limit: process.env.EXPRESS_LIMIT }));

const signupLimiter = rateLimit({ windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS), max: parseInt(process.env.RATE_LIMIT_MAX) });
app.use("/users", signupLimiter);

app.use("/users", userRoutes);

app.use(errorHandler);

module.exports = app;

import dotenv from "dotenv";
dotenv.config();
import { config } from "./config/enviroment.js";
import mongoose from "mongoose";
import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import { NotFound } from "./utils/errors.js";
import errorHandler from "./middleware/error-handler.js";
import gigRoutes from "./routes/gig.routes.js";
import rateLimit from "express-rate-limit";
import { globalLimiter } from "./utils/rate-limit.js";
import cors from "cors";
mongoose
    .connect(config.MONGO_URI)
    .then(() => console.log("mongodb ye bağlandı"))
    .catch((err) => console.log("veritabanına bağlanamadı detay", err));
const app = express();
// --- DOĞRU KULLANIM (Parantezler unutulmamalı) ---
app.use(cors({ origin: config.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());
// --------------------------------------------------
app.use("/api/auth", authRoutes);
app.use("/api/gigs", globalLimiter, gigRoutes);
app.use((req, res, next) => next(new NotFound()));
app.use(errorHandler);
app.listen(config.PORT, () => console.log(`server ${config.PORT} portunu dinlemeye başladı `));
//# sourceMappingURL=server.js.map
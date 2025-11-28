import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import ENV from "./config/env.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors({
    origin: ENV.CORS_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));


import healthCheckRoutes from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthCheck",healthCheckRoutes)


export default app;
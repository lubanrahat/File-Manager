import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const ENV = {
  PORT: process.env.PORT ?? 8080,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  MONGO_URI: process.env.MONGO_URI,
};

export default ENV;

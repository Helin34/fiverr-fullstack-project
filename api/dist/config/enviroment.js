import dotenv from "dotenv";
import { CLIENT_RENEG_LIMIT } from "node:tls";
dotenv.config({ path: ".env" });
export const config = {
    PORT: process.env.PORT || 3000,
    MONGO_URI: process.env.MONGO_URI,
    NODE_ENV: process.env.NODE_ENV,
    CLIENT_URL: process.env.CLIENT_URL,
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUD_API_KEY: process.env.CLOUD_API_KEY,
    CLOUD_SECRET: process.env.CLOUD_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    JWT_EXPIRES: Number(process.env.JWT_EXPIRES),
};
export const isDevelopment = config.NODE_ENV === "development";
export const isProduction = config.NODE_ENV === "production";
//# sourceMappingURL=enviroment.js.map
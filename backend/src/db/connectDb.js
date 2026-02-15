import mongoose from "mongoose"
import { env } from "../utils/env.js"
import logger from "../utils/logger.js";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(env.MONGO_URI);
        logger.info(`Successfully connected to mongodb: ${conn.connection.host}`);
    } catch (error) {
        logger.error(`Error in connecting to mongoDb: ${error}`);
        process.exit(1);
    }

}
export default connectDb;
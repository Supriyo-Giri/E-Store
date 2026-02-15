import logger from "./utils/logger.js";
import express from "express"
import { env } from "./utils/env.js"
import connectDb from "./db/connectDb.js";

const app = express();

const PORT = env.PORT || 5000;

app.listen(PORT,()=>{
    connectDb();
    logger.info(`Server started on port: ${PORT}`);
})
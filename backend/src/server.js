import logger from "./utils/logger.js";
import express from "express"
import { env } from "./utils/env.js"
import connectDb from "./db/connectDb.js";
import requestLogger from "./middlewares/requestLogger.js"
import userRoutes from "./routes/user.route.js"
import cors from "cors"
import helmet from "helmet"

const app = express();

const PORT = env.PORT || 5000;

//middlewares
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json())
app.use(requestLogger);

//routes
app.use("/api/v1/user",userRoutes);

app.listen(PORT,()=>{
    connectDb();
    logger.info(`Server started on port: ${PORT}`);
})
import jwt from "jsonwebtoken"
import { env } from "./env.js"
import logger from "./logger.js";

export const generateEmailVerificationToken = (user) =>{
    try {
        const token = jwt.sign({ id:user._id }, env.JWT_SECRET,{expiresIn: env.JWT_EXPIRES_IN });
        return token;
    } catch (error) {
        logger.error(`Error in generating token for email verfication: ${error.message}`);
    }
}
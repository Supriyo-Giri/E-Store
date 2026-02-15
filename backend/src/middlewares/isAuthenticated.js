import logger from "../utils/logger.js";
import { env } from "../utils/env.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req,res,next) => {
    try {
        const authHeader = req.headers.authorization
        if(!authHeader || !authHeader.startsWith("Bearer ")){
            return res.status(400).json({
                success: false, 
                message: "authorization token is missing or invalid"
            })
        }
        const token = authHeader.split(" ")[1];
        let decoded
        try {
            decoded = jwt.verify(token,env.JWT_SECRET)
        } catch (error) {
            if(error.name === "TokenExpiredError"){
                return res.status(400).json({
                    success: false,
                    message: "Token has expired"
                })
            }
            return res.status(400).json({
                success: false,
                message: "Access token is missing or invalid"
            })
        }
        const user = await User.findById(decoded.id);
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        //Passing the id inside the request
        req.id = user._id;
        next();
    } catch (error) {
        logger.error(`Error in authenticating middleware: ${error}`);
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const isAdmin = async(req,res,next) => {
    const id = req.id;
    const user = await User.findById(id);
    if(!user){
        return res.status(404).json({
            success: false,
            message: "User does not exist with that id, Unauthorized!"
        })
    }
    if(user.role === "admin"){
        next();
    }else{
        return res.status(403).json({
            success: false,
            message: "Access denied! Admins only"
        })
    }
}
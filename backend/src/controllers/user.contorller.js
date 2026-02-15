import logger from "../utils/logger.js";
import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateEmailVerificationToken } from "../utils/generateEmailVerificationToken.js";
import { verifyEmail } from "../utils/emailVerify.js";
import jwt from "jsonwebtoken";
import { env } from "../utils/env.js";
import { Session } from "../models/session.model.js";
import { sendOTPMail } from "../utils/sendOTPMail.js";

export const registerController = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Please enter all the required fields",
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const token = generateEmailVerificationToken(newUser);
    verifyEmail(firstName, email, token); //sending email here
    newUser.token = token;

    await newUser.save();
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    logger.error(`Error in register controller: ${error.message}`);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmailController = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(400).json({
        success: false,
        message: "Authorization token is missing or Invalid",
      });
    }
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, env.JWT_SECRET);

      //fetching user from db:
      const user = await User.findById(decoded.id).select("-password");
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        });
      }

      user.token = null;
      user.isVerifed = true;

      //save the verification status on db:
      await user.save();

      return res.status(200).json({
        success: true,
        message: "Email verified successfully",
      });
    } catch (error) {
      logger.error(`Error in verifying token: ${error.message}`);
      if (error === "TokenExpiredError") {
        return res.status(400).json({
          success: false,
          message: "The registration token has expired",
        });
      }
      return res.status(400).json({
        success: false,
        message: "Token verification failed",
      });
    }
  } catch (error) {
    logger.error(`Error in verify Email Controller ${error.message}`);
    return res.status(500).json({
      success: false,
      message: `Error in verify Email Controller ${error.message}`,
    });
  }
};

export const reVerifyEmailController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "user not found",
      });
    }

    const token = generateEmailVerificationToken(user); //generate verification token
    verifyEmail(user.firstName, email, token); //sending email here

    user.token = token;
    await user.save();
    return res.status(201).json({
      success: true,
      message: "Verification email sent again successfully",
      token: user.token,
    });
  } catch (error) {
    logger.error(`Error in register controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: `Error in reVerify Email Controller: ${error.message}`,
    });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.status(400).json({
        success: false,
        message: "User does not exist",
      });
    }

    const passwordValidation = await bcrypt.compare(
      password,
      existingUser.password,
    );
    if (!passwordValidation) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }
    if (existingUser.isVerifed === false) {
      return res.status(400).json({
        success: false,
        message: "Please verify your email, then login again!",
      });
    }

    //generate token:
    const accessToken = jwt.sign({ id: existingUser._id }, env.JWT_SECRET, {
      expiresIn: "3d",
    });
    const refreshToken = jwt.sign({ id: existingUser._id }, env.JWT_SECRET, {
      expiresIn: "30d",
    });

    existingUser.isLoggedIn = true;

    await existingUser.save();

    //check for existing session and delete it:
    const existingSession = await Session.findOne({ userId: existingUser._id });
    if (existingSession) {
      await Session.deleteOne({ userId: existingUser._id });
    }

    //creating new Session:
    await Session.create({ userId: existingUser._id });
    return res.status(200).json({
      success: true,
      message: `Welcome back ${existingUser.firstName}`,
      user: existingUser,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    logger.error(`Error in login User controller: ${error.message}`);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const logoutUserController = async (req, res) => {
  try {
    const userId = req.id;
    await Session.deleteMany({ userId: userId });
    await User.findByIdAndUpdate(userId, { isLoggedIn: false });
    return res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: `User not found`,
      });
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); //10 mintues

    user.otp = otp;
    user.otpExpiry = otpExpiry;

    await user.save();
    await sendOTPMail(user.firstName, email, otp);
    return res.status(200).json({
      success: true,
      message: "OTP sent to email successfully",
    });
  } catch (error) {
    logger.error(`Error in forgot Password Controller: ${error.message}`);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyOTPController = async (req, res) => {
  try {
    const { otp } = req.body;
    const email = req.params.email;
    if (!otp) {
      res.status(400).json({
        success: false,
        message: "otp is required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    // console.log(user.otp, user.otpExpiry)
    if (!user.otp || !user.otpExpiry) {
      return res.status(400).json({
        success: false,
        message: "OTP is not generated or already verified",
      });
    }
    if (user.otpExpiry < new Date()) {
      return res.status(400).json({
        success: false,
        message: "OTP has expired pls generate a new one!",
      });
    }
    if (user.otp !== otp) {
      return res.status(400).json({
        success: false,
        message: "OTP is invalid",
      });
    }
    user.otp = null;
    user.otpExpiry = null;
    await user.save();
    return res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });
  } catch (error) {
    logger.error(`Error in verify OTP controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const changePasswordController = async (req, res) => {
  try {
    const { newPassword, confirmPassword } = req.body;
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    if (!newPassword || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password do not match",
      });
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    logger.error(`Error in change Password controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const allUserController = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    logger.error(`Error in fetching all user controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = User.findById(userId).select(
      "-password -otp -otpExpiry -token",
    );
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    logger.error(`Error in fetching user by id controller: ${error.message}`);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

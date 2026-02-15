import express from "express"
import { loginUserController, registerController, reVerifyEmailController, verifyEmailController, logoutUserController, forgotPasswordController, verifyOTPController, changePasswordController, allUserController } from "../controllers/user.contorller.js"
import { isAdmin, isAuthenticated } from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/register",registerController);
router.post("/verify",verifyEmailController);
router.post("/re-verify",reVerifyEmailController);
router.post("/login",loginUserController)
router.post("/logout",isAuthenticated,logoutUserController)
router.post("/forgot-password", forgotPasswordController)
router.post("/verify-otp/:email",verifyOTPController)
router.post("/change-password/:email",changePasswordController)
router.get("/all-users",isAuthenticated, isAdmin, allUserController)

export default router;
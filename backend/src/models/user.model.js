import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: "",
    },
    profilePicPublicId: {
        type: String,
        default: "",
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user","admin"],
        default: "user"
    },
    token: {
        type: String,
        default: null
    },
    isVerifed: {
        type: Boolean,
        default: false
    },
    isLoggedIn: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String,
        default: null
    },
    otpExpiry: {
        type: Date,
        default: null
    },
    city: {
        type: String,
    },
    zipcode: {
        type: String,
    },
    phoneNumber: {
        type: String,
    }
},{
    timestamps: true
})

export const User = mongoose.model("User",userSchema);
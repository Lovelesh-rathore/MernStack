import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    userName: {
        type: String,
        required: true,
        unique: true,
    },
    fullname: {
        type: String,   
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: "",
    },
    googleId: {
        type: String,
    },
    status: {
        type: String,   
        enum: ["Active", "Inactive", "Suspended"],
        default: "Active",
    },
    role: {
        type: String,   
        enum: ["User", "Admin"],
        default: "User",
    },
}, {timestamps: true});

const User = mongoose.model("User", userSchema);

export default User;
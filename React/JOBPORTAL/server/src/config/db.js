import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        const conn =await mongoose.connect(process.env.MONGO_URI);
        console.log("MpngoDB connected at",conn.Connection.host);
        
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}

export default connectDB;
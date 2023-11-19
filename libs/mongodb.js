import { log } from "console";
import mongoose from "mongoose";
const connectMongoDB = () =>{
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongoDB");
    } catch (error) {
        console.log(error);
    }
};
export default connectMongoDB;
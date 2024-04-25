import mongoose from "mongoose";

const connect = async ()=>{
    mongoose.set("strictQuery",false)
    try {
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Mongodb connected");
    } catch (error) {
        console.log(error);
    }
}

export default connect
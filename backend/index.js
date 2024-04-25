import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import connect from "./db.js"

import tourRoute from "./routes/tours.js"
import userRoute from "./routes/user.js"
import authRoute from "./routes/auth.js"
import reviewRoute from "./routes/reviews.js"
import bookingRoute from "./routes/bookings.js"

dotenv.config()
const app = express()
const port  = process.env.PORT || 8000
const corsOptions = {
    origin:true,
    credentials:true
}


// Middleware 
app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))

app.use("/api/v1/tours",tourRoute)
app.use("/api/v1/user",userRoute)
app.use("/api/v1/auth",authRoute)
app.use("/api/v1/review",reviewRoute)
app.use("/api/v1/booking",bookingRoute)



app.listen(port,()=>{
    connect()
    console.log("Server listening on port",port);
})
import express from "express"
import cors from "cors"
import 'dotenv/config';
import serviceRouter from "./routes/serviceRoute.js";
import industryRouter from "./routes/industryRoute.js";
import connectDB from "./config/db.js";

// app config

const app = express();
const port = process.env.PORT || 4000

// middleware
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

// db connection

connectDB();



// api endpoints
app.use("/images",express.static('uploads'))
app.use("/api/service",serviceRouter);
app.use("/api/industry", industryRouter);


app.get("/" , (req , res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`);
})


import express from "express"
import cors from "cors"
import 'dotenv/config';
import serviceRouter from "./routes/serviceRoute.js";
import industryRouter from "./routes/industryRoute.js";
import connectDB from "./config/db.js";
import cvRouter from "./routes/cvRoute.js";
import adminRouter from "./routes/adminRoute.js";
import vacancyRouter from "./routes/vacancyRoute.js";

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
app.use("/uploads/resumes", express.static("uploads/resumes"));
app.use("/api/service",serviceRouter);
app.use("/api/industry", industryRouter);
app.use("/api/cv", cvRouter);
app.use("/api/admin", adminRouter);
app.use("/api/vacancy", vacancyRouter);

app.get("/" , (req , res)=>{
    res.send("API Working")
})

app.listen(port, ()=>{
    console.log(`server started on http://localhost:${port}`);
})


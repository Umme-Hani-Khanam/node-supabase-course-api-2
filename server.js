import loggermiddleware from "./src/middleware/loggermiddlware.js";
import express from "express";
import cors from "cors";
import coursesRoute from './src/routes/coursesRoute.js'
const app=express();
const PORT=6900;
app.use(express.json());
app.use(cors());
app.use('/api',coursesRoute);


app.listen(PORT,()=>{
    console.log('Server running at port',PORT)
})
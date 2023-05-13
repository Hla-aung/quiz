import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/routes.js"

const app = express();
dotenv.config();
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());

const port = process.env.PORT || 3000;

app.use('/api', router)

mongoose.connect(process.env.MONGODB)
.then(() => {
    console.log("MongoDB is connected!")
    try{
        app.listen(port, () => {
            console.log(`Server is running on: http://localhost:${port}`)
        })
    } catch(error) {
        console.log(error)
    }
    
})
.catch((error) => {
    console.log(error)
})


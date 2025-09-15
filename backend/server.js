import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import entriesRouter from "./routes/entries.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/entries", entriesRouter);

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MongoDB_URI)
    .then(()=>console.log("Connected Mongo DB ;)"))
    .catch((err)=>console.error("Skill Issue Mongo DB: ", err));

app.get("/", (req, res)=>{
    res.send("Hello!, I am building a mini Journal");
});

app.listen(port, ()=>{
    console.log("Server running (catch it) on 5000");
});
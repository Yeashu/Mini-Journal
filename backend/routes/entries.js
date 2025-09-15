import express from "express";
import Entry from "../models/Entry.js";

const router = express.Router();

router.post("/", async (req,res) => {
    const {date, content} = req.body;
    const entry = new Entry({date, content});
    await entry.save();
    res.status(201).json(entry);
});

router.get("/", async (req, res)=>{
    const entries = await Entry.find().sort({date: -1});
    res.json(entries);
});

router.patch("/:id", async (req, res)=>{
    const { content } = req.body;
    const updated = await Entry.findByIdAndUpdate(
        req.params.id,
        {content},
        {new: true}
    );
    res.json(updated);
});

router.delete("/:id", async (req, res)=>{
    await Entry.findByIdAndDelete(req.params.id);
    res.json({message:`Entry Deleted by Id ${req.params.id}`});
})

export default router;
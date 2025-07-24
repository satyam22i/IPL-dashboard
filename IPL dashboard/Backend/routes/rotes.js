import express from "express";
import Match from "../models/matches.js";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const matches = await Match.find();
    res.status(200).json(matches);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch matches", message: err.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const match = new Match(req.body); 
    await match.save(); 
    res.status(201).json(match);
  } catch (err) {
    res.status(400).json({ error: "Failed to add match", message: err.message });
  }
});

export default router;

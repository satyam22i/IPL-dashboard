import express from "express";
import Match from "../models/matches.js";

const router = express.Router();

// GET /api/matches - Fetch all matches
router.get("/", async (req, res) => {
  try {
    const matches = await Match.find(); // Get from MongoDB
    res.status(200).json(matches);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch matches", message: err.message });
  }
});

// POST /api/matches - Add a new match
router.post("/", async (req, res) => {
  try {
    const match = new Match(req.body); // Create new match from request body
    await match.save(); // Save to MongoDB
    res.status(201).json(match);
  } catch (err) {
    res.status(400).json({ error: "Failed to add match", message: err.message });
  }
});

export default router;

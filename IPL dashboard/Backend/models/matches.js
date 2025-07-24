import mongoose from "mongoose";

const MatchSchema = new mongoose.Schema(
  {
    team1: { type: String, required: true },
    team2: { type: String, required: true },
    score1: { type: String, required: true },
    score2: { type: String, required: true },
    overs1: { type: String, required: true },
    overs2: { type: String, required: true },
    wickets1: { type: Number, required: true },
    wickets2: { type: Number, required: true },
    status: {
      type: String,
      enum: ['Live', 'Completed'],
      default: 'Live'
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Match", MatchSchema);

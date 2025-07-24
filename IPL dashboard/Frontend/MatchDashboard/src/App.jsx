import React, { useEffect, useState } from "react";
import axios from "axios";
import MatchCard from "./components/MatchCard";

function App() {
  const [matches, setMatches] = useState([]);
  const [filter, setFilter] = useState("All"); // All, Live, Completed

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/matches")
      .then((res) => setMatches(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Filtered matches based on selected filter
  const filteredMatches = matches.filter((match) => {
    if (filter === "All") return true;
    return match.status === filter;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
        IPL Live Score Dashboard
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setFilter("All")}
          className={`px-4 py-2 rounded-full border ${
            filter === "All"
              ? "bg-blue-600 text-white"
              : "bg-white text-blue-600"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Live")}
          className={`px-4 py-2 rounded-full border ${
            filter === "Live"
              ? "bg-green-600 text-white"
              : "bg-white text-green-600"
          }`}
        >
          Live
        </button>
        <button
          onClick={() => setFilter("Completed")}
          className={`px-4 py-2 rounded-full border ${
            filter === "Completed"
              ? "bg-gray-600 text-white"
              : "bg-white text-gray-600"
          }`}
        >
          Completed
        </button>
      </div>

      {/* Match Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredMatches.length > 0 ? (
          filteredMatches.map((match, index) => (
            <MatchCard key={index} match={match} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No matches found.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

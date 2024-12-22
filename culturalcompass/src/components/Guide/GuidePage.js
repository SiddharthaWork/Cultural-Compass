"use client"
import React from "react";
// import guidesData from "../data/guidesData";
import guidesData from "./page";
const GuidePage = () => {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Travel Guides</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap" }}>
        {Object.keys(guidesData).map((cityName) => (
          <button
            key={cityName}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4caf50",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
            onClick={() => navigate(`/city/${cityName}`)}
          >
            {cityName}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GuidePage;

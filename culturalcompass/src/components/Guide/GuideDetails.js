import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import guidesData from "../data/guidesData";
import guidesData from "./page";


const GuiderDetails = () => {
  const { cityName, guideId } = useParams();
  const navigate = useNavigate();

  const city = guidesData[cityName];
  if (!city) {
    return <p>City not found.</p>;
  }

  const guide = city.guides.find((g) => g.id === parseInt(guideId, 10));
  if (!guide) {
    return <p>Guide not found.</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Guide Details</h1>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "500px",
          margin: "0 auto",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2>{guide.name}</h2>
        <p><strong>Expertise:</strong> {guide.expertise}</p>
        <p><strong>Contact:</strong> {guide.contact}</p>
        <button
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
          Back to {cityName}
        </button>
      </div>
    </div>
  );
};

export default GuiderDetails;

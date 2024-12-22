import React from "react";
import { useParams, useNavigate } from "react-router-dom";
// import guidesData from "../data/guidesData";
import guidesData from "./page";


const CityPage = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();

  const city = guidesData[cityName];

  if (!city) {
    return <p>City not found.</p>;
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{cityName}</h1>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>{city.description}</p>
      
      <h2>Available Guides:</h2>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        {city.guides.map((guide) => (
          <div
            key={guide.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "15px",
              maxWidth: "400px",
              textAlign: "left",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h3>{guide.name}</h3>
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
                marginTop: "10px",
              }}
              onClick={() => navigate(`/city/${cityName}/guide/${guide.id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityPage;

"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projectData } from "@/data/cityData"; // Importing project data
import Topplaces from "../Home/Topplaces";  // Ensure Topplaces is the correct component
import Places from "../Suggest/Places";
import City from "../Home/City";

const More = () => {
  const [cityData, setCityData] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams ? parseInt(searchParams.get("id") || "0", 10) : 0;
  const imageId = searchParams ? parseInt(searchParams.get("imageId") || "0", 10) : 0; // Get imageId

  useEffect(() => {
    if (id) {
      // Find the city item by ID
      const foundItem = projectData.find((item) => item.id === id);
      setCityData(foundItem || null);
    }
  }, [id]);

  if (!cityData) {
    return <p className="text-center text-lg text-gray-500">Loading...</p>;
  }

  // OpenStreetMap URL for Kathmandu, Nepal
  const osmUrl = "https://www.openstreetmap.org/export/embed.html?bbox=85.2074%2C27.6532%2C85.3481%2C27.7306&layer=mapnik";

  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Header Image */}
      <div className="relative w-full h-[32rem]">
        <img
          src={cityData.image}
          alt={cityData.city}  // Use city for alt text
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* City Content */}
      <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{cityData.city}</h1>
          <p className="text-xl text-gray-600 mt-2">{cityData.des}</p>
        </div>

        {/* Top Places or Image Section */}
        {imageId && (
          <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">One of The Top Places of {cityData.city}</h2>
            {cityData.images
              .filter((image) => image.id === imageId)  // Filter images based on imageId
              .map((place, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-3xl font-bold text-red-500">{place.title}</h3>
                  <p className="text-lg text-gray-500">{place.des}</p>
                </div>
              ))}
          </div>
        )}

        {/* Main Attractions List */}
        <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Attractions</h2>
          {cityData.attractions.map((attraction, index) => (
            <div key={index} className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-700">{attraction.name}</h3>
              <p className="text-gray-500">{attraction.description}</p>
            </div>
          ))}
        </div>

        {/* Food List */}
        <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Food</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityData.food
              .sort(() => Math.random() - 0.5) // Shuffle the food array
              .slice(0, 4) // Limit the number of items (e.g., 3 random items)
              .map((food, index) => (
                <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-medium text-gray-700">{food.name}</h3>
                  <p className="mt-2 text-lg text-gray-500">{food.description}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Nearby Places */}
        <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nearby Places</h2>
          {cityData.nearby.map((place, index) => (
            <div key={index} className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold text-gray-700">{place.name}</h3>
              <p className="text-gray-500">{place.description}</p>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white p-6 rounded-lg shadow-xl mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Location Map</h2>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
            <iframe
              src={osmUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <City />
    </div>
  );
};

export default More;

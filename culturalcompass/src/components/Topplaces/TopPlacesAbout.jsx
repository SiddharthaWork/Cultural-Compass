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

  return (
    <div className="w-full h-full relative bg-[#FFFAFA]">
      {/* Header Image */}
      <div className="w-full h-[32rem] inset-0">
        <img
          src={cityData.image}
          alt="city"  // Use city for alt text
          className="w-full h-full object-cover"
        />
      </div>

      {/* City Content */}
      <div className="flex flex-col w-full h-full lg:px-24 xl:px-32 xl:py-16 md:px-12 md:py-10 lg:py-20 px-6 py-6 relative">
        {/* <div className="text-left space-y-6">
          <h1 className="md:text-4xl text-2xl font-bold">{cityData.city}</h1>
          <p className="mt-4 text-xl text-gray-700">{cityData.des}</p>
        </div>

        <div className="flex flex-col w-full h-full space-y-8 py-8 border-b border-black/20 md:text-base text-sm">
          <p className="leading-7 text-black/80">{cityData.des}</p>
        </div> */}

        {/* Filter and render images based on the imageId */}
        {imageId && (
          <div className="py-6">
            <h2 className="text-2xl font-bold">One of The Top Places of {cityData.city}</h2>
            {cityData.images
              .filter((image) => image.id === imageId)  // Filter images based on imageId
              .map((place, index) => (
                <div key={index} className="mt-4">
                  <h3 className="text-lg font-semibold">{place.title}</h3>
                  <p>{place.des}</p>
                </div>
              ))}
          </div>
        )}

        {/* Main Attractions List */}
        <div className="py-6">
          <h2 className="text-xl font-bold">Attractions</h2>
          {cityData.attractions.map((attraction, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-lg font-semibold">{attraction.name}</h3>
              <p>{attraction.description}</p>
            </div>
          ))}
        </div>


        {/* Food List */}
        <div className="py-6">
          <h2 className="text-xl font-bold">Food</h2>
          {cityData.food
            .sort(() => Math.random() - 0.5) // Shuffle the food array
            .slice(0, 4) // Limit the number of items (e.g., 3 random items)
            .map((food, index) => (
              <div key={index} className="mt-4">
                <h3 className="text-xl font-semibold">{food.name}</h3>
                <p className="mt-2 text-lg">{food.description}</p>
              </div>
            ))}
        </div>

        {/* Nearby Places */}
        <div className="py-6">
          <h2 className="text-xl font-bold">Nearby Places</h2>
          {cityData.nearby.map((place, index) => (
            <div key={index} className="mt-4">
              <h3 className="text-lg font-semibold">{place.name}</h3>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      </div>

      <City />
      {/* Pass the images to the Places component */}
    </div>
  );
};

export default More;

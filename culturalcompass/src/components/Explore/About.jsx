"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projectData } from "@/data/cityData"; // Importing project data
import Places from "../Suggest/Places";

const Readmore = () => {
  const [cityData, setCityData] = useState(null);
  const searchParams = useSearchParams();
  
  // Get 'id' from the URL, default to '0' if it's undefined or invalid
  const id = searchParams ? parseInt(searchParams.get("id") || "0", 10) : 0;

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
          alt={cityData.city}  // Use city for alt text
          className="w-full h-full object-cover"
        />
      </div>

      {/* City Content */}
      <div className="flex flex-col w-full h-full lg:px-24 xl:px-32 xl:py-16 md:px-12 md:py-10 lg:py-20 px-6 py-6 relative">
        {/* City Title */}
        <div className="text-left space-y-6">
          <h1 className="md:text-4xl text-2xl font-bold">{cityData.city}</h1>
          <p className="mt-4 text-xl text-gray-700">{cityData.des}</p>
        </div>

        {/* City Details */}
        <div className="flex flex-col w-full h-full space-y-8 py-8 border-b border-black/20 md:text-base text-sm">
        </div>

        {/* Author Bio */}
        <div className="flex p-6 border-b border-black/20">
          <p className="text-black/50 font-serif md:text-base text-sm leading-relaxed">
            {cityData.des2}
          </p>
        </div>
      </div>

      {/* Pass the images, alt, and id  to the Places component */}
      <Places images={cityData.images} alt={cityData.city} cityId={cityData.id} />
    </div>
  );
};

export default Readmore;

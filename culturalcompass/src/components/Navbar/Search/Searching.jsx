"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { projectData } from "@/data/cityData"; // Assuming this is the correct path
import { SearchBar } from "./Search";
import Link from "next/link";

const SearchPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams(); // Get search parameters
  const [filteredData, setFilteredData] = useState(projectData);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Read query parameter from the URL
    const searchQuery = searchParams.get("query") || ""; // Access the 'query' parameter
    setQuery(searchQuery);
    handleSearch(searchQuery);
  }, [searchParams]);

  // Handle search query
  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();

    const filtered = projectData.filter((city) =>
      city.city.toLowerCase().includes(lowerCaseQuery) ||
      city.des.toLowerCase().includes(lowerCaseQuery) ||
      city.attractions.some((attraction) =>
        attraction.name.toLowerCase().includes(lowerCaseQuery)
      )
    );

    setFilteredData(filtered);
  };

  const handleSearchBarSubmit = (query) => {
    // Update the query parameter in the URL
    router.push(`/search?query=${query}`);
  };

  return (
    <div className="px-4 py-6 md:px-10 xl:px-16">
      {/* Search Bar */}
      <SearchBar
        placeholder="Search for a city..."
        onSearch={handleSearchBarSubmit}
        className="mb-6"
      />

      {/* Search Results */}
      <div>
        {filteredData.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredData.map((city) => (
              <div
                key={city.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                 <Link
                    href={{
                      pathname: "/explore", // Navigate to Readmore page
                      query: {
                        id: city.id, // Pass the item ID as a query parameter
                      },
                    }}
                  >
                <img
                  src={city.image}
                  alt={city.city}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg font-semibold">{city.city}</h2>
                <p className="text-gray-600 text-sm mb-2">{city.des}</p>
                <p className="text-gray-500 text-sm">
                  Attractions:{" "}
                  {city.attractions.map((attraction) => attraction.name).join(", ")}
                </p>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No cities found for your search.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

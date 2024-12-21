'use client';

import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { projectData } from '@/data/cityData'; // Assuming this is where your city data is stored

export function SearchBar({ placeholder = 'Search...', className = '' }) {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Filter city data based on query
    useEffect(() => {
        if (query) {
            const filtered = projectData.filter((city) =>
                city.city.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredSuggestions(filtered);
        } else {
            setFilteredSuggestions([]);
        }
    }, [query]);

    // Ensure the component is mounted on client side
    if (!isMounted) return null;

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query && router) {
            // Clear suggestions and navigate to the search page
            setFilteredSuggestions([]);
            router.push(`/search?query=${query}`);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.city);  // Set the selected city as the search query
        setFilteredSuggestions([]); // Clear the suggestions
        router.push(`/search?query=${suggestion.city}`);  // Redirect to the search page
    };

    return (
        <form onSubmit={handleSubmit} className={`relative ${className}`}>
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={handleInputChange}
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border-2 rounded-full focus:outline-none focus:border-red-600"
            />
            <button type="submit" className="absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="w-5 h-5 text-gray-400" />
            </button>

            {/* Show Suggestions Dropdown */}
            {filteredSuggestions.length > 0 && query && (
                <ul className="absolute w-full bg-white border mt-1 rounded-lg shadow-md max-h-60 overflow-y-auto z-10">
                    {filteredSuggestions.map((suggestion) => (
                        <li
                            key={suggestion.id}
                            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 flex items-center space-x-3"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {/* Small city image */}
                            <img
                                src={suggestion.image} // Assuming each city has an image field
                                alt={suggestion.city}
                                className="w-8 h-8 object-cover rounded-full"
                            />
                            <span>{suggestion.city}</span>
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
}

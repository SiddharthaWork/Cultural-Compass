"use client";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import "./GuidePage.css"; // Import the CSS file

const GuidePage = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  // Expanded guidesData with more cities
  const guidesData = {
    Kathmandu: {
      guides: [
        { 
          id: 1, 
          name: "Ram Prasad", 
          expertise: "Cultural Tours", 
          contact: "ramprasad@example.com", 
          phone: "+977-986-3314588", 
          pricing: { USD: 50, NPR: 6000 }
        },
        { 
          id: 2, 
          name: "Shyam Thapa", 
          expertise: "Historical Tours", 
          contact: "shyamthapa@example.com", 
          phone: "+977-984-1314589", 
          pricing: { USD: 45, NPR: 5400 }
        },
        { 
          id: 3, 
          name: "Sita Kumari", 
          expertise: "Religious Tours", 
          contact: "sitakumari@example.com", 
          phone: "+977-986-2316898", 
          pricing: { USD: 40, NPR: 4800 }
        },
        { 
          id: 4, 
          name: "Anil Bista", 
          expertise: "Photography Tours", 
          contact: "anilbista@example.com", 
          phone: "+977-986-5314596", 
          pricing: { USD: 55, NPR: 6600 }
        },
      ],
    },
    Pokhara: {
      guides: [
        { 
          id: 1, 
          name: "Suraj Gurung", 
          expertise: "Mountain Trekking", 
          contact: "surajgurung@example.com", 
          phone: "+977-986-3657833", 
          pricing: { USD: 60, NPR: 7200 }
        },
        { 
          id: 2, 
          name: "Maya Rana", 
          expertise: "Lakeside Adventures", 
          contact: "mayarana@example.com", 
          phone: "+977-986-3868988", 
          pricing: { USD: 50, NPR: 6000 }
        },
        { 
          id: 3, 
          name: "Ramesh Khadka", 
          expertise: "Adventure Tourism", 
          contact: "rameshkhadka@example.com", 
          phone: "+977-986-3355698", 
          pricing: { USD: 55, NPR: 6600 }
        },
        { 
          id: 4, 
          name: "Nita Sharma", 
          expertise: "Bird Watching", 
          contact: "nitasharma@example.com", 
          phone: "+977-986-5568988", 
          pricing: { USD: 45, NPR: 5400 }
        },
      ],
    },
    Lumbini: {
      guides: [
        { 
          id: 1, 
          name: "Rajendra Gautam", 
          expertise: "Cultural and Historical Tours", 
          contact: "rajendragautam@example.com", 
          phone: "+977-986-5682968", 
          pricing: { USD: 40, NPR: 4800 }
        },
        { 
          id: 2, 
          name: "Jaya Prakash", 
          expertise: "Spiritual Tours", 
          contact: "jayaprakash@example.com", 
          phone: "+977-986-8649201", 
          pricing: { USD: 50, NPR: 6000 }
        },
      ],
    },
    Chitwan: {
      guides: [
        { 
          id: 1, 
          name: "Deepak Sharma", 
          expertise: "Wildlife Tours", 
          contact: "deepaksharma@example.com", 
          phone: "+977-56-112233", 
          pricing: { USD: 65, NPR: 7800 }
        },
        { 
          id: 2, 
          name: "Prakash Rai", 
          expertise: "Nature Tours", 
          contact: "prakashrai@example.com", 
          phone: "+977-56-445566", 
          pricing: { USD: 60, NPR: 7200 }
        },
        { 
          id: 3, 
          name: "Gita Adhikari", 
          expertise: "Eco-Tourism", 
          contact: "gitaadhikari@example.com", 
          phone: "+977-56-778899", 
          pricing: { USD: 55, NPR: 6600 }
        },
      ],
    },
    Bandipur: {
      guides: [
        { 
          id: 1, 
          name: "Hari Bahadur", 
          expertise: "Cultural Heritage Tours", 
          contact: "haribahadur@example.com", 
          phone: "+977-64-123456", 
          pricing: { USD: 45, NPR: 5400 }
        },
        { 
          id: 2, 
          name: "Sushila Rai", 
          expertise: "Village Tourism", 
          contact: "sushilarai@example.com", 
          phone: "+977-64-654321", 
          pricing: { USD: 40, NPR: 4800 }
        },
      ],
    },
    Ilam: {
      guides: [
        { 
          id: 1, 
          name: "Ravi Kumar", 
          expertise: "Tea Garden Tours", 
          contact: "ravikumar@example.com", 
          phone: "+977-27-123456", 
          pricing: { USD: 50, NPR: 6000 }
        },
        { 
          id: 2, 
          name: "Madhavi Thapa", 
          expertise: "Nature and Cultural Tours", 
          contact: "madhavithapa@example.com", 
          phone: "+977-27-654321", 
          pricing: { USD: 55, NPR: 6600 }
        },
      ],
    },
    Gosaikunda: {
      guides: [
        { 
          id: 1, 
          name: "Rohit Poudel", 
          expertise: "Trekking and Pilgrimage Tours", 
          contact: "rohitpoudel@example.com", 
          phone: "+977-98-123456", 
          pricing: { USD: 70, NPR: 8400 }
        },
        { 
          id: 2, 
          name: "Sabina Gurung", 
          expertise: "Mountain Trekking", 
          contact: "sabinagurung@example.com", 
          phone: "+977-98-654321", 
          pricing: { USD: 65, NPR: 7800 }
        },
      ],
    },
    Dhulikhel: {
      guides: [
        { 
          id: 1, 
          name: "Bikash Sharma", 
          expertise: "Mountain View Tours", 
          contact: "bikashsharma@example.com", 
          phone: "+977-11-123456", 
          pricing: { USD: 50, NPR: 6000 }
        },
        { 
          id: 2, 
          name: "Kamala Devi", 
          expertise: "Cultural and Nature Tours", 
          contact: "kamaladevi@example.com", 
          phone: "+977-11-654321", 
          pricing: { USD: 55, NPR: 6600 }
        },
      ],
    },
    Chitlang: {
      guides: [
        { 
          id: 1, 
          name: "Vikram Sharma", 
          expertise: "Yoga and Spirituality Tours", 
          contact: "vikramsharma@example.com", 
          phone: "+91-135-123456", 
          pricing: { USD: 50, NPR: 6000 }
        },
        { 
          id: 2, 
          name: "Anjali Gupta", 
          expertise: "Adventure Tourism", 
          contact: "anjaligupta@example.com", 
          phone: "+91-135-654321", 
          pricing: { USD: 55, NPR: 6600 }
        },
      ],
    },

    // Additional cities
    Nagarkot: {
      guides: [
        { 
          id: 1, 
          name: "Prakash Bhattarai", 
          expertise: "Hiking and Sunrise Tours", 
          contact: "prakashbhattarai@example.com", 
          phone: "+977-98-1234567", 
          pricing: { USD: 45, NPR: 5400 }
        },
      ],
    },
    Bhaktapur: {
      guides: [
        { 
          id: 1, 
          name: "Suman Koirala", 
          expertise: "Cultural Heritage Tours", 
          contact: "sumankoirala@example.com", 
          phone: "+977-98-7654321", 
          pricing: { USD: 50, NPR: 6000 }
        },
      ],
    },
    SoluKhumbu: {
      guides: [
        { 
          id: 1, 
          name: "Nirmal Rai", 
          expertise: "Everest Region Trekking", 
          contact: "nirmalrai@example.com", 
          phone: "+977-98-1357924", 
          pricing: { USD: 75, NPR: 9000 }
        },
      ],
    },
    Jomsom: {
      guides: [
        { 
          id: 1, 
          name: "Jeevan Thapa", 
          expertise: "Annapurna Circuit Trek", 
          contact: "jeevanthapa@example.com", 
          phone: "+977-98-123654", 
          pricing: { USD: 65, NPR: 7800 }
        },
      ],
    },
    Taplejung: {
      guides: [
        { 
          id: 1, 
          name: "Ramesh Bhandari", 
          expertise: "Kanchenjunga Trekking", 
          contact: "rameshbhandari@example.com", 
          phone: "+977-98-987654", 
          rating: 4.5,
          pricing: { USD: 80, NPR: 9600 }
        },
      ],
    },
    Kaski: {
      guides: [
        { 
          id: 1, 
          name: "Pradeep Gurung", 
          expertise: "Trekking and Nature Tours", 
          contact: "pradeepgurung@example.com", 
          phone: "+977-61-345678", 
          pricing: { USD: 50, NPR: 6000 }
        },
      ],
    },
    Manang: {
      guides: [
        { 
          id: 1, 
          name: "Tashi Lama", 
          expertise: "High-altitude Trekking", 
          contact: "tashilama@example.com", 
          phone: "+977-61-456789", 
          pricing: { USD: 70, NPR: 8400 }
        },
      ],
    },
    Dolpa: {
      guides: [
        { 
          id: 1, 
          name: "Kiran Rai", 
          expertise: "Off-beaten Path Trekking", 
          contact: "kiranrai@example.com", 
          phone: "+977-98-456789", 
          pricing: { USD: 90, NPR: 10800 }
        },
      ],
    },
  };

  return (
    <div className="guide-page">
      <h1 className="title">Travel Guides</h1>
      
      <div className="button-container">
        {/* Buttons for each city */}
        <div className="city-buttons">
          {Object.keys(guidesData).map((place) => (
            <button
              key={place}
              className="guide-button"
              onClick={() => setSelectedPlace(place)}
            >
              {place}
            </button>
          ))}
        </div>
      </div>

      <div className="guide-display">
        {selectedPlace && (
          <>
            <h2>{selectedPlace} Guides</h2>
            <div className="guide-cards-container">
              {guidesData[selectedPlace].guides.map((guide) => (
                <div key={guide.id} className="guide-card">
                  <h3>{guide.name}</h3>
                  <p className="flex"><strong>Expertise:</strong> {guide.expertise}</p>
                  <p className="flex"><strong>Contact:</strong> <a href={`mailto:${guide.contact}`}>{guide.contact}</a></p>
                  <div className="flex items-center">
                  <p className="flex"><FaWhatsapp size={30} className=""/>: <a href={`tel:${guide.phone}`}>{guide.phone}</a></p>
                  
                  {/* <p><strong>Rating:</strong> {guide.rating} / 5</p> */}
                  </div>
                  <div className="pricing flex">
                  <FcMoneyTransfer size={28} className="" />
                  <p><strong>:</strong> <span>${guide.pricing.USD} USD / NPR {guide.pricing.NPR}</span></p>
                  </div>
                  <p className="flex">
                  {[...Array(5)].map((_, index) => (
                  <MdOutlineStar
                  key={index}
                  size={20}
                  className={index < Math.floor(guide.rating) ? "filled-star" : "empty-star"}
                  />
                  ))}
                  {/* <span> {guide.rating} </span> */}
          </p>

                  {/* <div className="pricing">
                    <p><strong>Price:</strong> <span>${guide.pricing.USD} USD / NPR {guide.pricing.NPR}</span></p>
                  </div> */}
                 

                  
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GuidePage;

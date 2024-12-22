"use client";
import React, { useState, useEffect } from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const Events = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [showNoEventsMessage, setShowNoEventsMessage] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);  // Modal state
  const [selectedEvent, setSelectedEvent] = useState(null);  // Selected event for modal

  const getCurrentMonthEvents = (events) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return events.filter((event) => {
      if (!event.date) return false;
      try {
        const eventDate = new Date(event.date);
        return (
          eventDate.getMonth() === currentMonth &&
          eventDate.getFullYear() === currentYear
        );
      } catch (error) {
        console.error("Invalid date for event:", event.title, error);
        return false;
      }
    });
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsRef = collection(db, "events");
        const snapshot = await getDocs(eventsRef);
        const eventsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const currentMonthEvents = getCurrentMonthEvents(eventsData);
        setAllEvents(eventsData);
        setFilteredEvents(currentMonthEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchEvents();
  }, []);

  const handleDateClick = (arg) => {
    const selectedDate = arg.dateStr;

    const eventsOnDate = allEvents.filter((event) => {
      if (!event.date) return false;
      try {
        const eventDate = new Date(event.date);
        return eventDate.toISOString().split("T")[0] === selectedDate;
      } catch (error) {
        console.error("Invalid date for event:", event.title, error);
        return false;
      }
    });

    setFilteredEvents(eventsOnDate);
    setShowNoEventsMessage(eventsOnDate.length === 0);
  };

  const openModal = (event) => {
    setSelectedEvent(event);  // Set the selected event's details
    setModalOpen(true);  // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false);  // Close the modal
    setSelectedEvent(null);  // Reset selected event
  };

  return (
    <div>
      <div className="w-full md:h-16 h-14 border-l-8 border-[#4cb9f2] flex justify-start items-center px-6 mx-32 mt-12">
          <h1 className="md:text-4xl text-2xl text-black font-bold">
            Upcoming Events
          </h1>
        </div>
    <div className="flex w-full h-full px-32 py-8">
      {/* Calendar Section */}
      <div className="w-1/2 pr-4 cursor-pointer">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={allEvents.map((event) => ({
            title: event.title,
            date: event.date,
            description: event.location,
          }))}
          nowIndicator={true}
          dateClick={handleDateClick}
          height="400px"
          style={{ maxWidth: "100%" }}
        />
      </div>

      {/* Events Section */}
      <div className="w-1/2 ">
        <div className=" grid grid-cols-2 items-start gap-2">
          {showNoEventsMessage ? (
            <div className="text-center text-gray-600 font-semibold">
              No events found for the selected date.
            </div>
          ) : (
            filteredEvents.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="flex justify-center items-center mb-4 "
                onClick={() => openModal(item)}  // Open modal on event click
              >
                <div className="w-[18rem] h-[18rem] bg-white flex flex-col rounded-xl overflow-hidden shadow-lg relative gap-8">
                  <div className="w-full h-[8rem] bg-blue-400">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-[8rem] h-8 bg-red-500 p-2 rounded-lg flex justify-center items-center absolute top-28 right-4">
                    <span className="flex items-center gap-2">
                      <SlCalender color="white" />
                      <h1 className="text-white text-[14px]">{item.date}</h1>
                    </span>
                  </div>
                  <div className="flex flex-col p-4 justify-center gap-4">
                    <span className="flex gap-2 items-center">
                      <IoLocationOutline size={20} color="red" />
                      <p className="px-2 py-1 border rounded-md text-black/80 text-xl font-semibold">
                        {item.location}
                      </p>
                    </span>
                    <span className="flex gap-2 items-center">
                      <FaLocationCrosshairs size={20} color="blue" />
                      <h1 className="text-black/80 text-lg font-semibold px-2">
                        {item.title}
                      </h1>
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modal for Event Description */}
      {modalOpen && selectedEvent && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">{selectedEvent.title}</h2>

            {/* Event Image */}
            <div className="mb-4">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-md"
              />
            </div>

            {/* Event Details */}
            <div className="mb-4">
              <span className="flex items-center gap-2">
                <SlCalender size={20} color="gray" />
                <p className="text-gray-700 text-lg">{selectedEvent.date}</p>
              </span>
            </div>
            <div className="mb-4">
              <span className="flex items-center gap-2">
                <IoLocationOutline size={20} color="red" />
                <p className="text-gray-700 text-lg">{selectedEvent.location}</p>
              </span>
            </div>

            <p className="mb-4 text-gray-700">{selectedEvent.description}</p>
            {/* Close Button */}
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>

  );
};

export default Events;
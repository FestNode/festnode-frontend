import React from "react";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const dateObject = new Date(event.eventDate);

  const hours = dateObject.getHours(); // Returns hour (0-23)
  const minutes = dateObject.getMinutes(); // Returns minutes (0-59)

  // Format manually
  const formattedTime = `${hours % 12 || 12}:${minutes
    .toString()
    .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;

  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  console.log("TIME", formattedTime);
  return (
    <Link
      to={event.eventId}
      key={event.eventId}
      className="block bg-white rounded-lg shadow-xl hover:scale-105 transition-transform duration-500 w-[20rem] m-8 py-4"
    >
      {/* Tag Section */}
      <div className="relative bg-white p-4">
        <div className="absolute top-3 -left-8 bg-purple-100 text-purple-600 font-medium text-xs rounded-lg px-3 py-1 z-10">
          {event.eventCategory || "Event"}
        </div>

        {/* Image */}
        <img
          src={event.eventPoster.imageUrl}
          alt="Post Thumbnail"
          className="object-cover w-full h-36 rounded-lg shadow-xl translate-x-10 mt-12 mb-2 hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Title */}
        <h2 className="text-lg font-bold text-gray-700 leading-tight">
          {event.eventName}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2">{event.eventDescription}</p>

        {/* Author and Reading Time */}
        <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
          <div>
            <div className="bg-purple-100 text-purple-600 font-medium text-xs rounded-xl px-4 py-2 flex space-x-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-4"
                >
                  <path d="M12 11.993a.75.75 0 0 0-.75.75v.006c0 .414.336.75.75.75h.006a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75H12ZM12 16.494a.75.75 0 0 0-.75.75v.005c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H12ZM8.999 17.244a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.006ZM7.499 16.494a.75.75 0 0 0-.75.75v.005c0 .414.336.75.75.75h.005a.75.75 0 0 0 .75-.75v-.005a.75.75 0 0 0-.75-.75H7.5ZM13.499 14.997a.75.75 0 0 1 .75-.75h.006a.75.75 0 0 1 .75.75v.005a.75.75 0 0 1-.75.75h-.006a.75.75 0 0 1-.75-.75v-.005ZM14.25 16.494a.75.75 0 0 0-.75.75v.006c0 .414.335.75.75.75h.005a.75.75 0 0 0 .75-.75v-.006a.75.75 0 0 0-.75-.75h-.005ZM15.75 14.995a.75.75 0 0 1 .75-.75h.005a.75.75 0 0 1 .75.75v.006a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-.006ZM13.498 12.743a.75.75 0 0 1 .75-.75h2.25a.75.75 0 1 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM6.748 14.993a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" />
                  <path
                    fill-rule="evenodd"
                    d="M18 2.993a.75.75 0 0 0-1.5 0v1.5h-9V2.994a.75.75 0 1 0-1.5 0v1.497h-.752a3 3 0 0 0-3 3v11.252a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3V7.492a3 3 0 0 0-3-3H18V2.993ZM3.748 18.743v-7.5a1.5 1.5 0 0 1 1.5-1.5h13.5a1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>

              <div>{formattedDate}</div>
            </div>
          </div>
          <div className="bg-purple-100 text-purple-600 font-medium text-xs rounded-xl px-4 py-2 flex space-x-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <div>{formattedTime}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

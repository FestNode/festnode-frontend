import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Layout/Header/Header";
import { getFest } from "../../Redux/fest/festSlice";
import apj from "../../Images/apj.png";
import { getAllEvents } from "../../Redux/event/eventSlice";
import EventCard from "../CommonComponents/EventCard";
import SearchBar from "../CommonComponents/SearchBar";
import FilterButton from "../CommonComponents/FilterButton";
import FilterOptions from "../Constants/FilterOptions";
import HomeHeroShimmer from "../Shimmer/HomeHeroShimmer";

const Events = () => {
  const dispatch = useDispatch();

  const {
    fest,
    loading: festLoading,
    error: festError,
  } = useSelector((state) => state.fest);
  const { events, eventsLoading, eventsError } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(getFest());
    dispatch(getAllEvents());
  }, [dispatch]);

  console.log("events", events);
  // Error and Loading Feedback
  if (festLoading || eventsLoading) {
    return (
      <p className="text-center text-2xl font-bold text-purple-600">
        <HomeHeroShimmer />
      </p>
    );
  }

  if (festError || eventsError) {
    const errorMessage = festError || eventsError;
    return (
      <p className="text-center text-2xl font-bold text-red-600">
        Error: {errorMessage}
      </p>
    );
  }

  return (
    <div className="py-4">
      <div className="pt-4 bg-gradient-to-b from-white to-white via-purple-50">
        {fest && fest.logo && (
          <Header logoImage={fest.logo.imageUrl} festName={fest.festName} />
        )}

        <div className="px-24 pt-36 pb-4 mb-20 -mt-24 flex items-center justify-between bg-gradient-to-bl from-purple-50 to-purple-300 via-purple-100">
          <div className="w-2/3 mx-12">
            <h1 className="text-3xl font-bold text-neutral-900 drop-shadow-lg">
              Science and technology are the engines of economic growth and
              development
            </h1>
            <h1 className="text-lg font-bold text-neutral-700 text-right mt-4">
              - Dr. A.P.J. Abdul Kalam
            </h1>
          </div>
          <div className="w-1/3">
            <img
              src={apj}
              alt="Portrait of Dr. A.P.J. Abdul Kalam"
              className="h-[18rem] w-[26rem] object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="mx-36">
          <div>
            <SearchBar />
          </div>
          <div className="flex space-x-2 py-2">
            {FilterOptions.map((option) => (
              <FilterButton
                key={option.id}
                label={option.label}
                icon={option.icon}
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-2">
            {events.map((event) => (
              <EventCard event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

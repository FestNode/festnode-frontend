import React, { useEffect } from "react";
import Header from "../Layout/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { getFest, getFestStatus } from "../../Redux/fest/festSlice";
import heroHomeImg from "../../Images/heroHomeImg5.jpg";
import HomeHeroShimmer from "../Shimmer/HomeHeroShimmer";
import { getEventCategories } from "../../Redux/event/eventSlice";
import Capsule from "../CommonComponents/Capsule";
import PrimaryButton from "../CommonComponents/PrimaryButton";
import HeroHome from "../HeroSections/HeroHome";

const Home = () => {
  const dispatch = useDispatch();

  // Combine `useSelector` calls
  const {
    fest,
    loading: festLoading,
    error: festError,
    festStatus,
    eventCategories,
    eventCategoriesLoading,
    eventCategoriesError,
  } = useSelector((state) => ({
    ...state.fest,
    ...state.event,
  }));

  useEffect(() => {
    dispatch(getFest());
    dispatch(getEventCategories());
    dispatch(getFestStatus());
  }, [dispatch]);

  console.log(eventCategories);

  if (festLoading || eventCategoriesLoading) {return <HomeHeroShimmer />};
  if(!festStatus) {return <HeroHome />}
  else{

    return (
      <div className="pt-4 bg-gradient-to-b from-white to-white via-purple-200">
        {fest && fest.logo && (
          <Header logoImage={fest.logo.imageUrl} festName={fest.festName} />
        )}
  
        {/* Hero Image Section */}
        <div>
          <div
            className="flex justify-center drop-shadow-lg pt-8 px-24"
            role="img"
            aria-label="Hero Image"
          >
            <img
              src={heroHomeImg}
              alt="Hero"
              className="h-[30rem] w-[90rem] object-cover rounded-xl"
            />
          </div>
        </div>
  
        {/* Event Categories Section */}
        <div className="py-24">
          <div className="text-center space-y-8">
            <PrimaryButton content={"Explore"} />
            <h1 className="font-bold text-4xl py-4">
              Explore Events By Category
            </h1>
          </div>
          <div className="flex flex-wrap justify-evenly py-8">
            {eventCategories.map((item) => (
              <Capsule key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;

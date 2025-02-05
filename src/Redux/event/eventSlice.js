import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_ENDPOINTS = {
  eventCategories: "/public/getAllEventCategory",
  events: "/public/getAllEvents",
};

const eventSlice = createSlice({
  name: "eventData",
  initialState: {
    eventCategories: [],
    events: [],
    eventCategoriesLoading: false,
    eventsLoading: false,
    eventCategoriesError: null,
    eventsError: null,
  },
  reducers: {
    // Event categories reducers
    getEventCategoryRequest: (state) => {
      state.eventCategoriesLoading = true;
      state.eventCategoriesError = null;  // Reset previous errors
    },
    getEventCategorySuccess: (state, action) => {
      state.eventCategoriesLoading = false;
      state.eventCategories = action.payload;
    },
    getEventCategoryFail: (state, action) => {
      state.eventCategoriesLoading = false;
      state.eventCategoriesError = action.payload;
    },

    // Events reducers
    getEventsRequest: (state) => {
      state.eventsLoading = true;
      state.eventsError = null;  // Reset previous errors
    },
    getEventsSuccess: (state, action) => {
      state.eventsLoading = false;
      state.events = action.payload;
    },
    getEventsFail: (state, action) => {
      state.eventsLoading = false;
      state.eventsError = action.payload;
    },
  },
});

export const {
  getEventCategoryRequest,
  getEventCategorySuccess,
  getEventCategoryFail,
  getEventsRequest,
  getEventsSuccess,
  getEventsFail,
} = eventSlice.actions;

export default eventSlice.reducer;

// Thunks
export const getEventCategories = () => async (dispatch) => {
  try {
    dispatch(getEventCategoryRequest());
    const { data } = await axios.get(API_ENDPOINTS.eventCategories);
    dispatch(getEventCategorySuccess(data));
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data
      : error.message || "An unexpected error occurred";
    dispatch(getEventCategoryFail(`Error fetching event categories: ${errorMessage}`));
  }
};


export const getAllEvents = () => async (dispatch) => {
  try {
    dispatch(getEventsRequest());
    const { data } = await axios.get(API_ENDPOINTS.events);
    dispatch(getEventsSuccess(data));
  } catch (error) {
    // Check if the error is an array of objects
    let errorMessage = "An unexpected error occurred";

    if (error.response) {
      // If it's an array of objects, extract a meaningful message
      if (Array.isArray(error.response.data)) {
        errorMessage = error.response.data.map(item => item.message || JSON.stringify(item)).join(", ");
      } else {
        errorMessage = error.response.data.message || error.response.data.error || "Unknown error occurred";
      }
    } else if (error.message) {
      errorMessage = error.message;
    }

    dispatch(getEventsFail(`Error fetching events: ${errorMessage}`));
  }
};

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const festSlice = createSlice({
  name: "fest",
  initialState: {
    fest: [],
    loading: false,
    error: null,
  },
  reducers: {
    getFestRequest: (state) => {
      state.loading = true;
    },
    getFestSuccess: (state, action) => {
      state.loading = false;
      state.fest = action.payload; // Update state with fetched data
    },
    getFestFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getFestRequest, getFestSuccess, getFestFail } = festSlice.actions;

export default festSlice.reducer;

export function getFest() {
  return async function getFestThunk(dispatch) {
    try {
      dispatch(getFestRequest());

      const link = `/public/getFestDetails`;

      const { data } = await axios.get(link);
      console.log(data);
      dispatch(getFestSuccess(data));
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      dispatch(getFestFail(errorMessage));
    }
  };
}

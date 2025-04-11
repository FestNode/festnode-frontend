import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const festSlice = createSlice({
  name: "fest",
  initialState: {
    fest: [],
    festStatus: false,
    loading: false,
    error: null,
    festStatusLoading: false,
    festStatusError: null,
  },
  reducers: {
    getFestRequest: (state) => {
      state.loading = true;
      state.fest = null;
    },
    getFestSuccess: (state, action) => {
      state.loading = false;
      state.fest = action.payload; // Update state with fetched data
    },
    getFestFail: (state, action) => {
      state.loading = false;
      state.fest = null;
      state.error = action.payload;
    },

    getFestStatusRequest: (state) => {
      state.festStatusLoading = true;
    },
    getFestStatusSuccess: (state, action) => {
      state.festStatusLoading = false;
      state.festStatus = action.payload;
    },
    getFestStatusFail: (state, action) => {
      state.festStatusLoading = false;
      state.festStatusError = action.payload;
    },
  },
});

export const { getFestRequest, getFestSuccess, getFestFail, getFestStatusRequest, getFestStatusSuccess, getFestStatusFail } = festSlice.actions;

export default festSlice.reducer;

// Corrected Thunks:
export function getFest() {
  return async function getFestThunk(dispatch) {
    try {
      dispatch(getFestRequest());

      const link = `/public/getFestDetails`;

      const { data } = await axios.get(link);
      console.log(data);
      dispatch(getFestSuccess(data));
    } catch (error) {
      // const errorMessage = error.response ? error.response.data : error.message;
      dispatch(getFestFail(error.errorCode));
    }
  };
}

export function getFestStatus() {
  return async function getFestStatusThunk(dispatch) {
    try {
      dispatch(getFestStatusRequest());

      const link = `/public/festStatus`;

      const { data } = await axios.get(link);
      console.log(data);
      dispatch(getFestStatusSuccess(data));
    } catch (error) {
      const errorMessage = error.response ? error.response.data : error.message;
      dispatch(getFestStatusFail(errorMessage));
    }
  };
}

export const addNewFest = createAsyncThunk(
  'fest/addNewFest',
  async ({ festName, desc, logo, token }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('festName', festName);
      formData.append('desc', desc);
      formData.append('multipartFile', logo); // Append the file

      const response = await axios.post('/secure/addFest', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set content type for file upload
          Authorization: `Bearer ${token}`, // Include the token for authorization
        },
      });
      return response.data; // Return the created fest
    } catch (error) {
      // Use rejectWithValue to return the error message
      return rejectWithValue(error.response?.data?.errorMessage || 'An error occurred');
    }
  }
);

export const controlFest = createAsyncThunk(
  'fest/controlFest',
  async ({token}, { rejectWithValue }) => {
      try {
          const response = await axios.post('/secure/controlFest', {}, {
              headers: {
                  Authorization: `Bearer ${token}`, // Use your token from Redux or localStorage
              },
          });
          return response.data; // Return the response data (Control object)
      } catch (error) {
          return rejectWithValue(error.response?.data?.message || 'An error occurred');
      }
  }
);


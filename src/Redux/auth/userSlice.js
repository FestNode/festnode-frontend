import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action) => {
      state.loading = false;
      state.userData = action.payload; // Store user data
    },
    fetchUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserRequest, fetchUserSuccess, fetchUserFail } = userSlice.actions;

export default userSlice.reducer;

// Async Thunk Function to Fetch User Data
export function fetchUser() {
  return async function fetchUserThunk(dispatch) {
    try {
      dispatch(fetchUserRequest());

      const token = Cookies.get("token");
      if (!token) {
        throw new Error("No authentication token found");
      }

      const { data } = await axios.get("/secure/fetchUser", {
        headers: { Authorization: `Bearer ${token}` },
      });

      dispatch(fetchUserSuccess(data));
    } catch (error) {
      const errorMessage = error.response ? error.response.data : "Failed to fetch user data";
      dispatch(fetchUserFail(errorMessage));
    }
  };
}

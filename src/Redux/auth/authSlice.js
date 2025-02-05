import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    token: Cookies.get("token") || null,
    loading: false,
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.isAuthenticated = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.jwtToken; // Assuming your API response has jwtToken
      state.isAuthenticated = true;
      state.user = action.payload.user; // Assuming your API response has user object
    },
    loginFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginRequest, loginSuccess, loginFail, logout } = authSlice.actions;

export default authSlice.reducer;

// Async Thunk Function for Login
export function loginUser(credentials) {
  return async function loginThunk(dispatch) {
    try {
      dispatch(loginRequest());

      const { data } = await axios.post("/userlogin", credentials, {
        headers: { "Content-Type": "application/json" },
      });

      dispatch(loginSuccess(data)); // Assuming data structure matches AuthResponseDto
      Cookies.set("token", data.token); // Save token in cookies

    } catch (error) {
      const errorMessage = error.response ? error.response.data : "Login failed";
      dispatch(loginFail(errorMessage));
    }
  };
}

// Logout Function
export function logoutUser() {
  return function logoutThunk(dispatch) {
    Cookies.remove("token");
    dispatch(logout());
  };
}

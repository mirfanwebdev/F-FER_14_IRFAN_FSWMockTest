import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, actions) => {
      state.isAuth = actions.payload.isAuth;
      state.username = actions.payload.username;
      localStorage.setItem("isAuth", state.isAuth);
      localStorage.setItem("username", state.username);
    },
    logout: (state) => {
      state.isAuth = false;
      localStorage.removeItem("isAuth");
      localStorage.removeItem("username");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

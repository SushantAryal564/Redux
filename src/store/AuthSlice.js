import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "Authentication",
  initialState: { isAuthenticated: false },
  reducers: {
    isLogedIn(state) {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});
export default AuthSlice;
export const authAction = AuthSlice.actions;

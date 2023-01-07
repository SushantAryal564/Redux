import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "Authentication",
  initialState: { isLoged_in: false },
  reducers: {
    isLogedIn(state) {
      state.isLoged_in = true;
    },
    isLoggedOut(state) {
      state.isLoged_in = false;
    },
  },
});
export default AuthSlice;
export const authAction = AuthSlice.actions;

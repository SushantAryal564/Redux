import counterSlice from "./counterSlice";
import AuthSlice from "./AuthSlice";
import { configureStore } from "@reduxjs/toolkit";
// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
});
export default store;

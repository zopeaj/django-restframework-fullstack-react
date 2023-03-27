import { configureStore } from "@reduxjs/toolkit";
import { customerReducer } from "";
import { messageReducer } from "";
import { profileReducer } from "";


export const store = configureStore({
  reducer: {
    customer: customerReducer,
    message: messageReducer,
    profiles: profileReducer
  }
});


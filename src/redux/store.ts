import { configureStore } from "@reduxjs/toolkit";
import flashcardsReducer from "./features/flashcardsSlice";

export const store = configureStore({
  reducer: {
    flashcards: flashcardsReducer,
  },
});

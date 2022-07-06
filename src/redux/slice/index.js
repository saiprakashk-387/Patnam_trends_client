import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: "sample",
  initialState: {
    sample: {},
    isLoading: false,
    error: false,
    ///state//
  },
  ///reducer
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    hasError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    sampleAction: (state, { payload }) => {
      state.sample = payload;
      state.isLoading = false;
    },

    ///action
  },
});

export const { sampleAction,hasError,startLoading } = sampleSlice.actions;

export const sampleSelector = (state) => state.sample;
///assign state to selector

//export reducer
const sampleReducer = sampleSlice.reducer;
export default sampleReducer;

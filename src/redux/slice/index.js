import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    sample: {},
    ///state//
  },
  ///reducer
  reducers: {
    sampleAction: (state, { payload }) => {
      state.sample = payload;
    },
    ///action
  
  },
});

export const {
  sampleAction ,fillTextAction ,userAction
} = sampleSlice.actions;

export const sampleSelector = (state) => state.sample;
///assign state to selector

//export reducer
const sampleReducer = sampleSlice.reducer;
export default sampleReducer;
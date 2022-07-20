import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: "sample",
  initialState: {
    sample: {},
    addProduct: {},
    product: {},
    users:{},
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
    productAction: (state, { payload }) => {
      state.product = payload;
      state.isLoading = false;
    },
    addProductAction: (state, { payload }) => {
      state.addProduct = payload;
      state.isLoading = false;
    },
    usersAction: (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
    },
    ///action
  },
});

export const {
  sampleAction,
  hasError,
  startLoading,
  productAction,
  addProductAction,
 usersAction,
} = sampleSlice.actions;

export const sampleSelector = (state) => state.sample;
export const productSelector = (state) => state.sample;
export const addproductSelector = (state) => state.sample;
export const userSelector = (state) => state.sample;
///assign state to selector

//export reducer
const sampleReducer = sampleSlice.reducer;
export default sampleReducer;

import { createSlice } from "@reduxjs/toolkit";

const sampleSlice = createSlice({
  name: "sample",
  initialState: {
    sample: {},
    addProduct: {},
    product: {},
    users:{},
    cart:{},
    cartList:{},
    updateCart:{},
    isLoading: false,
    error: false,
    loading:false,
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
    cartAction: (state, { payload }) => {
      state.cart = payload;
      state.isLoading = false;
    },
    cartListAction: (state, { payload }) => {
      state.cartList = payload;
      state.loading = false;
    },
    updateCartAction: (state, { payload }) => {
      state.updateCart = payload;
      state.loading = false;
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
 cartAction,
 cartListAction,
 updateCartAction,
} = sampleSlice.actions;

export const sampleSelector = (state) => state.sample;
export const productSelector = (state) => state.sample;
export const addproductSelector = (state) => state.sample;
export const userSelector = (state) => state.sample;
export const cartSelector = (state) => state.sample;
export const cartListSelector = (state) => state.sample;
export const updateCartSelector = (state) => state.sample;
///assign state to selector


//export reducer
const sampleReducer = sampleSlice.reducer;
export default sampleReducer;

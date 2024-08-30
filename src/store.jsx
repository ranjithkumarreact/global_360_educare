import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/categorySlice";
import productReducer from "./features/productSlice";
import newArrivals from "./features/newArrivals";

const store = configureStore({
  reducer: {
    category: categoryReducer,
    product: productReducer,
    newarrival: newArrivals,

  },
});

export default store;

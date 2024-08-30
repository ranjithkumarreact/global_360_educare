import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiurl } from "../Constants";

const initialState = {
  topCategory: [],
  categoryProducts: [],
  categoryid: null,
  status: "idle",
  error: null,
};

// Thunks for async logic
export const fetchTopCategory = createAsyncThunk(
  "category/fetchTopCategory",
  async () => {
    const response = await axios.post(apiurl + "topcategories");
    return response.data.records;
  }
);

export const fetchCategoryProducts = createAsyncThunk(
  "category/fetchCategoryProducts",
  async (categoryid) => {
    const response = await axios.post(
      apiurl + "product_list",

      { category_id: categoryid, limit: 8 }
    );
    return response.data.records;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryid = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTopCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.topCategory = action.payload;
        if (action.payload.length > 0) {
          state.categoryid = action.payload[0].pro_category_id; // Set the first category as the initial `categoryid`
        }
      })
      .addCase(fetchTopCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCategoryProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoryProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.categoryProducts = action.payload;
      })
      .addCase(fetchCategoryProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setCategoryId } = categorySlice.actions;

export default categorySlice.reducer;

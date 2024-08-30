import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiurl } from "../Constants";
import axios from "axios";
const initialState = {
  newarrival: [],
  error: null,
  status: "idle",
};

export const Fetchnewarrivals = createAsyncThunk(
  "newarrivals/fetchnewarrivals",
  async () => {
    const response = await axios.post(apiurl + "newarrival");
    return response.data.records;
  }
);

const newArrivalsslice = createSlice({
  name: "newarrival",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(Fetchnewarrivals.pending, (state) => {
        state.status = "loading";
      })
      .addCase(Fetchnewarrivals.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.newarrival = action.payload;
      })
      .addCase(Fetchnewarrivals.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default newArrivalsslice.reducer;

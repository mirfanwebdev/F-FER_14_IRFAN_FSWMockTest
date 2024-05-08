import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTodoList = createAsyncThunk(
  "fetch/fetchTodoList",
  async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1/todos"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  isLoading: false,
  data: [],
};

export const fetchSlice = createSlice({
  name: "fetch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodoList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTodoList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchTodoList.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default fetchSlice.reducer;

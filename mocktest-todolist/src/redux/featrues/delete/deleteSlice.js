import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const deleteTodo = createAsyncThunk("delete/deleteTodo", async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return console.log(error);
  }
});
const initialState = {
  isLoading: false,
  message: "",
};

export const deleteSlice = createSlice({
  name: "delete",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTodo.fulfilled, (state) => {
        state.isLoading = false;
        state.message = "delete success";
      })
      .addCase(deleteTodo.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default deleteSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const addTodoList = createAsyncThunk(
  "add/addTodoList",
  async (payload) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          body: JSON.stringify({
            title: payload.title,
            completed: false,
            usersId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
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
  message: "",
};

export const addSlice = createSlice({
  name: "add",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addTodoList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTodoList.fulfilled, (state) => {
        state.isLoading = false;
        state.message = "success add todo list";
      })
      .addCase(addTodoList.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default addSlice.reducer;

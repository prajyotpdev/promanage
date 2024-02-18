import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
  const response = await fetch("http://localhost:8000/api/v1/task/all");
  return response.json();
});

const taskPostSlice = createSlice({
  name: "taskPost",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
  },
});

   export default taskPostSlice.reducer;
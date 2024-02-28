import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode';

export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
  const userid= jwtDecode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWQ1ZDVmYWZkNTVlN2NhZGU0YzNmYjMiLCJpYXQiOjE3MDkxMTUyMDd9.8SCQMPZHUxUazn2powBB4C1lTkUJMdCn8Ddfmz6Ahrg").userId;
  console.log("userid : "  + userid);
  const response = await fetch("http://localhost:8000/api/v1/task/all?userid=${userid}");
  return response.json();
});

const taskListSlice = createSlice({
  name: "task",
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

   export default taskListSlice.reducer;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { jwtDecode } from 'jwt-decode';
import { useSelector } from 'react-redux';

export const createTask = createAsyncThunk("createTask", async (taskData) => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  console.log(baseUrl);
  const jwttoken = JSON.parse(localStorage.getItem("user")).token;
    const response = await fetch(`${baseUrl}/api/v1/task/create`,{
      method: 'POST',
      headers : {
        Authorization: jwttoken,      
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(taskData),
    });
    return response.json();
  });

export const fetchTasks = createAsyncThunk("fetchTasks", async () => {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const jwttoken = JSON.parse(localStorage.getItem("user")).token;
  const response = await fetch(`${baseUrl}/api/v1/task/all`,{
    headers : {
      Authorization: jwttoken,      
      'Content-Type': 'application/json',
    },
  });
  return response.json();
});


  export const fetchTaskByStatus = createAsyncThunk("fetchTaskByStatus", async (status) => {
    
  const jwttoken = JSON.parse(localStorage.getItem("user")).token;
    const response = await fetch("http://localhost:8000/api/v1/task/all?status=${status}",{
      headers : {
        Authorization: jwttoken,      
        'Content-Type': 'application/json',
      },
    });
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
      console.log("this is action.payload " + action.payload)
      // state.doneTasks = action.payload.filter(task => task.taskStatus === 'Done');
      // state.todoTasks = action.payload.filter(task => task.taskStatus === 'To-do');
      // state.backlogTasks = action.payload.filter(task => task.taskStatus === 'Backlog');
      // state.inProgressTasks = action.payload.filter(task => task.taskStatus === 'In-Progress');
    });
    builder.addCase(fetchTasks.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isError = true;
    });
    builder.addCase(createTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(createTask.rejected, (state, action) => {
      console.error('Error creating task:', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchTaskByStatus.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTaskByStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTaskByStatus.rejected, (state, action) => {
      console.error('Error fetchTaskByStatus:', action.error.message);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

   export default taskListSlice.reducer;
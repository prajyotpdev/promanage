import { createSlice } from '@reduxjs/toolkit';

const todoTasksSlice = createSlice({
  name: 'todoTasks',
  initialState: [],
  reducers: {
    addTodoTask: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addTodoTask } = todoTasksSlice.actions;
export default todoTasksSlice.reducer;
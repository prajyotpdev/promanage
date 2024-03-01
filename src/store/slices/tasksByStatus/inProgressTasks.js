import { createSlice } from '@reduxjs/toolkit';

const inProgressTasksSlice = createSlice({
  name: 'inProgressTasks',
  initialState: [],
  reducers: {
    addinProgressTask: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addinProgressTask } = inProgressTasksSlice.actions;
export default inProgressTasksSlice.reducer;
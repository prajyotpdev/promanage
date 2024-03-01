import { createSlice } from '@reduxjs/toolkit';

const doneTasksSlice = createSlice({
  name: 'doneTasks',
  initialState: [],
  reducers: {
    addDoneTask: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addDoneTask } = doneTasksSlice.actions;
export default doneTasksSlice.reducer;
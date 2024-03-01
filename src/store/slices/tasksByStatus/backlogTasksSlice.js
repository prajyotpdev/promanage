import { createSlice } from '@reduxjs/toolkit';


const backlogTasksSlice = createSlice({
    name: 'backlogTasks',
    initialState: [],
    reducers: {
      addBacklogTask: (state, action) => {
        return [...state, action.payload];
      },
      // other reducer functions for backlog tasks
    },
  });

export const { addBacklogTask } = backlogTasksSlice.actions;
export default backlogTasksSlice.reducer;
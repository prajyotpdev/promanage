import { combineReducers, configureStore } from '@reduxjs/toolkit'
import taskReducer from "./slices/taskSlice";
import userReducer  from '../store/slices/authSlice';
import backlogTasksReducer  from '../store/slices/tasksByStatus/backlogTasksSlice';
import doneTasksReducer  from '../store/slices/tasksByStatus/doneTasksSlice';
import todoTasksReducer  from '../store/slices/tasksByStatus/todoTasksSlice';
import inProgressTasksReducer  from '../store/slices/tasksByStatus/inProgressTasks';

export const store = configureStore({
  reducer: {
    task : taskReducer,
    user: userReducer,
    doneTasks: doneTasksReducer,
    inProgressTasks: inProgressTasksReducer,
    todoTasks: todoTasksReducer,
    backlogTasks: backlogTasksReducer,
  },
})
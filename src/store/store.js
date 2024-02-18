import { configureStore } from '@reduxjs/toolkit'
import taskReducer from "./slices/taskSlice";
import userReducer  from '../store/slices/authSlice';

export const store = configureStore({
  reducer: {
    task : taskReducer,
    user: userReducer
  },
})
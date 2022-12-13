import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customer/customerSlice'
import projectReducer from '../features/project/projectSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    projects: projectReducer
  },
})
import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import customerReducer from '../features/customer/customerSlice'
import constructionProjectReducer from '../features/constructionProject/constructionProjectSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    constructionProject: constructionProjectReducer
  },
})
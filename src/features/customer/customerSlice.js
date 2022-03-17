import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import {} from './customerService'

import axios from 'axios'

const API_URL = '/api/customers/'

const initialState = {
    customers: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        reset: (state) => initialState,
    }
})

export const {reset} = customerSlice.actions
export default customerSlice.reducer
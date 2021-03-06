import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import customerService from './customerService'

const API_URL = '/api/customers/'

//getall customers
export const getallCustomers = createAsyncThunk('customer/getAll', 
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await customerService.getCustomers(token)
          } catch (error) {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            return thunkAPI.rejectWithValue(message)
          }
    }
)

//create customer
export const createCustomer = createAsyncThunk('customer/create', 
    async (customerdata, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await customerService.createCustomer(customerdata, token)
          } catch (error) {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString()
            return thunkAPI.rejectWithValue(message)
          }
    }
)

//update customer
//delete customer

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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getallCustomers.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getallCustomers.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.customers = action.payload
            })
            .addCase(getallCustomers.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(createCustomer.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createCustomer.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message= action.payload
            })
            .addCase(createCustomer.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = customerSlice.actions
export default customerSlice.reducer
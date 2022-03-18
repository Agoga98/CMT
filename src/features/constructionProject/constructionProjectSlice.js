import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import constructionProjectService from './constructionProjectService'

//getall constrution projects
export const getAllConstructionProjects = createAsyncThunk('constructionProject/getAll', 
    async (customerID, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await constructionProjectService.getConstructionProjects(customerID, token)
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

//create constrution projects
//update constrution projects
//delete constrution projects

const initialState = {
    constructionProjects: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const constructionProjectSlice = createSlice({
    name: 'constructionProject',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllConstructionProjects.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAllConstructionProjects.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.customers = action.payload
            })
            .addCase(getAllConstructionProjects.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = constructionProjectSlice.actions
export default constructionProjectSlice.reducer
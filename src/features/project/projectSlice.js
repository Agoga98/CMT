import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import projectService from './projectService'

//getall constrution projects
export const getAllProjects = createAsyncThunk('project/getProjects', 
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await projectService.getProjects(token)
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

//get project by CustomerID
export const getProjectsbyCustomerID = createAsyncThunk('project/getProjectsByCustomerID', 
    async (customerID, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await projectService.getProjectsByCustomerID(customerID, token)
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
export const createProject = createAsyncThunk('project/createProject', 
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await projectService.createProject(token)
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

//update projects
//delete projects

const initialState = {
    projects: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const ProjectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProjects.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProjects.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.customers = action.payload
            })
            .addCase(getProjects.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getProjectsbyCustomerID.pending, (state) => {
              state.isLoading = true
            })
            .addCase(getProjectsbyCustomerID.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.customers = action.payload
            })
            .addCase(getProjectsbyCustomerID.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(createProject.pending, (state) => {
              state.isLoading = true
            })
            .addCase(createProject.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.customers = action.payload
            })
            .addCase(createProject.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const {reset} = ProjectSlice.actions
export default ProjectSlice.reducer
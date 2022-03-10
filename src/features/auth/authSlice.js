import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

//GEt User from LocalStorage
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null ,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Register user
export const register = createAsyncThunk('auth/register', 
    async (user, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error) {
            const message = (error.respone && error.response.data && error.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

//Register user
export const login = createAsyncThunk('auth/login', 
    async (user, thunkAPI) => {
        try {
            return await authService.login(user)
        } catch (error) {
            const message = (error.respone && error.response.data && error.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const logout = createAsyncThunk('auth/logout', 
    async () => {
        await authService.logout()
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, actions) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = actions.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isSuccess = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer
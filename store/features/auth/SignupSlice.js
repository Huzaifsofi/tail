import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASEURL = 'http://192.168.0.106:4000/api'

const initialState = {
    isLoggedIn: false,

    status: 'idel',
    error: null,
    message: '',

    register_status: 'idel',
    register_error: null,

    check_user_status: 'idel',
    check_user_error: null,

    login_status: 'idel',
    login_error: null,
}

export const checkusername = createAsyncThunk(
    'register/checkusername',
    async (username, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASEURL}/auth/check-username`, {username});
            //console.log(response.data['message'])
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
)

export const registerUser = createAsyncThunk(
    'register/registerUser',
    async (userdata, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASEURL}/auth/register`, userdata);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
)



export const checkUser = createAsyncThunk(
    'login/checkuser',
    async (_, { rejectWithValue }) => {
        try {
            const token = await AsyncStorage.getItem('auth-code')

            const response = await axios.get(`${BASEURL}/auth/getuser`, {
                headers: {
                    "x-access-token" : token
                }
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
)



export const LoginUser = createAsyncThunk(
    'login/login',
    async (userdata, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASEURL}/auth/login`, userdata);
            console.log(response.data)
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
)







const SignupSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(checkusername.pending, (state) => {
                state.status = 'loding'
            })
            .addCase(checkusername.fulfilled, (state, action) => {
                state.status = 'sucess';
                state.message = action.payload['message'];

            })
            .addCase(checkusername.rejected, (state, action) => {
                state.status = 'faild';
                state.error = action.payload;
            })


            .addCase(registerUser.pending, (state) => {
                state.register_status = 'loding'
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.register_status = 'sucess';
                AsyncStorage.setItem('auth-code', action.payload.token)

            })
            .addCase(registerUser.rejected, (state, action) => {
                state.register_status = 'faild';
                state.register_error = action.payload;
            })



            .addCase(checkUser.pending, (state) => {
                state.check_user_status = 'loding'
            })
            .addCase(checkUser.fulfilled, (state, action) => {
                state.check_user_status = 'sucess';
                state.isLoggedIn = true;
            })
            .addCase(checkUser.rejected, (state, action) => {
                state.check_user_status = 'faild';
                state.isLoggedIn = false;
                state.check_user_error = action.payload;
            })

            .addCase(LoginUser.pending, (state) => {
                state.login_status = 'loding'
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.login_status = 'sucess';
                state.isLoggedIn = true;
                AsyncStorage.setItem('auth-code', action.payload.token)
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.login_status = 'faild';
                state.isLoggedIn = false;
                state.login_error = action.payload;
            })
    }
})

export default SignupSlice.reducer;



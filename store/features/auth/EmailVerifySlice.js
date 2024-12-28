import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASEURL = 'http://192.168.0.106:4000/api'

const initialState = {
    email: '',
    status: 'idel',
    error: null,
    showotp: false,
    otp_status: 'idel',
    otp_error: null,
}

export const verifyEmail = createAsyncThunk(
    'verifyemail/verify',
    async (email, { rejectWithValue }) => {
        try {
            const response = await axios.post(`${BASEURL}/auth/email-verify`, {email});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
)

export const verifyOtp = createAsyncThunk(
    'verifyemail/verifyotp',
    async (otp, { rejectWithValue, getState, dispatch } ) => {
        try {

            const email = getState().emailverif.email;
      
            if (!email) {
                throw new Error("Email is not available in the state");
            }

            

            const userdata = {
                email,
                otp: otp
            };

            const response = await axios.post(`${BASEURL}/auth/otp-verify`, userdata);
            
            console.log(response.data.message)
            AsyncStorage.setItem('auth-shot', response.data.message)

            return response.data;
        } catch (error) { 
            console.log(error.response.data)
            return rejectWithValue(error.response?.data || 'Something went wrong');
        }
    }
)




const verifyemailSlicer = createSlice({
    name: 'login',
    initialState,
    reducers: {
        addEmail: (state, action) => {
            state.email = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(verifyEmail.pending, (state) => {
                state.status = 'loding'
            })
            .addCase(verifyEmail.fulfilled, (state, action) => {
                state.status = 'sucess';
                state.showotp = true;
                console.log(action.payload.users['email'])
                state.email = action.payload.users['email'];
            })
            .addCase(verifyEmail.rejected, (state, action) => {
                state.status = 'faild';
                state.error = action.payload;
            })


            .addCase(verifyOtp.pending, (state) => {
                state.otp_status = 'loding'
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.otp_status = 'sucess';
                //state.showotp = false;
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.otp_status = 'faild';
                state.otp_error = action.payload;
            })
    }
})

export const { addEmail } = verifyemailSlicer.actions;
export default verifyemailSlicer.reducer;


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BASEURL = 'http://192.168.0.106:4000/api'

const initialState = {
    question: [],
    CreateQuestion_status: 'idel',
    CreateQuestion_error: null,

    fetchQuestion_status: 'idel',
    fetchQuestion_error: null,
}

//const token = localStorage.getItem('auth-code')

export const CreateQuestion = createAsyncThunk(
    'question/CreateQuestion',
    async (questionData, {rejectWithValue}) => {
        try {
            console.log("question data")
            console.log(questionData)
            const token = await AsyncStorage.getItem('auth-code')
            const response = await axios.post(`${BASEURL}/question/create/question`, questionData, {
                headers: {
                    "x-access-token" : token
                }
            });
            console.log(response)
            console.log("response")
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong')
        }
    }    
)

export const fetchQuestion = createAsyncThunk(
    'question/fetchQuestion',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(`${BASEURL}/question/get/question`)

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Something went wrong')
        }
    }
)


const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        resetField: (state, action) => {
            const field = action.payload;
            state[field] = initialState[field]
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(CreateQuestion.pending, (state) => {
                state.CreateQuestion_status = 'loading'
            })
            .addCase(CreateQuestion.fulfilled, (state, action) => {
                state.CreateQuestion_status = 'sucess'
                //state.question.push(action.payload.question);
            })
            .addCase(CreateQuestion.rejected, (state, action) => {
                state.CreateQuestion_status = 'failed'
                state.CreateQuestion_error = action.payload.message;
            })



            .addCase(fetchQuestion.pending, (state) => {
                state.fetchQuestion_status = 'loading'
            })
            .addCase(fetchQuestion.fulfilled, (state, action) => {
                state.fetchQuestion_status = 'sucess'
                state.question = action.payload.result

            })
            .addCase(fetchQuestion.rejected, (state, action) => {
                state.fetchQuestion_status = 'failed'
                state.fetchQuestion_error = action.payload.message;
            })
    }
})


export const { resetField } = questionSlice.actions
export default questionSlice.reducer
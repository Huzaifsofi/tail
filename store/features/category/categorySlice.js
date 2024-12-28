import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    category: [],
    
    fetchCategory_loading: false,
    fetchCategory_error: null,

}


const baseUrl = 'http://192.168.0.106:4000'


export const fetchCategory = createAsyncThunk('category/fetchCategory', async(_, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseUrl}/api/category/get/category`)
        return response.data.categrerys;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
})


const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.fetchCategory_loading = true;
            })
            .addCase(fetchCategory.fulfilled, (state, action) => {
                state.fetchCategory_loading = false;
                state.category = action.payload;
            })
            .addCase(fetchCategory.rejected, (state, action) => {
                state.fetchCategory_loading = false;
                state.fetchCategory_error = action.payload;
            })
    }
})

export default categorySlice.reducer;
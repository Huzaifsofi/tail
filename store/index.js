import { configureStore } from "@reduxjs/toolkit";
import EmailVerifyReducer from './features/auth/EmailVerifySlice'
import loginReducer from './features/auth/SignupSlice'
import QuestionReducer from './features/questions/questionSlice'
import CategreReducer from './features/category/categorySlice'

export const store = configureStore({
    reducer: {
        emailverif: EmailVerifyReducer,
        login: loginReducer,
        question: QuestionReducer,
        category: CategreReducer
    }
})
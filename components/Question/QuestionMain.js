import { View, Text, ScrollView, FlatList } from "react-native";
import QuestionCard from "./QuestionCard";
import { useEffect } from "react";
import { fetchQuestion } from "../../store/features/questions/questionSlice";
import { useDispatch, useSelector } from "react-redux";

export default function QuestionMain() {
    const dispatch = useDispatch();

    const questions = useSelector((state) => state.question.question)



    useEffect(() => {
        dispatch(fetchQuestion())
    }, [dispatch])

    return (
       <FlatList 
       data={questions}
       renderItem={QuestionCard}
       keyExtractor={(item) => item._id}
        />
    )
}
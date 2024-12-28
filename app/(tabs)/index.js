import { View, StyleSheet } from "react-native";
import Header from "../../components/Header";
import QuestionMain from "../../components/Question/QuestionMain";
import Categories from "../../components/Question/Categories";

export default function Home() {

    return (
        <View style={styles.container}>
            <Header />
            <Categories />
            <QuestionMain />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818',
        paddingTop: 30
    }
})
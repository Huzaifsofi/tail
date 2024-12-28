import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../../components/search/SearchBar";
import SeTopicBar from "../../components/search/SeTopicBar";


export default function Search() {
    return (
        <View style={styles.container}>
            <SearchBar />
            <SeTopicBar />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818',
        paddingTop: 40
    },
    txt: {
        color: 'white'
    }
})
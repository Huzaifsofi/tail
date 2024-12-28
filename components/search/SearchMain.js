import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./SearchBar";


export default function SearchMain() {
    return(
        <View>
            <SearchBar />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
import { View, Text, StyleSheet } from "react-native";
import JobHead from "../../components/Jobs/JobHead";
import JobDown from "../../components/Jobs/JobDown";

export default function Jobs() {
    return (
        <View style={styles.container}>
            <JobHead />
            <JobDown />
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
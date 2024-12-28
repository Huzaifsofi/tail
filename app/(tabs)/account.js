import { View, Text, StyleSheet } from "react-native";
import AccountHead from "../../components/Account/AccountHead";
import AccountMid from "../../components/Account/AccountMid";
import AccountDown from "../../components/Account/AccountDown";

export default function Account() {
    return (
        <View style={styles.container}>
            <AccountHead />
            <AccountMid />
            <AccountDown />
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


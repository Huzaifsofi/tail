import { View, Text, StyleSheet } from "react-native";
import FAIcon from 'react-native-vector-icons/FontAwesome'

export default function JobHead() {
    return (
        <View className="flex flex-row items-center justify-between px-4 pt-7 pb-5">
            <View className="flex flex-row items-center gap-1 bg-sky-500 px-3 py-1">
                <FAIcon name="filter" color="#EADEDE" size={18} />
                <Text className="text-txtcol">Filter</Text>
            </View>
            <View>
                <FAIcon name="search" color="#EADEDE" size={24} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
})
import { Stack } from "expo-router";
import { TouchableOpacity, Text } from "react-native";


export default function othersLayout() {
    
    return (
        <Stack screenOptions={{ 
            headerShown: false,
            headerStyle: {
                backgroundColor: '#212121'
            }
        }}>
            <Stack.Screen name="index"/>

        </Stack>
    ) 
}
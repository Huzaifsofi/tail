import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store }  from "../store/index";
import '../global.css'
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
    return (
        <Provider store={store}>
            <Stack screenOptions={{
            }}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(others)" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="light" backgroundColor="#212121" />
        </Provider>
    )
}
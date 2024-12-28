import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, router } from "expo-router";
import { useEffect } from "react";
import { View, Text } from "react-native";


export default function Home() {

    useEffect(() => {
        const checkLoggedIn = async () => {
          try {
            const check = await AsyncStorage.getItem('its_ALL');
            console.log(check)

            // If the value is 'true', redirect to the tabs
            if (check === 'true') {
              router.replace('/(tabs)');
            } else {
              router.replace('/(auth)')
            }
          } catch (error) {
            console.error('Error retrieving login status:', error);
          }
        };
        console.log("ok")
        checkLoggedIn();
    }, [router]);


    return (
      <View>
        <Text>Weclcome to samecode</Text>
      </View>
    )
   
}
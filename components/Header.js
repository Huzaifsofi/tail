import { View, Text, Pressable } from "react-native"
import { useEffect } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link, router } from "expo-router";


export default function Header() {

    const askpress = () => {
      router.push('/(others)')
    }

    const [loaded, error] = useFonts({
        'Itim-Regular': require('../assets/fonts/Itim-Regular.otf'),
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }

    return (
        <View className=" h-[57px] bg-main flex flex-row items-center justify-between px-[16px]">
            <Text className=" text-txtcol text-[20px] " style={{fontFamily: 'Itim-Regular'}}>samecodes</Text>
            <View className="flex flex-row items-center">
                <View>
                  <Pressable className="pr-[23px] flex flex-row items-center" onPress={askpress}>
                    <Icon name="create-outline" color="#EADEDE" size={24}  />
                    <Text className="text-icon font-semibold">Ask</Text>
                  </Pressable>
                </View>
                <View className="pr-[23px]">
                    <Icon name="notifications-outline" color="#EADEDE" size={24}  />
                </View>
                <View>
                    <Icon name="chatbox-ellipses-outline" color="#EADEDE" size={24}  />
                </View>
            </View>
        </View>
    )
}
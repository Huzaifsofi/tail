import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import FaIcon from 'react-native-vector-icons/FontAwesome'


export default function SeTopicBar() {

    const [loaded, error] = useFonts({
        'Itim-Regular': require('../../assets/fonts/Itim-Regular.otf'),
    });

    useEffect(() => {
    if (loaded || error) {
        SplashScreen.hideAsync();
    }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }


    return(
        <View style={styles.container}>
            <View style={styles.topics}>
                <View style={styles.topicBox}>
                    <Text className=" text-base text-gray-200 px-3" style={{fontFamily: 'Itim-Regular'}}>Users</Text>
                </View>
                <View style={styles.topicBox}>
                    <Text className="text-base text-gray-200 px-3" style={{fontFamily: 'Itim-Regular'}}>Jobs</Text>
                </View>
                <View style={styles.topicBox}>
                    <Text className=" text-base text-gray-200 px-3" style={{fontFamily: 'Itim-Regular'}}>questions</Text>
                </View>
            </View>
            <View>
                <View className="flex flex-row items-center gap-1 bg-sky-500 px-3 py-1 rounded-md">
                    <FaIcon name="filter" color="#EADEDE" size={16} />
                    <Text className="text-white text-base">Filter</Text>
                </View> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: 16 
    },
    topics: {
        display: 'flex',
        flexDirection: 'row'
    },
    topicBox: {
        backgroundColor: '#3D3D3D',
        marginHorizontal: 7,
        borderRadius: 5
    }
})
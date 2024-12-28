import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link, router } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { verifyEmail } from "../../store/features/auth/EmailVerifySlice";



export default function emailVerify() {
    const [text, setText] = useState('')
    const dispatch = useDispatch();

    const showotp = useSelector((state) => state.emailverif.showotp)

    useEffect(() => {
        if (showotp === true) {
            router.replace('/(auth)/otpVerify')
        }
    }, [showotp])


    const handleSubmit = () => {
        dispatch(verifyEmail(text))
    }


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
    
    return (
        <View style={styles.container}>
            <View style={styles.formcontainer}>
                <Text className=" text-[37px] text-icon text-center" style={{fontFamily: 'Itim-Regular'}}>samecodes</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email......."
                    placeholderTextColor="#EADEDE"
                    value={text}
                    onChangeText={setText}
                    keyboardType="email-address"
                />
                <TouchableOpacity className="bg-sky-500" style={styles.button} onPress={handleSubmit} >
                    <Text style={styles.buttonText}>Verify Email</Text>
                </TouchableOpacity>
                <View style={styles.othercontainer}>
                    <View style={styles.line}></View>
                    <Text style={styles.text}>or sign in with</Text>
                    <View style={styles.line}></View>
                </View>
                <View className="flex flex-row justify-center items-center gap-4 bg-gray-400 rounded-lg py-3 my-1 mx-[7px]">
                    <Icon name="logo-google" size={25} color="white" />
                    <Text>Continue with Google</Text>
                </View>
            </View>

            <View style={styles.lastItem}>
                <Text className=" text-icon text-center py-7">Already have an account <Text className=" font-semibold text-sky-500 text-lg"><Link href="/">Login</Link></Text></Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        //alignItems: 'center',
        backgroundColor: '#181818'
    },
    formcontainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        height: 60, 
        borderColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 15,
        margin: 7,
        paddingVertical: 5,
        marginBottom: 20,
        marginTop: 57,
        color: '#EADEDE',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#0EA5E9',
        paddingVertical: 10,  // Increased padding for height // Increased padding for width
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 7
    },
    buttonText: {
        color: 'white',
        fontSize: 16, // Increased font size
        fontWeight: 'bold',
    },
    othercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 27,
    },
    line: {
        width: '32%',
        height: 1,
        backgroundColor: '#D1D5DB', // gray-300 equivalent
    },
    text: {
        marginHorizontal: 12,
        color: '#9CA3AF', // gray-400 equivalent
    },
    lastItem: {
        borderTopWidth: 1,
        borderTopColor: '#9CA3AF'
    }
    
})
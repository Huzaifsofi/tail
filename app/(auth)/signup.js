import { View, Text, StyleSheet, TextInput, TouchableOpacity, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Link, router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/features/auth/SignupSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confpassword, setConfpassword] = useState('')

    const dispatch = useDispatch();

    const register_status = useSelector((state) => state.login.register_status)

    useEffect(() => {
        if (register_status === 'sucess') {
            AsyncStorage.setItem('its_ALL', 'true')
            router.replace('/(tabs)')
        }
    }, [register_status])


    const handeSubmit = async () => {
        const token = await AsyncStorage.getItem('auth-shot')


        const data = {
            "username": username,
            "password": password,
            "token": token

        }

        if (confpassword === password) {
            dispatch(registerUser(data))
        } else {
            console.log("password incorrect")
        }
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
                <View style={styles.inputcontainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="username"
                        placeholderTextColor="#EADEDE"
                        value={username}
                        onChangeText={setUsername}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="password"
                        placeholderTextColor="#EADEDE"
                        value={password}
                        onChangeText={setPassword}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="conform password"
                        placeholderTextColor="#EADEDE"
                        value={confpassword}
                        onChangeText={setConfpassword}
                        keyboardType="email-address"
                    />
                </View>
                <TouchableOpacity className="bg-sky-500" style={styles.button} onPress={handeSubmit} >
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.lastItem}>
                <Text className=" text-icon text-center py-7">Dont have an account
                    <Text className=" font-semibold text-sky-500 text-lg"><Link href="/emailVerify"> Sign up</Link></Text>    
                </Text>
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
    inputcontainer: {
        marginTop: 57,
    },
    input: {
        height: 60, 
        borderColor: 'white',
        borderWidth: 1,
        paddingHorizontal: 15,
        marginHorizontal: 7,
        paddingVertical: 5,
        marginBottom: 20,
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
        marginHorizontal: 7,
        marginTop: 14,
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
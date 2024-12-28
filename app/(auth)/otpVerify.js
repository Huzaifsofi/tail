import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Link, router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp } from "../../store/features/auth/EmailVerifySlice";


export default function emailVerify() {
    const [otp, setOtp] = useState('')
    const dispatch = useDispatch();

    const otpverify_status = useSelector((state) => state.emailverif.otp_status);


    useEffect(() => {
        if (otpverify_status === 'sucess') {
            router.replace('/(auth)/signup')
        } 
    }, [otpverify_status])

    
    const handleSubmit = () => {
        console.log("submit clicked " + otp)
        dispatch(verifyOtp(otp))
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
                    placeholder="otp"
                    placeholderTextColor="#EADEDE"
                    value={otp}
                    onChangeText={setOtp}
                    keyboardType="email-address"
                />
                <TouchableOpacity className="bg-sky-500" style={styles.button} onPress={handleSubmit} >
                    <Text style={styles.buttonText}>Verify OTP</Text>
                </TouchableOpacity>
                
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
    
    lastItem: {
        borderTopWidth: 1,
        borderTopColor: '#9CA3AF'
    }
    
})
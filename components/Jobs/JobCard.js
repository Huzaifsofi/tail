import { View, Text, Image, StyleSheet } from 'react-native'
import CompanyIcon from '../../assets/images/tcs.png'
import IoIcon from 'react-native-vector-icons/Ionicons'
import Fo5Icon from 'react-native-vector-icons/FontAwesome5'
 
export default function JobCard() {
  return (
    <View style={styles.container}>
        <View className='flex flex-row justify-between items-center'>
            <View>
                <Text className='text-txtcol font-semibold'>Flutter Development</Text>
                <Text className='text-txtcol font-thin text-sm'>Mind Prabha Techonologies Private Limited</Text>
            </View>
            <View>
                <Image style={styles.Img} source={CompanyIcon}  />
            </View>
        </View>

        <View className='flex flex-col gap-3'>
            <View className='flex flex-row items-center gap-1'>
                <IoIcon name="location-sharp" color="#EADEDE" size={15} />
                <Text className='text-txtcol text-sm'>Pune</Text>
            </View>
            <View className='flex flex-row items-center gap-5'>
                <View className='flex flex-row items-center gap-1'>
                    <IoIcon name="briefcase" color="#EADEDE" size={15}  />
                    <Text className='text-txtcol text-sm'>3 yrs</Text>
                </View>
                <View className='flex flex-row items-center gap-1'>
                    <Fo5Icon name="money-bill" color="#EADEDE" size={15}  />
                    <Text className='text-txtcol text-sm'>12,00,00</Text>
                </View>
            </View>
        </View>

        <View className='flex flex-row justify-between items-center pt-5'>
            <View>
                <Text className='text-sky-500'>7 days ago</Text>
            </View>
            <View>
                <IoIcon name="bookmark-outline" color="#EADEDE" size={19} />
            </View>
        </View>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#212121',
        marginVertical: 7,
        paddingHorizontal: 12,
        paddingVertical: 15,
        borderRadius: 10,
        elevation: 10
        
    },
    Img: {
        width: 57,
        height: 57,
        resizeMode: 'contain',
    },
})
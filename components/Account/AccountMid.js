import { View, Text, Image, StyleSheet } from 'react-native'
import PIC from '../../assets/images/Doco.png'
import FoAwsome from 'react-native-vector-icons/FontAwesome6'

export default function AccountMid() {
  return (
    <View style={styles.container}>
        <View className='flex flex-row justify-between items-center'>
            <View>
                <Image source={PIC} style={styles.Img}  />
            </View>

            <View className='flex flex-row items-center gap-9'>
                <View className='flex items-center'>
                    <Text className='text-txtcol text-xl'>200</Text>
                    <Text className='text-txtcol font-light'>followers</Text>
                </View>
                <View className='flex items-center'>
                    <Text className='text-txtcol text-xl'>25</Text>
                    <Text className='text-txtcol font-light'>following</Text>
                </View>
                <View className='flex items-center'>
                    <Text className='text-txtcol text-xl'>17</Text>
                    <FoAwsome name="handshake" color="#ECEDEE" size={24} />
                </View>
                
            </View>

        </View>

        <View className='pt-7'>
            <View className='gap-1'>
                <Text className=' text-txtcol font-medium text-sm'>Huzaif</Text>
                <Text className=' text-txtcol font-light text-sm'>Ui/Ux developer</Text>
                <Text className=' text-txtcol text-sm'>Company: <Text className='font-light'>Hcl Tech</Text></Text>
            </View>
            <View className='pt-3 gap-1'>
                <Text className=' text-txtcol pb-1'>Tech Stack: </Text>
                <View className='flex flex-row flex-wrap gap-3'>
                    <View className='px-3 py-[2px] flex items-center  bg-tag rounded-md'>
                        <Text className='text-txtcol text-sm font-light'>Sql</Text>
                    </View>

                    <View className='px-3 py-[2px] flex items-center  bg-tag rounded-md'>
                        <Text className='text-txtcol text-sm font-light'>node</Text>
                    </View>

                    <View className='px-3 py-[2px] flex items-center  bg-tag rounded-md'>
                        <Text className='text-txtcol text-sm font-light'>mongodb</Text>
                    </View>

                    <View className='px-3 py-[2px] flex items-center  bg-tag rounded-md'>
                        <Text className='text-txtcol text-sm font-light'>Sql</Text>
                    </View>
                    
                    <View className='px-3 py-[2px] flex items-center  bg-tag rounded-md'>
                        <Text className='text-txtcol text-sm font-light'>node</Text>
                    </View>

                </View>
            </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 28
    },
    Img: {
        width: 77,
        height: 77,
        resizeMode: 'contain',
    }
})
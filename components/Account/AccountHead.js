import { View, Text, StyleSheet } from 'react-native'
import IoIcon from 'react-native-vector-icons/Ionicons'
import FoIcon from 'react-native-vector-icons/Foundation'


export default function AccountHead() {
  return (
    <View style={styles.contsiner}>
      <View>
        <Text className='text-txtcol font-medium'>@pandu_Bhai</Text>
      </View>
      <View className='flex flex-row items-center gap-11'>
        <View>
            <IoIcon name="person-add" color="#EADEDE" size={21} />
        </View>
        <View>
            <FoIcon name="pencil" color="#EADEDE" size={21} />
        </View>
        <View>
            <IoIcon name="settings-sharp" color="#EADEDE" size={21} />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    contsiner: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingVertical: 16,
        paddingHorizontal: 16,

        borderBottomWidth: 1,
        borderBottomColor: '#EADEDE'
    }
})
import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import FeaIcons from 'react-native-vector-icons/Feather'
import FonAIcon from 'react-native-vector-icons/FontAwesome'

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('')
    const [showcancle, setShowCancle] = useState(false);

    const handleSearch = () => {
        console.log(searchQuery)

        if (searchQuery.length > 1) {
            setShowCancle(true)
        }
    }

    const handleClearSearch = () => {
        setSearchQuery('')
        setShowCancle(true)
    }

    return (
        <View style={styles.container}>
            <FeaIcons name="search" color="#EADEDE" size={21} />
            <TextInput
                style={styles.input}
                placeholder="Search ..."
                placeholderTextColor="#6B7280"
                value={searchQuery}
                onChangeText={(text) => {
                    setSearchQuery(text);
                    setShowCancle(text.length > 0); // Show cancel icon if input is not empty
                  }}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
            />
            {
                showcancle && (
                    <Pressable onPress={handleClearSearch}>
                        <FonAIcon name="remove" color="#EADEDE" size={18} />
                    </Pressable>
                )
            }

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        borderColor: '#EADEDE',
        borderWidth: 1,
        paddingHorizontal: 7,
        marginHorizontal: 14,
        paddingVertical: 1,
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 10,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        height: 40, 
        color: '#EADEDE',
    },
})
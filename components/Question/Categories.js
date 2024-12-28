import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Pressable } from 'react-native';
import MAIcons from 'react-native-vector-icons/MaterialIcons'

const categories = [
    { id: 1, name: 'All' },
    { id: 2, name: 'Technology' },
    { id: 3, name: 'Health' },
    { id: 4, name: 'Finance' },
    { id: 5, name: 'Education' },
    { id: 6, name: 'Sports' },
];

export default function Categories() {
    const [selectedCategory, setSelectedCategory] = useState(1);


  return (
    <View style={styles.container}>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
        >
        <Pressable>
            <View className='px-3'>
                <MAIcons name="add-box" color="#fff" size={28} />
            </View>
        </Pressable>

        {categories.map((category) => (
            <TouchableOpacity
            key={category.id}
            style={[
                styles.categoryTab,
                category.id === selectedCategory && styles.activeCategory,
            ]}
            onPress={() => setSelectedCategory(category.id)}
            >
            <Text
                style={[
                styles.categoryText,
                category.id === selectedCategory && styles.activeCategoryText,
                ]}
            >
                {category.name}
            </Text>
            </TouchableOpacity>
        ))}
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      marginTop: 7,
      paddingHorizontal: 10,
    },
    scrollContainer: {
        paddingVertical: 10,
        alignItems: 'center',
    },
    categoryTab: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      backgroundColor: '#3d3d3d',
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeCategory: {
      backgroundColor: '#007bff',
    },
    categoryText: {
      fontSize: 11,
      color: '#fff',
    },
    activeCategoryText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../store/features/category/categorySlice";
import IonicIcon from 'react-native-vector-icons/Ionicons'
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from "expo-router";

import FaIcon from 'react-native-vector-icons/FontAwesome5'
import { CreateQuestion, resetField } from "../../store/features/questions/questionSlice";


export default function AskQues() {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);


  const dispatch = useDispatch();
  const router = useRouter();

  // Get categories from Redux store
    const categories = useSelector((state) => state.category.category);
    const question_submit = useSelector((state) => state.question.CreateQuestion_status)

    useEffect(() => {
      if (question_submit === "sucess") {
        router.navigate("/(tabs)")
        dispatch(resetField('CreateQuestion_status'))
      }
    }, [router, question_submit])

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])

    const handleback = () => {
        router.back();
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images', 'videos'],
        allowsEditing: true,
        quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const removeImage = (index) => {
        setSelectedImages((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        console.log(question)
        console.log(category)        

        if (!question || !category) {
            alert("Please fill in all required fields.");
            return;
        }
    
        // Create an object to hold the form data
        const formData = {
            title: question,
            categrery: category,
            // Only include description if it's provided
            ...(description && { "description" : description }),
            // Only include image if it's provided
            ...(image && { "question_img": image }),
        };
    
        console.log("Form submitted:", formData);

        dispatch(CreateQuestion(formData))
        
    }

  return (
 
    <View style={styles.container}>
        <View className=" bg-main pt-[47px] py-3 px-4 flex flex-row justify-between items-center">
            <View className=" flex flex-row gap-7">
                <TouchableOpacity onPress={handleback}>
                    <FaIcon name="chevron-left" size={28} color="#EADEDE" />
                </TouchableOpacity>
                <Text className=" text-txtcol font-bold text-xl">Ask Question</Text>
            </View>
            <View className="flex items-center mx-4">
                <TouchableOpacity className="px-7 py-2 bg-sky-500 rounded-md" onPress={handleSubmit}>
                    <Text className=" text-txtcol font-semibold ">Post</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.label}>write Something</Text>
            <TextInput
                style={styles.input}
                placeholder="Question here ..."
                placeholderTextColor="#EADEDE"
                value={question}
                onChangeText={setQuestion}
                keyboardType="text"
            />
            <Text style={styles.label}>Select Categories </Text>
            <View style={styles.pickerWrapper}>
                <Picker
                selectedValue={category}
                onValueChange={(itemValue) => setCategory(itemValue)}
                style={[styles.picker, styles.textWhite, styles.smallText]}
                >
                {/* Default option */}
                <Picker.Item label="Select a category" value="" style={styles.optionStyle} />
                {/* Dynamically generate categories */}
                {categories?.map((cat) => (
                    <Picker.Item
                    key={cat._id} // Assuming each category has a unique 'id'
                    label={cat.title} // Display the category name
                    value={cat._id} // Use the category id as the value
                    style={styles.optionStyle}
                    />
                ))}
                </Picker>
            </View>
            <Text style={styles.dislabel}>write Something <Text className=" text-sky-400">(Optional)</Text></Text>
            <TextInput
                style={styles.desInp}
                placeholder="description here ..."
                placeholderTextColor="#EADEDE"
                value={description}
                onChangeText={setDescription}
                keyboardType="text"
                editable
                multiline
                numberOfLines={7}
            />

            {
                image && (
                    <View>
                        <Image source={{ uri: image }} style={styles.image} />
                    </View>
                )
            }
            <View className=" flex justify-center items-center">  
                <TouchableOpacity style={styles.AddimgBtn} onPress={pickImage}>
                    <IonicIcon style={styles.AddImgIcon} name='image' size={16} />
                    <Text style={styles.AddImgtxt}>Add Image <Text className=" text-sky-400">(Optional)</Text></Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#181818",
    paddingVertical: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "#EADEDE",
    fontWeight: "bold",
  },
  inputContainer: {
    flex:1,
    paddingTop: 40,
    backgroundColor: "#181818",
    paddingHorizontal: 16,
  },
  input: {
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: "#EADEDE",
    borderRadius: 5,
  },
  desInp: {
    height: 130,
    borderColor: "white",
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: "#EADEDE",
    borderRadius: 5,
  }, 
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: "#EADEDE",
    marginTop: 15,
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: "#EADEDE",
    borderRadius: 8,
    overflow: "hidden",
  },
  picker: {
    height: 50,
    color: "white",
  },
  smallText: {
    fontSize: 13,
    color: "white",
  },
  optionStyle: {
    fontSize: 13,
    color: "black",
    paddingVertical: 5,
  },
  dislabel: {
    fontSize: 14,
    marginBottom: 8,
    color: "#EADEDE",
    marginTop: 37,
  },
  AddimgBtn: {
    width: '70%',
    backgroundColor: '#EADEDE',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 37,
    borderRadius: 7
  },
  AddImgtxt: {
    paddingHorizontal: 10
  },
  AddImgIcon: {
    paddingHorizontal: 5,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
});

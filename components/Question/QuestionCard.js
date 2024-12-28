import { View, Text,StyleSheet, Image } from "react-native";
import ProfilePic from '../../assets/images/Doco.png'
import ConPic from '../../assets/images/con.jpeg'
import Icon from 'react-native-vector-icons/Ionicons'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

export default function QuestionCard({ item }) {
    return (
        <View style={styles.questioncard}>
            <View style={styles.top_container}>
                <View style={styles.name_container}>
                    <View>
                        <Image source={ProfilePic} style={styles.profilepic} />
                    </View>
                    <View style={styles.name_date_container}>
                        <Text style={styles.text_name}>Pandu Bhai</Text>
                        <Text style={styles.text_date}>Backend Developer</Text>
                    </View>
                </View>

                <View>
                  <Text style={styles.text_date}>26-jan-2014</Text>
                </View>
              
            </View>

            <View style={styles.second_conainer}>
  <View 
    style={[
      styles.second_text_area, 
      !item.question_img && { width: '100%' } // Make text area full width if no image
    ]}
  >
    <Text style={styles.text_title}>{item.title}</Text>
    {item.description && (
      <Text style={styles.text_description}>{item.description}</Text>
    )}
  </View>
  {item.question_img && (
    <View style={styles.second_img_area}>
      <Image
        source={{ uri: `http://192.168.0.106:4000/uploads/${item.question_img}` }}
        style={styles.content_img}
      />
    </View>
  )}
</View>

            <View  style={styles.last_container}>
                <View style={styles.last_btn_con}>
                    <View style={styles.like_con}>
                        <Icon name="heart-outline" size={28} color="#EADEDE" />
                        <Text style={styles.like_btn}>7000</Text>
                    </View>
                    <View style={styles.like_con}>
                        <Icon name="archive" size={24} color="#EADEDE" />
                        <Text style={styles.like_btn}>8000 <Text style={styles.like_text}>ans</Text></Text>
                    </View>
                </View>
                {/*
                <View style={styles.last_btn}>
                    <View style={styles.answer_btn}>
                        <FontIcon name="share-square" size={17} color="#EADEDE" />
                        <Text style={styles.answer_btn_text}>ans</Text>
                    </View>
                </View> */}
                <View>
                    <Icon name="ellipsis-vertical" color="#EADEDE" size={24} />
                </View>
            </View>

        </View>
    )
}




const styles = StyleSheet.create({
    questioncard: {
      paddingVertical: 21,
      paddingHorizontal: 16,
      color: '#ECEDEE',
      borderBottomWidth: 0.5,
      borderBottomColor: '#ECEDEE'
    },
    profilepic: {
      width: 28,
      height: 28,
      resizeMode: 'contain',
    },
    text_name: {
      color: '#ECEDEE',
      fontWeight: '500',
      fontSize: 11
    },
    text_date: {
      color: '#ECEDEE',
      fontWeight: '100',
      fontSize: 10
    },
    name_container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'

    },
    name_date_container: {
      paddingLeft: 12,
    },
    top_container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },


    second_conainer: {
      paddingVertical: 12,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center'
    },
    second_text_area: {
      width: '75%',
      paddingRight: 11,
    },
    second_img_area: {
      width: '25%',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    text_title: {
      fontWeight: '600',
      fontSize: 12,
      color: '#ECEDEE',
    },
    text_description: {
      fontWeight: '200',
      fontSize: 10,
      color: '#ECEDEE',
      paddingTop: 3
    },
    content_img: {
      width: 'auto',
      height: 55,
    },



    last_container: {
      paddingTop: 12,     
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    last_btn_con: {
      display: 'flex',
      flexDirection: 'row'
    },
    last_btn: {

    },
    
    like_con: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingRight: 12,
    },
    like_btn: {
      color: '#ECEDEE',
      paddingLeft: 4
    },
    like_text: {
      color: '#ECEDEE',
      fontWeight: '600'
    },

    answer_btn: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 4,
      backgroundColor: '#0EA5E9',
      borderRadius: 6,
    },
    answer_btn_text: {
      color: '#ECEDEE',
      paddingLeft: 4,
    }
});

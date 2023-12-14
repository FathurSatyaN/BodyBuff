import { useNavigation } from "@react-navigation/native";
import { SearchNormal1,Notification, AddCircle } from "iconsax-react-native";
import React, { useState } from "react";
<<<<<<< HEAD
import axios from 'axios';
=======
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from "react-native";
import {fontType} from '../../assets/theme';
const AddTraining = () => {
<<<<<<< HEAD
    const [loading, setLoading] = useState(false);
=======
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
    const [trainingData, setTrainingData] = useState({
        title: "",
        description: "",
        duration: "",
<<<<<<< HEAD
        image: "",
        totalLikes: 0,
        totalComments: 0,
    });
    const handleUpload = async () => {
        setLoading(true);
        try {
          await axios.post('https://6570c63f09586eff6641ed29.mockapi.io/bodybuff/training', {
              title: trainingData.title,
              description: trainingData.description,
              duration: trainingData.duration,
              image,
              totalComments: trainingData.totalComments,
              totalLikes: trainingData.totalLikes,
              createdAt: new Date(),
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          setLoading(false);
          navigation.navigate('Training');
        } catch (e) {
          console.log(e);
        }
      };
=======
        totalLikes: 0,
        totalComments: 0,
    });
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
    const handleChange = (key, value) => {
        setTrainingData({
        ...trainingData,
        [key]: value,
        });
    };
    const [image, setImage] = useState(null);
    const navigation = useNavigation();
    return (
        <View style={{flex: 1}}>
             <View style={{flexDirection: 'row',alignItems: 'center',padding: 25, justifyContent:'flex-end', gap: 28,backgroundColor: '#252727'}}>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Search")}>
                        <SearchNormal1 size="27" color="#F7F7F7"variant="Linear"/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("Mailbox")}>
                        <Notification size="27" color="#F7F7F7" variant="Linear"/>
                    </TouchableWithoutFeedback>
            </View>
            <ScrollView>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Nama Latihan."
                    value={trainingData.title}
                    onChangeText={(text) => handleChange("title", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Deskripsi Latihan."
<<<<<<< HEAD
                    value={trainingData.description}
=======
                    value={trainingData.title}
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
                    onChangeText={(text) => handleChange("description", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="Durasi Latihan."
<<<<<<< HEAD
                    value={trainingData.duration}
=======
                    value={trainingData.title}
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
                    onChangeText={(text) => handleChange("duration", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="URL."
<<<<<<< HEAD
                    value={trainingData.image}
                    onChangeText={(text) => setImage(text)}
=======
                    value={trainingData.title}
                    onChangeText={(text) => handleChange("image", text)}
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
<<<<<<< HEAD
            <TouchableOpacity onPress={handleUpload} style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
=======
            <TouchableOpacity style={{backgroundColor: '#3693F4',padding: 15, flexDirection: 'row',alignItems: 'center', gap: 12, marginHorizontal: 120, borderRadius: 14, position: 'absolute', top: 670,left:192}}>
>>>>>>> 2f6d81e56000a3020f493b3c6ff708fb7be4fd01
                <AddCircle variant="Linear" color="white" size={'30'}/>
            </TouchableOpacity>
        </View>
    )
}

export default AddTraining

const styles = StyleSheet.create({})
const textInput = StyleSheet.create({
    title:{
        fontSize: 20,
        fontFamily: fontType['Oswald-Light']
    },
    board: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    boardDescription: {
        padding: 10,
        marginVertical: 10,
        marginTop: -5,
        marginHorizontal: 20,
    }
})
import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    useColorScheme,
    LayoutAnimation,
    Platform,
    UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import Spacing from "../../../constants/Spacing";
import FontSize from "../../../constants/FontSize";
import Font from "../../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const T_TodaysLecture: React.FC = () => {
    
    const nav = useNavigation();
    const colorScheme = useColorScheme();
    const [lectures, setLectures] = useState({});
    const [display, setDisplay] = useState(false);

    const Lecturedata = [
        {
            id: 1,
            Lecture_no: 1,
            Lecture_Code: "PCRH 0001",
            Lecture_Details: "Lec / AB - 1 / Room - 418",
            Leacture_faculty: "Faculty : Robin Gupta",
            Lecture_name: "Subject : Quant & reasoning Apptitude",
            Lecture_time: "10:00 AM - 11:00 AM",
            Lecture_Status: "Uploaded"
        },
        {
            id: 2,
            Lecture_no: 2,
            Lecture_Code: "PCRH 0001",
            Lecture_Details: "Lec / AB - 1 / Room - 418",
            Leacture_faculty: "Faculty : Robin Gupta",
            Lecture_name: "Subject : Quant & reasoning Apptitude",
            Lecture_time: "11:00 AM - 12:00 AM",
            Lecture_Status: "Pending"
        },
        {
            id: 3,
            Lecture_no: 3,
            Lecture_Code: "PCRH 0001",
            Lecture_Details: "Lec / AB - 1 / Room - 418",
            Leacture_faculty: "Faculty : Robin Gupta",
            Lecture_name: "Subject : Quant & reasoning Apptitude",
            Lecture_time: "1:00 PM - 2:00 PM",
            Lecture_Status: "Pending"
        }
    ]

    const styles = StyleSheet.create({
        container: {
            marginBottom:100,
            margin: 15,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.white,
            borderRadius: 10,
            overflow: "hidden",
            shadowColor: "#7F5DF0",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 1.25,
            shadowRadius: 3.5,
            elevation: 15,
            padding: 10
        },
    });

    const toggleLecturesVisibility = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setDisplay(!display);
    };

    const Lectures = ({ Lecture_no, Lecture_Code, Lecture_Details, Leacture_faculty, Lecture_name, Lecture_time, Lecture_Status }: any) => {
        return (
            <TouchableOpacity style={{  display: "flex", flexDirection: "column", padding: 5, borderRadius: 10, gap: 3, marginVertical: 10 ,borderWidth:1 , borderColor: Lecture_Status === 'Pending' ? 'red' : Colors.primary , borderStyle: Lecture_Status === 'Pending' ? "dashed" : 'solid'}} 
            onPress={()=>{nav.navigate("UploadAttendance")}}>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: Font["poppins-bold"] }}>Lecture : {Lecture_no}</Text>
                    <Text style={{ fontFamily: Font["poppins-bold"] }}>{Lecture_Code}</Text>
                </View>
                <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.primary }}>{Lecture_Details}</Text>
                <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>{Leacture_faculty}</Text>
                <Text style={{ fontFamily: Font["poppins-regular"], fontStyle: "italic", color: "#ADD8E6" }}>{Lecture_name}</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" ,marginTop:10 }}>
                    <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
                        <Text style={{ fontFamily: Font["poppins-regular"] }}>Time</Text>
                        <Text style={{ fontFamily: Font["poppins-semiBold"] }}>{Lecture_time}</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 3 }}>
                        <Text style={{ fontFamily: Font["poppins-regular"] }}>Status</Text>
                        <Text style={{ fontFamily: Font["poppins-semiBold"], backgroundColor: "#FFFFE0", padding: 2, borderRadius: 8, paddingHorizontal: 5, color: Lecture_Status === 'Pending' ? "red" : Colors.primary }}>{Lecture_Status}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Text style={{ fontFamily: Font["poppins-bold"] }}>Todays, Lecture</Text>
                <TouchableOpacity style={{ backgroundColor: Colors.light, padding: 5, borderRadius: Spacing.borderRadius.xxl }} onPress={toggleLecturesVisibility}>
                    <Ionicons name="arrow-down" size={24}></Ionicons>
                </TouchableOpacity>
            </View>
            { display && 
            Lecturedata.map((lecture, index) => (
                <Lectures
                    key={index}
                    Lecture_no={lecture.Lecture_no}
                    Lecture_Code={lecture.Lecture_Code}
                    Lecture_Details={lecture.Lecture_Details}
                    Leacture_faculty={lecture.Leacture_faculty}
                    Lecture_name={lecture.Lecture_name}
                    Lecture_time={lecture.Lecture_time}
                    Lecture_Status={lecture.Lecture_Status}
                />

            ))}
        </SafeAreaView>
    );
};

export default T_TodaysLecture;

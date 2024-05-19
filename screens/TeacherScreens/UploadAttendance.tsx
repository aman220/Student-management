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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BannerSlider from "../HomeComponents/BannerSlider";
import LocationSection from "../HomeComponents/Location";
import T_ProfileCard from "./T_HomeComponents/T_PorfileCard";
import T_TodaysLecture from "./T_HomeComponents/T_TodaysLecture";
import QuickAction from "../HomeComponents/QuickAction";
import { useNavigation } from "@react-navigation/native";
import Space from "../../constants/Space";

interface Student {
    RollNo: number,
    UserName: string,
    present: boolean,
}

const UploadAttendance: React.FC = () => {

    const navigation = useNavigation();
    const colorScheme = useColorScheme();

    const handleUpload = () => {
        // Logic to handle uploading attendance data
        // You can send the attendance data to your server or perform any other necessary action
        console.log("Attendance uploaded!");
    };

    const [attendanceData, setAttendanceData] = useState<Student[][]>([
        [
            { RollNo: 1, UserName: "Aman Raj Singh", present: false },
            { RollNo: 2, UserName: "Vidhan Sharma", present: false },
            { RollNo: 3, UserName: "Ujjwal Vij", present: false },
            { RollNo: 4, UserName: "Priyanshi Gupta", present: false },
            { RollNo: 5, UserName: "Varsha Shrotriya", present: false },
            { RollNo: 6, UserName: "Sakshi Verma", present: false },
            { RollNo: 7, UserName: "Rahul Kumar", present: false },
            { RollNo: 8, UserName: "Ananya Mishra", present: false },
            { RollNo: 9, UserName: "Sandeep Singh", present: false },
            { RollNo: 10, UserName: "Pooja Sharma", present: false },
        ],
        [
            { RollNo: 1, UserName: "Aman Raj Singh", present: false },
            { RollNo: 2, UserName: "Vidhan Sharma", present: false },
            { RollNo: 3, UserName: "Ujjwal Vij", present: false },
            { RollNo: 4, UserName: "Priyanshi Gupta", present: false },
            { RollNo: 5, UserName: "Varsha Shrotriya", present: false },
            
            { RollNo: 6, UserName: "Sakshi Verma", present: false },
            { RollNo: 7, UserName: "Rahul Kumar", present: false },
            { RollNo: 8, UserName: "Ananya Mishra", present: false },
            { RollNo: 9, UserName: "Sandeep Singh", present: false },
            { RollNo: 10, UserName: "Pooja Sharma", present: false },
        ],
        // Add more sections here...
    ]);
    

    const toggleAttendance = (sectionIndex: number, studentIndex: number) => {
        const updatedAttendanceData = [...attendanceData];
        updatedAttendanceData[sectionIndex][studentIndex].present = !updatedAttendanceData[sectionIndex][studentIndex].present;
        setAttendanceData(updatedAttendanceData);
    }

    const markAllPresent = (sectionIndex: number) => {
        const updatedAttendanceData = [...attendanceData];
        updatedAttendanceData[sectionIndex] = updatedAttendanceData[sectionIndex].map(student => ({
            ...student,
            present: true
        }));
        setAttendanceData(updatedAttendanceData);
    }

    const UserNameCompo: React.FC<{ student: Student, sectionIndex: number, studentIndex: number }> = ({ student, sectionIndex, studentIndex }) => {
        return (
            <TouchableOpacity style={{ backgroundColor: Colors.white, padding: 5, marginVertical: 5, display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderRadius: 10, marginHorizontal: 10 }}
                onPress={() => toggleAttendance(sectionIndex, studentIndex)}>
                <Text style={{ fontFamily: Font["poppins-bold"] }}>{student.RollNo}</Text>
                <Text style={{ fontFamily: Font["poppins-bold"] }}>{student.UserName}</Text>
                <Ionicons name={student.present ? 'checkbox-outline' : 'square-outline'} size={24} color={Colors.primary} />
            </TouchableOpacity>
        );
    }

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={{ backgroundColor: Colors.white }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 15,
                    marginBottom: 5
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Upload Attendance</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            {attendanceData.map((section, sectionIndex) => (
                <View key={sectionIndex} style={{ padding: 5 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" ,alignItems:"center" , marginHorizontal:10}}>
                        <Text style={{ fontSize: FontSize.base, fontFamily: Font["poppins-bold"], marginVertical: 10 }}>Section {String.fromCharCode(65 + sectionIndex)}</Text>
                        <TouchableOpacity style={{flexDirection:"row" , alignItems:"center"}} onPress={() => markAllPresent(sectionIndex)}>
                            <Text style={{fontFamily:Font["poppins-regular"] , marginHorizontal:5}}>Mark All</Text>
                            <Ionicons name={'checkbox-outline'} size={24} color={Colors.primary} />
                        </TouchableOpacity>
                    </View>

                    {section.map((student, studentIndex) => (
                        <UserNameCompo key={studentIndex} student={student} sectionIndex={sectionIndex} studentIndex={studentIndex} />
                    ))}
                </View>
            ))}
             <TouchableOpacity
                style={styles.uploadButton}
                onPress={handleUpload}>
                <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.light,
        marginTop: Spacing.margin.xxl
    },uploadButton: {
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        margin: 20,
        marginBottom: 20,
        borderRadius: 10,
    },
    uploadButtonText: {
        fontFamily: Font["poppins-bold"],
        fontSize: FontSize.lg,
        color: Colors.white,
    },
});

export default UploadAttendance;

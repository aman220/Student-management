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
import { useNavigation } from "@react-navigation/native";
import CalendarPicker from 'react-native-calendar-picker';

const TimeTable: React.FC = () => {

    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const [selectedDate, setSelectedDate] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);


    const styles = StyleSheet.create({
        container: {
            marginTop: Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.white,
        },
        calendarContainer: {
            marginTop: Spacing.margin.lg,
            marginBottom: Spacing.margin.lg,
            padding: Spacing.padding.lg,
            backgroundColor: Colors.white,
            display: showCalendar ? 'flex' : 'none',
        },
        searchButton: {
            backgroundColor: Colors.primary,
            borderRadius: Spacing.borderRadius.base,
            padding: Spacing.padding.sm,
            alignItems: 'center',
            justifyContent: 'center',
        },
        searchButtonText: {
            color: Colors.white,
            fontSize: FontSize.base,
            fontFamily: Font["poppins-regular"],
        },
    });

   
    


    const Lecturedata = [

        {
            id: 1,
            Lecture_no: 3,
            date: 'Mon Apr 15',
            Lecture_Code: "PCRH 0001",
            Lecture_Details: "Lec / AB - 1 / Room - 418",
            Leacture_faculty: "Faculty : Robin Gupta",
            Lecture_name: "Subject : Quant & reasoning Apptitude",
            Lecture_time: "10:00 AM - 11:00 AM",
            Lecture_Status: "upcomming"
        },
        {
            id: 2,
            Lecture_no: 3,
            date: 'Mon Apr 15',
            Lecture_Code: "PCRH 0001",
            Lecture_Details: "Lec / AB - 1 / Room - 418",
            Leacture_faculty: "Faculty : Robin Gupta",
            Lecture_name: "Subject : Quant & reasoning Apptitude",
            Lecture_time: "10:00 AM - 11:00 AM",
            Lecture_Status: "upcomming"
        },
        {
            id: 3,
            Lecture_no: 3,
            date: 'Mon Apr 15',
            Lecture_Code: "PCRH 0001",
            Lecture_Details: "Lec / AB - 1 / Room - 418",
            Leacture_faculty: "Faculty : Robin Gupta",
            Lecture_name: "Subject : Quant & reasoning Apptitude",
            Lecture_time: "10:00 AM - 11:00 AM",
            Lecture_Status: "upcomming"
        }
    ]

    const filteredLectures = Lecturedata.filter(lecture => lecture.date === selectedDate.toString().substring(0,10));
    console.log(selectedDate)
    const handleSearch = () => {
        console.log("Searching for timetable on date:", selectedDate.toString().substring(0, 10));
    };

    const Lectures = ({ Lecture_no, Lecture_Code, Lecture_Details, Leacture_faculty, Lecture_name, Lecture_time, Lecture_Status }: any) => {
        return (
            <View style={{ display: "flex", flexDirection: "column", padding: 5, borderRadius: 10, gap: 3, marginVertical: 10 }}>
                <View style={{ width: "100%", height: 1, backgroundColor: Colors.light }}></View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: Font["poppins-bold"] }}>Lecture : {Lecture_no}</Text>
                    <Text style={{ fontFamily: Font["poppins-bold"] }}>{Lecture_Code}</Text>
                </View>
                <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.primary }}>{Lecture_Details}</Text>
                <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>{Leacture_faculty}</Text>
                <Text style={{ fontFamily: Font["poppins-regular"], fontStyle: "italic", color: "#ADD8E6" }}>{Lecture_name}</Text>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ display: "flex", flexDirection: "row", gap: 3 }}>
                        <Text style={{ fontFamily: Font["poppins-regular"] }}>Time</Text>
                        <Text style={{ fontFamily: Font["poppins-semiBold"] }}>{Lecture_time}</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 3 }}>
                        <Text style={{ fontFamily: Font["poppins-regular"] }}>Status</Text>
                        <Text style={{ fontFamily: Font["poppins-semiBold"], backgroundColor: "#FFFFE0", padding: 2, borderRadius: 8, paddingHorizontal: 5, color: Colors.primary }}>{Lecture_Status}</Text>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ marginHorizontal: 15 }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",

                    marginBottom: 5
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>TimeTable</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => setShowCalendar(!showCalendar)}>
                    <View>
                        <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Enter Date</Text>
                        <TextInput
                            placeholder="Select Date"
                            value={selectedDate.toString().substring(0, 10)}
                            editable={false}
                            style={{ padding: 10, borderColor: Colors.light, borderWidth: 1, borderRadius: Spacing.borderRadius.base, marginVertical: 5 }}
                        />
                    </View>

                </TouchableOpacity>

                <View style={styles.calendarContainer}>
                    <CalendarPicker
                        onDateChange={(date: string) => {
                            setSelectedDate(date);
                            setShowCalendar(false);
                        }}
                        selectedStartDate={selectedDate}
                    />
                </View>

                {/* <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>Search</Text>
                </TouchableOpacity> */}

                <View>
                    {filteredLectures.length > 0 ? (
                        filteredLectures.map((lecture, index) => (
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
                        ))
                    ) : (
                        <Text  style={{fontFamily:Font["poppins-bold"] , textAlign:"center" , marginVertical:50}}>No lectures scheduled for the selected date</Text>
                    )}
                </View>
            </View>
        </SafeAreaView>
    );
};

export default TimeTable;

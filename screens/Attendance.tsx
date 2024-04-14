import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, useColorScheme, } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import { useNavigation } from "@react-navigation/native";
import CircularProgressBar from "./OtherUtils/ProgressBar";

interface AttendanceData {
    id: string;
    courseCode: string;
    courseName: string;
    instructor: string;
    credit: number;
    type: string;
    attendancePercentage: number;
    attendedCount: number;
    totalCount: number;
}

const AttendanceScreen: React.FC = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const [data, setData] = useState<AttendanceData[]>([]);

    // Sample data
    useEffect(() => {
        // Fetch your data or set it statically
        const dummyData: AttendanceData[] = [
            {
                id: "1",
                courseCode: "BCAC 0009",
                courseName: "INTRODUCTION TO PYTHON",
                instructor: "Sachin Sharma",
                credit: 3,
                type: "Lecture",
                attendancePercentage: 80,
                attendedCount: 13,
                totalCount: 19,
            },
            {
                id: "2",
                courseCode: "BCAC 0009",
                courseName: "INTRODUCTION TO PYTHON",
                instructor: "Sachin Sharma",
                credit: 3,
                type: "Lecture",
                attendancePercentage: 55.9,
                attendedCount: 13,
                totalCount: 19,
            },
            {
                id: "3",
                courseCode: "BCAC 0009",
                courseName: "INTRODUCTION TO PYTHON",
                instructor: "Sachin Sharma",
                credit: 3,
                type: "Lecture",
                attendancePercentage: 33.5,
                attendedCount: 13,
                totalCount: 19,
            },
        ];
        setData(dummyData);
    }, []);

    const renderAttendanceCard = ({ item }: { item: AttendanceData }) => {
        return (
            <View>
                <AttendanceCard data={item} />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{
                backgroundColor: Colors.white,
            }}>
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
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Attendance</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <FlatList
                data={data}
                renderItem={renderAttendanceCard}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const AttendanceCard: React.FC<{ data: AttendanceData }> = ({ data }) => {
    return (
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: Colors.white, padding: 5, margin: 15, borderRadius: 10 }}>
            <View style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ fontFamily: Font["poppins-bold"] }}>{data.courseCode}</Text>
                <Text style={{ fontFamily: Font["poppins-regular"], fontStyle: "italic", color: Colors.primary }}>{data.courseName}</Text>
                <Text style={{ fontFamily: Font["poppins-semiBold"], color: Colors.textGray }}>{data.instructor}</Text>
                <View style={{ flexDirection: "row", gap: 2, marginTop: 10 }}>
                    <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Credit</Text>
                    <Text style={{ fontFamily: Font["poppins-bold"], color: Colors.primary }}>{data.credit}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 2 }}>
                    <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Type</Text>
                    <Text style={{ fontFamily: Font["poppins-bold"], color: Colors.primary }}>{data.type}</Text>
                </View>
            </View>
            <View>
                <View
                    style={{
                        backgroundColor: Colors.white,
                        padding: 5,
                        borderRadius: 10,
                    }}>
                    <CircularProgressBar
                        percentage={data.attendancePercentage}
                        strokeWidth={10}
                        radius={50}
                    />
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ fontFamily: Font["poppins-bold"] }}>Attend:</Text>
                        <Text style={{ fontFamily: Font["poppins-bold"], color: Colors.primary }}> {data.attendedCount} / {data.totalCount}</Text>
                    </View>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: Spacing.margin.xxl,
        flex: 1,
        backgroundColor: Colors.light,
    },
});

export default AttendanceScreen;

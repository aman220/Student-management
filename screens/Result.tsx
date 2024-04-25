import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
    LayoutAnimation,
    Platform,
    UIManager,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import { useNavigation } from "@react-navigation/native";

if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Result: React.FC = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();

    var semesterData = [
        {
            _id: 1,
            Sem: "Semister: I",
            subject: [
                { id: 1, name: "Theory of Automata", marks: "89 / 100" },
                { id: 2, name: "Digital Image Processing", marks: "69 / 100" },
                { id: 3, name: "Science", marks: "92 / 100" },
                { id: 4, name: "Maths", marks: "78 / 100" },
                { id: 5, name: "Computer", marks: "85 / 100" },
            ],
            totalsubjects: 5,
            Totalmarks: 457,
            totalCPI: 78.10,
            showTable: false,
        },
        {
            _id: 2,
            Sem: "Semester: II",
            subject: [
                { id: 1, name: "Theory of Automata", marks: "78 / 100" },
                { id: 2, name: "Digital Image Processing", marks: "82 / 100" },
                { id: 3, name: "Science", marks: "88 / 100" },
                { id: 4, name: "Maths", marks: "90 / 100" },
                { id: 5, name: "Computer", marks: "79 / 100" },
            ],
            totalsubjects: 5,
            Totalmarks: 557,
            totalCPI: 98.10,
            showTable: false,
        },
    ];


    const toggleTable = (index: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const newData = [...semesterData];
        newData[index].showTable = !newData[index].showTable;
        setSemesterData(newData);
    };

    var [semesterData, setSemesterData] = useState(semesterData);

    const styles = StyleSheet.create({
        container: {
            marginTop: Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === "dark" ? Colors.black : Colors.light,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: Colors.white }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 15,
                        marginBottom: 5,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: colorScheme === "dark" ? Colors.textGray : Colors.light,
                            width: 50,
                            height: 50,
                            borderRadius: Spacing.borderRadius.xl,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="chevron-back" size={24} color={colorScheme === "dark" ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === "dark" ? Colors.white : Colors.text }}>Result</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === "dark" ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="heart-outline" size={30} color={colorScheme === "dark" ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ padding: 5, margin: 10 }} showsVerticalScrollIndicator={false}>
                {semesterData.map((semester, index) => (
                    <View key={semester._id} style={{ backgroundColor: Colors.white, padding: 10, borderRadius: 10, marginBottom: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: Spacing.margin.sm }}>
                            <Text style={{ fontFamily: Font["poppins-bold"] }}>{semester.Sem}</Text>
                            <TouchableOpacity
                                style={{ backgroundColor: Colors.light, padding: 5, borderRadius: Spacing.borderRadius.xxl }}
                                onPress={() => toggleTable(index)}
                            >
                                <Ionicons name={semester.showTable ? "arrow-up" : "arrow-down"} size={24}></Ionicons>
                            </TouchableOpacity>
                        </View>
                        {semester.showTable && (
                            <View>
                                <View style={{ width: "100%", height: 1, backgroundColor: Colors.light, marginVertical: 10 }}></View>
                                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: Spacing.margin.sm }}>
                                    <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.sm, color: Colors.text }}>Id</Text>
                                    <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.sm, color: Colors.text }}>Subject Name</Text>
                                    <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.sm, color: Colors.text }}>Marks</Text>
                                </View>
                                {semester.subject.map((subject) => (
                                    <View key={subject.id} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: Colors.light, paddingVertical: Spacing.padding.sm }}>
                                        <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base, color: Colors.text }}>{subject.id}</Text>
                                        <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.text }}>{subject.name}</Text>
                                        <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base, color: Colors.primary }}>{subject.marks}</Text>
                                    </View>
                                ))}
                            </View>
                        )}
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginVertical: Spacing.margin.sm, backgroundColor: Colors.primary, padding: 5, paddingHorizontal: 10, borderRadius: 10 }}>
                            <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.sm, color: Colors.white }}>Subjects</Text>
                            <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.sm, color: Colors.white }}>Total Marks</Text>
                            <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.sm, color: Colors.white }}>Total CPI</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: Colors.light, padding: 5, paddingHorizontal: 10 }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg, color: Colors.text, paddingHorizontal: 5 }}>{semester.totalsubjects}</Text>
                            <View style={{ flexDirection: "row", alignItems: "baseline", marginLeft: 10 }}>
                                <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg, color: Colors.text }}>{semester.Totalmarks}</Text>
                                <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.text }}> / 700</Text>
                            </View>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.lg, color: Colors.primary }}>{semester.totalCPI}%</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

        </SafeAreaView>
    );
};

export default Result;

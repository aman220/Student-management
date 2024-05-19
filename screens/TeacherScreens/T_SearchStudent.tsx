import React, { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    useColorScheme,
    FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { useNavigation } from "@react-navigation/native";

interface Student {
    id: string;
    name: string;
    rollNumber: string;
    phone: string;
    status: string;
    result: string;
    email: string;
    course: string;
    semester: string;
    section: string;
    residency: string;
    registrationStatus: string;
    fatherName: string;
    fatherPhone: string;
    additionalInfo: string;
}

const dummyData: Student[] = [
    {
        id: "1",
        name: "Tanya Bansal",
        rollNumber: "2215990009",
        phone: "+91 7037983391",
        status: "Active",
        result: "8.4 CPI",
        email: "tanya.bansal_cs22@gla.ac.in",
        course: "B-Tech - CS",
        semester: "V",
        section: "A ( 65 )",
        residency: "Day Scholar",
        registrationStatus: "Completed",
        fatherName: "Raj Kamal Sharma",
        fatherPhone: "+91 7037983391",
        additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque?"
    },
    {
        id: "2",
        name: "Amit Kumar",
        rollNumber: "2215990010",
        phone: "+91 7037983392",
        status: "Active",
        result: "8.6 CPI",
        email: "amit.kumar_cs22@gla.ac.in",
        course: "B-Tech - CS",
        semester: "V",
        section: "B ( 66 )",
        residency: "Hostel",
        registrationStatus: "Completed",
        fatherName: "Sunil Kumar",
        fatherPhone: "+91 7037983392",
        additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque?"
    },
    {
        id: "3",
        name: "Rohit Sharma",
        rollNumber: "2215990011",
        phone: "+91 7037983393",
        status: "Inactive",
        result: "7.8 CPI",
        email: "rohit.sharma_cs22@gla.ac.in",
        course: "B-Tech - CS",
        semester: "V",
        section: "C ( 67 )",
        residency: "Day Scholar",
        registrationStatus: "Pending",
        fatherName: "Vijay Sharma",
        fatherPhone: "+91 7037983393",
        additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque?"
    },
    {
        id: "4",
        name: "Suman Gupta",
        rollNumber: "2215990012",
        phone: "+91 7037983394",
        status: "Active",
        result: "8.9 CPI",
        email: "suman.gupta_cs22@gla.ac.in",
        course: "B-Tech - CS",
        semester: "V",
        section: "D ( 68 )",
        residency: "Hostel",
        registrationStatus: "Completed",
        fatherName: "Rakesh Gupta",
        fatherPhone: "+91 7037983394",
        additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque?"
    },
    {
        id: "5",
        name: "Priya Singh",
        rollNumber: "2215990013",
        phone: "+91 7037983395",
        status: "Inactive",
        result: "7.5 CPI",
        email: "priya.singh_cs22@gla.ac.in",
        course: "B-Tech - CS",
        semester: "V",
        section: "E ( 69 )",
        residency: "Day Scholar",
        registrationStatus: "Pending",
        fatherName: "Anil Singh",
        fatherPhone: "+91 7037983395",
        additionalInfo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, cumque?"
    }
];

const T_SearchStudent: React.FC = () => {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const [showMoreFilters, setShowMoreFilters] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState<Student[]>();

    const styles = StyleSheet.create({
        container: {
            marginTop: Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.light,
        },
        inputContainer: {
            backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light,
            borderRadius: Spacing.borderRadius.xl,
            paddingHorizontal: Spacing.padding.base,
            paddingVertical: Spacing.padding.sm,
            marginHorizontal: Spacing.margin.base,
            marginBottom: Spacing.margin.base,
            flexDirection: 'row',
            alignItems: 'center',
        },
        input: {
            flex: 1,
            fontSize: FontSize.base,
            fontFamily: Font["poppins-regular"],
            color: Colors.text,
            marginLeft: Spacing.margin.sm,
        },
        uploadButton: {
            backgroundColor: Colors.primary,
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            margin: 10,
            marginBottom: 20,
            borderRadius: 10,
        },
        uploadButtonText: {
            fontFamily: Font["poppins-bold"],
            fontSize: FontSize.lg,
            color: Colors.white,
        },
        card: {
            backgroundColor: Colors.white,
            margin: 10,
            padding: 5,
            borderRadius: Spacing.borderRadius.lg
        },
        cardHeader: {
            flexDirection: "row",
            gap: 4
        },
        cardBody: {
            flex: 1
        },
        cardFooter: {
            height: 1,
            backgroundColor: Colors.light,
            margin: 5
        },
        cardText: {
            fontFamily: Font["poppins-regular"],
            color: Colors.textGray
        }
    });

    const handleSearch = (text: string) => {
        setSearchQuery(text);
        if (text) {
            const filtered = dummyData.filter(student =>
                student.name.toLowerCase().includes(text.toLowerCase()) ||
                student.rollNumber.includes(text) ||
                student.email.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(dummyData);
        }
    };

    const RenderProfileCard = ({ student }: { student: Student }) => {
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <View>
                        <Image source={{ uri: "https://kaspiunique.com/Temp/male.png" }} style={{ width: 90, height: 90 }} />
                    </View>
                    <View style={styles.cardBody}>
                        <Text style={{ fontFamily: Font["poppins-bold"] }}>{student.name}</Text>
                        <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.primary }}>Univ. Roll : {student.rollNumber}</Text>
                        <Text style={styles.cardText}>{student.phone}</Text>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginRight: 5 }}>
                            <Text style={styles.cardText}>Status: {student.status}</Text>
                            <Text style={{ fontFamily: Font["poppins-bold"] }}>Result : {student.result}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.cardFooter}></View>
                <View style={{ padding: 5 }}>
                    <Text style={{ fontFamily: Font['poppins-regular'] }}>{student.email}</Text>
                    <View style={{ flexDirection: "row", gap: 5 }}>
                        <Text style={{ fontFamily: Font["poppins-semiBold"] }}>{student.course}</Text>
                        <Text style={{ fontFamily: Font["poppins-semiBold"], color: "blue" }}>Sem : {student.semester}</Text>
                        <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Sec : {student.section}</Text>
                    </View>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: "blue" }}>Resident : {student.residency}</Text>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.primary }}>Reg. Status : {student.registrationStatus}</Text>
                </View>
                <View style={styles.cardFooter}></View>
                <View style={{ padding: 5 }}>
                    <Text style={{ fontFamily: Font["poppins-bold"] }}>Father's Name : {student.fatherName}</Text>
                    <Text style={{ fontFamily: Font["poppins-semiBold"], color: Colors.textGray }}>{student.fatherPhone}</Text>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.primary }}>{student.additionalInfo}</Text>
                </View>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: Colors.white }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: Spacing.margin.base,
                    marginBottom: Spacing.margin.sm
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Search Student</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                borderRadius: 10,
                margin: 10,
                padding: 5,
                overflow: "hidden",
                shadowColor: "#7F5DF0",
                shadowOffset: {
                    width: 0,
                    height: 10,
                },
                shadowOpacity: 1.25,
                shadowRadius: 3.5,
                elevation: 15,
                backgroundColor: Colors.white
            }}>
                <Text style={{ fontFamily: Font["poppins-semiBold"], padding: 5, textAlign: "center" }}>Search Filters</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name="person-outline" size={24} color={Colors.text} />
                    <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor={Colors.textGray}
                        value={searchQuery}
                        onChangeText={handleSearch}
                    />
                </View>
                {showMoreFilters && (
                    <>
                        <View style={styles.inputContainer}>
                            <Ionicons name="mail-outline" size={24} color={Colors.text} />
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor={Colors.textGray}
                                onChangeText={handleSearch}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Ionicons name="school" size={24} color={Colors.text} />
                            <TextInput
                                style={styles.input}
                                placeholder="Roll No"
                                placeholderTextColor={Colors.textGray}
                                onChangeText={handleSearch}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Ionicons name="call-outline" size={24} color={Colors.text} />
                            <TextInput
                                style={styles.input}
                                placeholder="Mobile No"
                                placeholderTextColor={Colors.textGray}
                                onChangeText={handleSearch}
                            />
                        </View>
                    </>
                )}
                <TouchableOpacity style={{ alignItems: "flex-end", padding: 5 }} onPress={() => setShowMoreFilters(!showMoreFilters)}>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>{showMoreFilters ? "Less Filters" : "More Filters"}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.uploadButton}>
                    <Text style={styles.uploadButtonText}>Search</Text>
                </TouchableOpacity>
            </View>
            {
                filteredData && (
                    <FlatList
                    data={filteredData}
                    renderItem={({ item }) => <RenderProfileCard student={item} />}
                    keyExtractor={item => item.id}
                />
                )
            }
           
        </SafeAreaView>
    );
};

export default T_SearchStudent;

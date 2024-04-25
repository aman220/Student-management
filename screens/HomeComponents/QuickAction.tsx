import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    useColorScheme,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import { useNavigation } from "@react-navigation/native";

// Define a type for valid icon names
type IconName =
    | "school"
    | "clock"
    | "calendar"
    | "library"
    | "book-open-page-variant"
    | "credit-card"
    | "account-group"
    | "timetable"
    | "help-circle";

interface Action {
    name: string;
    icon: IconName; 
    lightColor: string;
    action?: () => void; 
}

const QuickAction: React.FC = () => {
    const colorScheme = useColorScheme();
    const nav = useNavigation();
    const lightColors: string[] = ["#FFB6C1", "#87CEEB", "#98FB98", "#FFD700", "#FFA07A", "#00FFFF", "#9370DB", "#FF6347", "#7FFFD4"];

    const actions: Action[] = [
        { name: "Placement", icon: "school", lightColor: lightColors[0] , action: ()=>{nav.navigate("TimeTable")}},
        { name: "Attendance", icon: "clock", lightColor: lightColors[1] ,action: ()=>{nav.navigate("Attendance")}},
        { name: "Calendar", icon: "calendar", lightColor: lightColors[2] },
        { name: "Library", icon: "library", lightColor: lightColors[3] , action: ()=>{nav.navigate("LiberaryScreen")} },
        { name: "Syllabus", icon: "book-open-page-variant", lightColor: lightColors[4] , action: ()=>{nav.navigate("Syllabus")} },
        { name: "Fee Details", icon: "credit-card", lightColor: lightColors[5] ,action: ()=>{nav.navigate("Feedetails")} },
        { name: "Hierarchy", icon: "account-group", lightColor: lightColors[6] , action :()=>{nav.navigate("Hirarchy")} },
        { name: "Timetable", icon: "timetable", lightColor: lightColors[7],action: ()=>{nav.navigate("TimeTable")} },
        { name: "Help Desk", icon: "help-circle", lightColor: lightColors[8] , action : ()=>{nav.navigate("HelpScreen")}},
    ];

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            margin: 15,
            backgroundColor: colorScheme === "dark" ? Colors.black : Colors.white,
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
            padding: 10,
            marginBottom:100,
        },
        actionContainer: {
            alignItems: "center",
            width: "30%",
            padding:5
        },
        actionText: {
            marginTop: 5,
            textAlign: "center",
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" , justifyContent:"space-between"}}>
                <View style={{width:"100%" , marginVertical:10}}>
                    <Text style={{fontFamily:Font["poppins-bold"]}}>Quick Action</Text>
                </View>
                {actions.map((action, index) => (
                    <TouchableOpacity key={index} style={styles.actionContainer} onPress={action.action}>
                           <MaterialCommunityIcons
                                name={action.icon}
                                size={30}
                                color={action.lightColor}
                            />
                            <Text
                                style={[
                                    styles.actionText,
                                    { color: colorScheme === "dark" ? Colors.white : Colors.black },
                                ]}
                            >
                                {action.name}
                            </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default QuickAction;

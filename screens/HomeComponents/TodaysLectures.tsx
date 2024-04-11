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


const TodaysLecture: React.FC = () => {

    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
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

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" ,alignItems:"center"}}>
                <Text style={{ fontFamily: Font["poppins-bold"] }}>Todays,Lecture</Text>
                <TouchableOpacity style={{backgroundColor:Colors.light , padding:5 , borderRadius:Spacing.borderRadius.xxl}}>
                    <Ionicons name="arrow-down" size={24}></Ionicons>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default TodaysLecture;

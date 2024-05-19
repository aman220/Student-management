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


const T_HomeScreen: React.FC = () => {

    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.light,
        },
    });

    return (
        <ScrollView style={styles.container}>
            <LocationSection />
            <BannerSlider />
            <T_ProfileCard/>
            <T_TodaysLecture/>
        </ScrollView>
    );
};

export default T_HomeScreen;

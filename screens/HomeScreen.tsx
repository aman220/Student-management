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
import Colors from "../constants/Colors";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Font from "../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import SearchScreen from "./HomeComponents/Location";
import LocationSection from "./HomeComponents/Location";
import BannerSlider from "./HomeComponents/BannerSlider";
import ProfileCard from "./HomeComponents/ProfileCard";
import TodaysLecture from "./HomeComponents/TodaysLectures";
import QuickAction from "./HomeComponents/QuickAction";


const HomeScreen: React.FC = () => {

    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black: Colors.light,
        },
    });

    return (
        <View style={styles.container}>
         <LocationSection/>
        <ScrollView>
            <BannerSlider/>
            <ProfileCard/>
            <TodaysLecture/>
            <QuickAction/>
        </ScrollView>
        </View>
    );
};

export default HomeScreen;

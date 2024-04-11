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


const ProfileScreen: React.FC = () => {

    const colorScheme = useColorScheme();

    const styles = StyleSheet.create({
        container: {
            marginTop:Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black: Colors.white,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{textAlign:"center"}}>profile</Text>
        </SafeAreaView>
    );
};

export default ProfileScreen;

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
import Colors from "../../../constants/Colors";
import Spacing from "../../../constants/Spacing";
import FontSize from "../../../constants/FontSize";
import Font from "../../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const T_ProfileCard: React.FC = () => {

    const colorScheme = useColorScheme();
    const nav = useNavigation();
    const styles = StyleSheet.create({
        container: {
            marginHorizontal: 15,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.white,
            borderRadius:10,
            overflow:"hidden",
            shadowColor: "#7F5DF0",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 1.25,
            shadowRadius: 3.5,
            elevation: 15,
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: Colors.white, padding: 5 }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
                        <View>
                            <Image source={{ uri: "https://kaspiunique.com/Temp/male.png" }} style={{ width: 60, height: 60 }} />
                        </View>
                        <View style={{ marginHorizontal: 10 }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Dr Aman raj Singh</Text>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], color: Colors.primary }}>GLA 2215990</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default T_ProfileCard;

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
import ProfileCard from "../HomeComponents/ProfileCard";
import { LineChart } from 'react-native-chart-kit';
import ChartComponent from "../OtherUtils/ChartComponent";




const Porgress: React.FC = () => {

    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            marginTop: Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.white,
        },
    });

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
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>My Progress</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginVertical: 20 }}>
                <ProfileCard />
                <View style={{ padding: 5, marginLeft: -20, }}>
                    <ChartComponent />
                </View>
                <View style={{
                    marginHorizontal: 15,
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
                    alignItems:"center"
                }}>
                    <Text style={{fontFamily:Font["poppins-bold"] , fontSize:FontSize.base}}>Feedback</Text>
                    <View style={{padding:5}}>
                        <Text style={{fontFamily:Font["poppins-regular"] , fontStyle:"italic" , fontSize:FontSize.base , textAlign:"center" , marginVertical:10}}>" Your are Doing well in Academic Keep working hard and maintain your current attendance "</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Porgress;

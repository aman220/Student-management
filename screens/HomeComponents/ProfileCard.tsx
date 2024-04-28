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


const ProfileCard: React.FC = () => {

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
                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>Aman raj Singh</Text>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], color: Colors.primary }}>Registered on 24.08.2023</Text>
                        </View>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent:"space-between"}}>
                    <TouchableOpacity style={{ height: 100, backgroundColor: Colors.light, alignItems: "center", justifyContent: "center", width:"48%" , borderRadius:20 }} onPress={(()=>{nav.navigate("Attendance")})}>
                        <Ionicons name={"calendar-outline"} size={24}/>
                        <Text style={{fontFamily:Font["poppins-semiBold"]}}>Attendance</Text>
                        <Text style={{ fontFamily:Font["poppins-bold"]  , fontSize:FontSize.lg , color:Colors.primary}}>80.15%</Text>
                    </TouchableOpacity>
                    <View style={{ width: 2, backgroundColor: Colors.light , marginVertical:10 }} />
                    <TouchableOpacity style={{ height: 100, backgroundColor: Colors.light, alignItems: "center", justifyContent: "center", width:"48%" ,borderRadius:20}} onPress={()=>{nav.navigate("Result")}}>
                        <MaterialCommunityIcons name="chart-bar" color={Colors.textGray} size={26} />
                        <Text style={{fontFamily:Font["poppins-semiBold"]}}>Result</Text>
                        <Text style={{ fontFamily:Font["poppins-bold"]  , fontSize:FontSize.lg , color:Colors.primary}}>90.15%</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ProfileCard;

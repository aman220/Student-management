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


const Hirarchy: React.FC = () => {
    const navigate = useNavigation();
    const colorScheme = useColorScheme();

    const data = [

        {
            id: 2,
            name: "Dr Subhash Chand Agrawal",
            role: "Program Coordinator",
            imageUrl: "https://kaspiunique.com/Temp/male.png",
            action: "call-outline",
        },
        {
            id: 3,
            name: "Mr subham Shamrma",
            role: "Class Advisor",
            imageUrl: "https://kaspiunique.com/Temp/male.png",
            action: "call-outline",
        },
        {
            id: 4,
            name: "Monu Kumar",
            role: "Design and Ananylasis",
            imageUrl: "https://kaspiunique.com/Temp/male.png",
            action: "call-outline",
        },
        {
            id: 5,
            name: "Sachin Sharma",
            role: "SoftSkill Trainee",
            imageUrl: "https://kaspiunique.com/Temp/male.png",
            action: "call-outline",
        },
        {
            id: 6,
            name: "Sachin Sharma",
            role: "SoftSkill Trainee",
            imageUrl: "https://kaspiunique.com/Temp/male.png",
            action: "call-outline",
        },
        {
            id: 7,
            name: "Sachin Sharma",
            role: "SoftSkill Trainee",
            imageUrl: "https://kaspiunique.com/Temp/male.png",
            action: "call-outline",
        },
    ];

    const styles = StyleSheet.create({
        container: {
            marginTop: Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.white,
        },
        userInfoContainer: {
            flexDirection: "column",
            alignItems: "center",
        },
        userName: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: 18,
            marginBottom: 2,
        }, image2: {
            width: 80,
            height: 80,
            borderRadius: 40,
        },
        shopName: {
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.sm,
            color: Colors.textGray,
            marginBottom: 15,
            textAlign: "center",
        }, actionIcons: {
            flexDirection: "row",
            justifyContent: "center",
            marginBottom:20,
        },
        actionIcon: {
            marginHorizontal: 15,
            backgroundColor: Colors.light,
            padding: 10,
            borderRadius: Spacing.borderRadius.xl,
        }, textContainer: {
            textAlign: "center",
            justifyContent: "center",
            marginTop: 20,
        }
    });

    

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: Colors.white }}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginHorizontal: 15,
                    marginBottom: 5
                }}>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => navigate.goBack()}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Hirarchy</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView style={{ margin: 15 }} showsVerticalScrollIndicator={false}>
                <View style={styles.userInfoContainer}>
                    <Image
                        source={{ uri: "https://www.gla.ac.in/Uploads/faculty/270largefrt_Himanshu-Sharma-02.jpg" }}
                        style={styles.image2}
                    />
                    <View style={styles.textContainer}>
                        <Text style={styles.userName}>Dr Sandeep Rathore</Text>
                        <Text style={styles.shopName}>Head Of Departement</Text>
                    </View>
                </View>

                <View style={styles.actionIcons}>
                    <TouchableOpacity
                        style={styles.actionIcon}>
                        <Ionicons name="call" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionIcon}
                    >
                        <Ionicons name="mail" size={24} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.actionIcon}
                    >
                        <Ionicons name="location" size={24} />
                    </TouchableOpacity>
                </View>

                {data.map(item => {
                    return (
                        <>
                            <View key={item.id} style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" , marginTop:10 }}>
                                <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
                                    <View>
                                        <Image source={{ uri: item.imageUrl }} style={{ width: 60, height: 60 }} />
                                    </View>
                                    <View style={{ marginHorizontal: 10 }}>
                                        <Text style={{ fontFamily: Font["poppins-semiBold"] }}>{item.name}</Text>
                                        <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>{item.role}</Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity style={{ backgroundColor: Colors.light, padding: 10, borderRadius: 50, marginHorizontal: 10 }}>
                                        <Ionicons name={"call-outline"} size={24} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ width: "100%", height: 0.5, backgroundColor: Colors.light, marginVertical: 10 }}></View>
                        </>
                    );
                })}
            </ScrollView>
        </SafeAreaView >
    );
};

export default Hirarchy;

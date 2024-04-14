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
    FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const Syllabus: React.FC = () => {

    const colorScheme = useColorScheme();
    const navigate = useNavigation();

    const styles = StyleSheet.create({
        container: {
            marginTop:Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black: Colors.light,
        },
    });

    const syllabusData = [
        { 
            "title": "Critical Thinking",
            "subCode": "CTH 1001",
            "credit": 3,
            "type": "Theory",
            "content": "Click Here"
        },
        { 
            "title": "Problem Solving",
            "subCode": "PSH 2002",
            "credit": 4,
            "type": "Theory",
            "content": "Click Here"
        },
        { 
            "title": "Decision Making",
            "subCode": "DMH 3003",
            "credit": 3,
            "type": "Theory",
            "content": "Click Here"
        },
        { 
            "title": "Analytical Skills",
            "subCode": "ASH 4004",
            "credit": 4,
            "type": "Theory",
            "content": "Click Here"
        }
      
    ];

    const renderItem = ({ item }: { item: any }) => (
        <View style={{ display: "flex", flexDirection: "column", gap: 2, backgroundColor: Colors.white, padding: 5, borderRadius: 10, margin: 15 }}>
            <Text style={{ fontFamily: Font["poppins-semiBold"], fontStyle: "italic", color: Colors.primary, fontSize: FontSize.lg }}>{item.title}</Text>
            <View style={{ display: "flex", flexDirection: "row", gap: 5, justifyContent: "space-between", marginVertical: 5 }}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>Sub Code:</Text>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.black }}>{item.subCode}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 1 }}>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>credit: </Text>
                    <Text style={{ fontFamily: Font["poppins-semiBold"], color: Colors.black }}>{item.credit}</Text>
                </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row", gap: 5, justifyContent: "space-between", marginVertical: 5 }}>
                <View style={{ flexDirection: "row", gap: 1 }}>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>Type: </Text>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.black }}>{item.type}</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 1 }}>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>Content: </Text>
                    <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.black }}>{item.content}</Text>
                </View>
            </View>
        </View>
    );

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
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Syllabus</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                {
                   <FlatList
                   data={syllabusData}
                   renderItem={renderItem}
                   keyExtractor={(item, index) => index.toString()}
                 />
                }
            </View>
           
        </SafeAreaView>
    );
};

export default Syllabus;

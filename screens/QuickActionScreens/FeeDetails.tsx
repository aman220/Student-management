import React, { useState } from "react";
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
    LayoutAnimation,
    Platform,
    UIManager,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FeeDetails: React.FC = () => {
    const navigation = useNavigation();
    const colorScheme = useColorScheme();
    const [showTable, setShowTable] = useState(false);

    const toggleTable = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowTable(!showTable);
    };

    const semisterData = [
        { id: 1, name: "Fee Mode", marks: "170000" },
        { id: 2, name: "Paid", marks: "Two installment" },
        { id: 3, name: "Scholarship", marks: "156000" },
        { id: 4, name: "Balance", marks: "20000" },
        { id: 5, name: "Semester", marks: "No Dues" },
        
    ];
    const lightColors = ["#FADBD8", "#D6EAF8", "#F9E79F", "#D5F5E3", "#E8DAEF"];
    const styles = StyleSheet.create({
        container: {
            marginTop: Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.light,
        },
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
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => navigation.goBack()}>
                        <Ionicons name='chevron-back' size={24} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Fee Details</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ padding: 5, margin: 10 }}>
                <View style={{ backgroundColor: Colors.white, padding: 10, borderRadius: 10}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text style={{ fontFamily: Font["poppins-bold"] }}>Academic</Text>
                    <TouchableOpacity style={{ backgroundColor: Colors.light, padding: 5, borderRadius: Spacing.borderRadius.xxl }} onPress={toggleTable}>
                        <Ionicons name={showTable ? "arrow-up" : "arrow-down"} size={24}></Ionicons>
                    </TouchableOpacity>
                </View>
                {showTable && (
                    <View>
                        <View style={{ width: "100%", height: 1, backgroundColor: Colors.light , marginVertical:10}}></View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: Spacing.margin.sm }}>
                            {/* <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.sm, color: Colors.text }}>Required Fee</Text>
                            <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.sm, color: Colors.text }}>Marks</Text> */}
                        </View>
                        {semisterData.map((subject ,index) => (
                            <View key={subject.id} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderBottomWidth: 1, borderBottomColor: Colors.light, paddingVertical: Spacing.padding.sm }}>
                                <Text style={{ fontFamily: Font["poppins-regular"], fontSize: FontSize.base, color: Colors.text }}>{subject.name}</Text>
                                <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base, color: Colors.white , backgroundColor: lightColors[index % lightColors.length], padding:5 , borderRadius:10 }}>{subject.marks}</Text>
                            </View>
                        ))}
                    </View>
                )}
                </View>
            </View>
            
        </SafeAreaView>
    );
};

export default FeeDetails;

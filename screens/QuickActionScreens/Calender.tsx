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
import { Agenda } from "react-native-calendars";



const Calender: React.FC = () => {

    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            marginTop: Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.white,
        },
    });

    const dummyItems = {
        '2024-05-23': [{ name: 'Diwali Holiday', height: 80, day: 'Tuesday' }],
        '2024-05-25': [{ name: 'Vidhan Sharma Birthday', height: 120, day: 'Wednesday' }],
        '2024-04-27': [{ name: 'Team lunch', height: 60, day: 'Thursday' }],
        '2024-05-22': [],
    };

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
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === 'dark' ? Colors.white : Colors.text }}>Academic Calender</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={colorScheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <Agenda
                items={dummyItems}
                selected={'2024-05-24'}
                minDate={'2024-01-01'}
                maxDate={'2024-12-30'}
                renderItem={(item, firstItemInDay) => {
                    return (
                        <View style={{ backgroundColor: Colors.white, padding: 10, borderRadius: 10, marginTop: 25 }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>{item.name}</Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>{item.day}</Text>
                        </View>
                    );
                }}

                renderEmptyDate={(item) => {
                    return (
                        <View style={{ backgroundColor: Colors.white, padding: 10, borderRadius: 10, marginTop: 25 }}>
                            <Text style={{ fontFamily: Font["poppins-bold"]}}>
                                No events scheduled for this date.
                            </Text>
                        </View>
                    );
                }}
            />
        </SafeAreaView>
    );
};

export default Calender;

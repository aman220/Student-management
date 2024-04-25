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

const HelpScreen: React.FC = () => {

    const colorScheme = useColorScheme();
    const navigation = useNavigation();
    const [showFireTable, setShowFireTable] = useState(false);
    const [showRaggingTable, setShowRaggingTable] = useState(false);
    const [showMedicalTable, setShowMedialTable] = useState(false);


    const styles = StyleSheet.create({
        container: {
            marginTop: Spacing.margin.xxl,
            flex: 1,
            backgroundColor: colorScheme === 'dark' ? Colors.black : Colors.light,
        },
    });

    const RaggingData = [
        {
            id: 1,
            name: "Ajitesh Kumar",
            role: "Program Coordinator",
            imageUrl: "https://kaspiunique.com/Temp/male.png",
            email:"ajitesh.email.com",
            phoneNumber:"7037983391",
            action: "call-outline",
        },
        {
            id: 2,
            name: "Ajitesh Kumar",
            role: "Program Coordinator",
            imageUrl: "https://kaspiunique.com/Temp/male.png",
            email:"ajitesh.email.com",
            phoneNumber:"7037983391",
            action: "call-outline",
        },
    ];
    const FireData = [
        {
            id: 1,
            name: "Ajitesh Kumar",
            role: "Program Coordinator",
            imageUrl: "https://kaspiunique.com/Temp/male.png",
            email:"ajitesh.email.com",
            phoneNumber:"7037983391",
            action: "call-outline",
        },
        {
            id: 2,
            name: "Ajitesh Kumar",
            role: "Program Coordinator",
            imageUrl: "https://kaspiunique.com/Temp/male.png",
            email:"ajitesh.email.com",
            phoneNumber:"7037983391",
            action: "call-outline",
        },
    ];

    const toggleFireTable = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowFireTable(!showFireTable);
    };
    const toggleRaggingTable = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setShowRaggingTable(!showRaggingTable);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: Colors.white }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginHorizontal: 15,
                        marginBottom: 5,
                    }}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: colorScheme === "dark" ? Colors.textGray : Colors.light,
                            width: 50,
                            height: 50,
                            borderRadius: Spacing.borderRadius.xl,
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="chevron-back" size={24} color={colorScheme === "dark" ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: colorScheme === "dark" ? Colors.white : Colors.text }}>Help</Text>
                    <TouchableOpacity style={{ backgroundColor: colorScheme === "dark" ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name="heart-outline" size={30} color={colorScheme === "dark" ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ padding: 5, margin: 10 }}>
                <View style={{ backgroundColor: Colors.white, padding: 10, borderRadius: 10 , marginBottom:10}}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontFamily: Font["poppins-bold"], fontSize:FontSize.lg }}>Aniti Raging</Text>
                        <TouchableOpacity style={{ backgroundColor: Colors.light, padding: 5, borderRadius: Spacing.borderRadius.xxl }} onPress={toggleRaggingTable}>
                            <Ionicons name={showRaggingTable ? "arrow-up" : "arrow-down"} size={24}></Ionicons>
                        </TouchableOpacity>
                    </View>
                    {showRaggingTable &&  RaggingData.map(item => {
                        return (
                            <>
                                <View key={item.id} style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", marginTop: 10 }}>
                                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
                                        <View>
                                            <Image source={{ uri: item.imageUrl }} style={{ width: 70, height: 70 }} />
                                        </View>
                                        <View style={{ marginHorizontal: 10 }}>
                                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>{item.name}</Text>
                                            <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>{item.role}</Text>
                                            <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>{item.email}</Text>
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
                </View>
                <View style={{ backgroundColor: Colors.white, padding: 10, borderRadius: 10  , marginBottom:10}}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text style={{ fontFamily: Font["poppins-bold"] , fontSize:FontSize.lg}}>Fire & Safety</Text>
                        <TouchableOpacity style={{ backgroundColor: Colors.light, padding: 5, borderRadius: Spacing.borderRadius.xxl }} onPress={toggleFireTable}>
                            <Ionicons name={showFireTable ? "arrow-up" : "arrow-down"} size={24}></Ionicons>
                        </TouchableOpacity>
                    </View>
                    {showFireTable &&  FireData.map(item => {
                        return (
                            <>
                                <View key={item.id} style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", marginTop: 10 }}>
                                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
                                        <View>
                                            <Image source={{ uri: item.imageUrl }} style={{ width: 70, height: 70 }} />
                                        </View>
                                        <View style={{ marginHorizontal: 10 }}>
                                            <Text style={{ fontFamily: Font["poppins-semiBold"] }}>{item.name}</Text>
                                            <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>{item.role}</Text>
                                            <Text style={{ fontFamily: Font["poppins-regular"], color: Colors.textGray }}>{item.email}</Text>
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
                </View>
            </View>
        </SafeAreaView>
    );
};

export default HelpScreen;

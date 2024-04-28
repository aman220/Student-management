import React, { useState, useEffect, useCallback } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    Animated,
    SafeAreaView,
    TouchableOpacity,
    useColorScheme,
} from "react-native";

import Colors from "../../constants/Colors";
import Font from "../../constants/Font";
import FontSize from "../../constants/FontSize";
import Spacing from "../../constants/Spacing";
import { useNavigation } from "@react-navigation/native";
import * as Print from 'expo-print';



const HEADER_MAX_HEIGHT = 120;
const HEADER_MIN_HEIGHT = 90;
const PROFILE_IMAGE_MAX_HEIGHT = 90;
const PROFILE_IMAGE_MIN_HEIGHT = 40;
const USER_TABS_HEIGHT = 50;

const MyProfile: React.FC = () => {
    const nav = useNavigation();
    const [scrollY] = useState(new Animated.Value(0));
    const colorScheme = useColorScheme();

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: "clamp",
    });

    const profileImageHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [PROFILE_IMAGE_MAX_HEIGHT, PROFILE_IMAGE_MIN_HEIGHT],
        extrapolate: "clamp",
    });

    const profileImageMarginTop = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [
            HEADER_MAX_HEIGHT - PROFILE_IMAGE_MAX_HEIGHT / 2,
            HEADER_MAX_HEIGHT + 5,
        ],
        extrapolate: "clamp",
    });

    const headerZindex = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT, 120],
        outputRange: [0, 0, 1000],
        extrapolate: "clamp",
    });

    const headerTitleBottom = scrollY.interpolate({
        inputRange: [
            0,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT,
            HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT + 5 + PROFILE_IMAGE_MIN_HEIGHT,
            HEADER_MAX_HEIGHT -
            HEADER_MIN_HEIGHT +
            5 +
            PROFILE_IMAGE_MIN_HEIGHT +
            26,
        ],
        outputRange: [-25, -20, -20, 15],
        extrapolate: "clamp",
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <Animated.View
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: Colors.primary,
                    height: headerHeight,
                    zIndex: headerZindex,
                    alignItems: "center",
                }}
            >
                <Animated.View style={{ position: "absolute", bottom: headerTitleBottom }}>
                    <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
                        Aman Raj Singh
                    </Text>
                </Animated.View>
            </Animated.View>

            <ScrollView
                style={{ flex: 1 }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                showsVerticalScrollIndicator={false}
            >
                <Animated.View
                    style={{
                        height: profileImageHeight,
                        width: profileImageHeight,
                        borderRadius: PROFILE_IMAGE_MAX_HEIGHT / 2,
                        borderColor: "white",
                        borderWidth: 3,
                        overflow: "hidden",
                        marginTop: profileImageMarginTop,
                        marginLeft: 10,
                    }}
                >
                    <Image
                        source={{ uri: "https://kaspiunique.com/Temp/male.png" }}
                        style={{ flex: 1, width: null, height: null }}
                        resizeMode="cover"
                    />
                </Animated.View>

                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 26, paddingLeft: 10 }}>
                        Aman Raj Singh
                    </Text>
                    <Text
                        style={{
                            color: Colors.text,
                            fontSize: 12,
                            fontFamily: Font["poppins-regular"],
                            marginTop: 1,
                            paddingLeft: 15,
                        }}
                    >
                        aman.singh_cs22@gla.ac.in
                    </Text>
                    <Text
                        style={{
                            color: Colors.text,
                            fontSize: 12,
                            fontFamily: Font["poppins-regular"],
                            marginTop: 1,
                            paddingLeft: 15,
                        }}
                    >
                        B-Tech CSE 3rd Year
                    </Text>
                    <TouchableOpacity style={{
                        backgroundColor: Colors.primary,
                        padding: 10,
                        borderRadius: Spacing.borderRadius.xl,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 15,
                        margin: 20
                    }}>
                        <Text style={{
                            paddingHorizontal: 10,
                            fontFamily: Font["poppins-semiBold"],
                            fontSize: 16,
                            color: Colors.white,
                        }}>Get Profile Print</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ width: "100%", height: 1, backgroundColor: Colors.light, marginTop: 20 }} />
                <View style={{height:1000}}>
                    <Text style={{ fontFamily: Font["poppins-bold"], fontSize: FontSize.lg, margin: 15, textAlign: "center" }}>Personal Details</Text>
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
                        padding: 10
                    }}>
                         <Text style={{fontFamily:Font["poppins-bold"] , fontSize:FontSize.lg , marginBottom:10}}>Father's Details</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base }}>Name: </Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>Shri krishna </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base }}>Occupation: </Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>Gov Teacher</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base }}>Qualification: </Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>Graguate</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base }}>Email: </Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>shrikrishnasingh89@gmail.com</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base }}>Contact No:</Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>+91 7037983391</Text>
                        </View>
                    </View>
                    <View style={{
                        marginVertical:10,
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
                        padding: 10
                    }}>
                        <Text style={{fontFamily:Font["poppins-bold"] , fontSize:FontSize.lg , marginBottom:10}}>Mother's Details</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base }}>Name: </Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>Sadhana Singh </Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base }}>Occupation: </Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>Gov Teacher</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base }}>Qualification: </Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>Graguate</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base }}>Email: </Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>sadhana89@gmail.com</Text>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: Font["poppins-semiBold"], fontSize: FontSize.base }}>Contact No:</Text>
                            <Text style={{ fontFamily: Font["poppins-regular"] }}>+91 7037983391</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    verifiedIcon: {
        width: 25,
        height: 25,
        marginLeft: 5,
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        paddingHorizontal: 20,
    },
    statsItem: {
        alignItems: "center",
    },
    statsValue: {
        fontSize: 20,
        fontWeight: "bold",
    },
    statsLabel: {
        fontSize: 14,
        color: Colors.primary,
    },
});
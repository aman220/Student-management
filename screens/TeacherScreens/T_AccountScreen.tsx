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
    Modal,
    ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import showToast from "../../constants/Toast";
import Space from "../../constants/Space";



const T_AccountScreen: React.FC = () => {

    const Colorscheme = useColorScheme();
    const nav = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [isLogoutmodelVisible, setisLogoutmodelVisible] = useState(false);


    const open = () => {
        setisLogoutmodelVisible(true);
    }

    const close = () => {
        setisLogoutmodelVisible(false);
    }


    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: Colorscheme === 'dark' ? Colors.darkBackground : Colors.white,
        },
        header: {
            padding: 20,
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: 25,
        },
        accountHeader: {
            flexDirection: "row",
            // alignItems: "center",
            // backgroundColor: "red",
        },
        accountHeaderText: {
            fontSize: 20,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
        },
        profileContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
            // backgroundColor: "red",
        },
        profilePicture: {
            width: 80,
            height: 80,
            borderRadius: 40,
            marginRight: 20,
        },
        infoContainer: {
            flexDirection: "column",
            // backgroundColor: "red",
        },
        name: {
            fontSize: 18,
            fontWeight: "bold",
        },
        email: {
            fontSize: 16,
            color: Colors.text,
            fontFamily: Font["poppins-bold"],
        },
        card: {
            backgroundColor: Colors.light,
            margin: 10,
            padding: 15,
            borderRadius: 10,
        },
        cardText: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.base,
            marginBottom: 10,
        },
        logoutText: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.base,
            // color: Colors.red, // Change this to the desired color for logout text
        },
        verifiedIcon: {
            width: 25,
            height: 25,
            marginLeft: 5,
        },
        whiamiContainer: {
            backgroundColor: Colors.primary, // Customize the background color
            borderRadius: 20, // Customize the border radius
            paddingHorizontal: 15,
            paddingVertical: 5,
            justifyContent: "center",
            alignSelf: "flex-end",
        },
        whoamitext: {
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.sm,
            color: Colors.white, // Customize the text color
        },
        logoutButton: {
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: Colors.textGray,
            margin: 10,
            padding: 10,
            borderRadius: 10,
        },
        logoutButtonText: {
            fontFamily: Font["poppins-semiBold"],
            fontSize: FontSize.base,
        },
        centeredView: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        modalView: {
            backgroundColor: Colors.white,
            borderRadius: 10,
            padding: 20,
            width: "80%",
            alignItems: "center",
            elevation: 5, // Add elevation for a card-like effect
        },
        modalText: {
            marginBottom: 20,
            textAlign: "center",
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.base,
        },
        modalButtonContainer: {
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
        },
        modalButton: {
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            backgroundColor: Colors.primary,
        },
        modalButtonText: {
            color: Colors.white,
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.base,
        },
        skeletonContainer: {
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 15,
        },
        skeletonProfile: {
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: Colors.light,
            marginRight: 20,
        },
        skeletonInfoContainer: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
        },
        skeletonName: {
            width: "70%",
            height: 20,
            backgroundColor: Colors.light, // Customize the skeleton color
            marginBottom: 5,
        },
        skeletonEmail: {
            width: "90%",
            height: 18,
            backgroundColor: Colors.light, // Customize the skeleton color
        },
        loaderContainer: {
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            justifyContent: "center",
            alignItems: "center",

        },
        loaderContent: {
            backgroundColor: Colors.white,
            padding: Space * 2,
            borderRadius: Space,
            alignItems: "center",
        },
        loaderText: {
            fontFamily: Font["poppins-regular"],
            fontSize: FontSize.sm,
            marginTop: Space,
            alignItems: "center",
            color: Colors.primary,
            // fontFamily: Font["poppins-bold"],
        },
    });

    return (
        <SafeAreaView style={styles.container}>
            {isLoading && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isLoading}
                    onRequestClose={() => { }}
                >
                    <View style={styles.loaderContainer}>
                        <View style={styles.loaderContent}>
                            <ActivityIndicator color={Colors.primary} />
                            <Text style={styles.loaderText}>Loading Data...</Text>

                        </View>
                    </View>
                </Modal>)}
            <View style={{ zIndex: 9999 }}>
                <Toast />
            </View>
            <View style={styles.header}>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <TouchableOpacity style={{ backgroundColor: Colorscheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }} onPress={() => nav.goBack()}>
                        <Ionicons name='chevron-back' size={24} color={Colorscheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.lg, fontFamily: Font["poppins-semiBold"], color: Colorscheme === 'dark' ? Colors.white : Colors.text }}>Account</Text>
                    <TouchableOpacity style={{ backgroundColor: Colorscheme === 'dark' ? Colors.textGray : Colors.light, width: 50, height: 50, borderRadius: Spacing.borderRadius.xl, justifyContent: "center", alignItems: "center" }}>
                        <Ionicons name='heart-outline' size={30} color={Colorscheme === 'dark' ? Colors.white : Colors.textGray} />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 50,
                        // backgroundColor: "red",
                    }}
                >
                    <Image
                        source={{ uri: "https://www.dpsjhakri.com/images/Bgphotos/dps_logo.jpg" }}
                        style={{
                            width: 30,
                            height: 30,
                            borderRadius: 40,
                            marginRight: 10,
                        }}
                    ></Image>
                    <Text style={{ fontFamily: Font["poppins-bold"] }}>DELHI PUBLIC SCHOOL</Text>
                </View>

                <View style={styles.profileContainer}>
                    <Image
                        source={{ uri: "https://kaspiunique.com/Temp/male.png" }}
                        style={styles.profilePicture}
                    />
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>
                            Mr. Mridul Dixit
                        </Text>
                        <Text style={styles.email}>ama.singh_cs22@gla.ac.in</Text>
                    </View>
                </View>
            </View>
            <View style={styles.card}>
                {/* my profile button  */}
                <TouchableOpacity
                    onPress={() => { nav.navigate("MyProfile") }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={styles.cardText}>My Profile</Text>
                        <Image
                            source={require("../../assets/images/account.png")}
                            style={styles.verifiedIcon}
                        />
                    </View>
                </TouchableOpacity>

                <View
                    style={{ backgroundColor: Colors.white, height: 2, marginBottom: 10 }}
                ></View>

                <TouchableOpacity onPress={() => { nav.navigate("HelpScreen") }}>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Text style={styles.cardText}>Help Desk</Text>
                        <Image
                            source={require("../../assets/images/afeatures.png")}
                            style={styles.verifiedIcon}
                        />
                    </View>
                </TouchableOpacity>
            </View>


            <TouchableOpacity onPress={() => { showToast("info", "Screen Comming Soon") }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: Colors.light,
                        margin: 10,
                        padding: 10,
                        borderRadius: 10,
                    }}
                >
                    <Text style={styles.logoutText}>About Us</Text>
                    <Ionicons name="chevron-back" size={30} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { open() }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        backgroundColor: Colors.light,
                        margin: 10,
                        padding: 10,
                        borderRadius: 10,
                    }}
                >
                    <Text style={styles.logoutText}>Logout</Text>
                    <Ionicons name="log-out-outline" size={30} />
                </View>
            </TouchableOpacity>




            <Modal
                animationType="fade"
                transparent={true}
                visible={isLogoutmodelVisible}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                            Are you sure you want to logout?
                        </Text>
                        <View style={styles.modalButtonContainer}>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={()=>{setIsLoading(true)}}
                            >
                                <Text style={styles.modalButtonText}>Yes</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.modalButton}
                                onPress={() => { close() }}
                            >
                                <Text style={styles.modalButtonText}>No</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
};





export default T_AccountScreen;

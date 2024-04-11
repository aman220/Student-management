import React from "react";
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
  ImageBackground,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BlurView } from 'expo-blur';
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen: React.FC = () => {
  const nav = useNavigation();
  const colorScheme = useColorScheme();
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colorScheme === "dark" ? Colors.darkBackground : Colors.white,
    },
    imageBackground: {
      width: "50%"
    },
    overlayView: {
      position: 'absolute',
      width: '100%',
      height: height * 0.45,
      bottom: 0,
      borderTopLeftRadius: width * 0.2,
      borderTopRightRadius: width * 0.2,
      overflow: 'hidden',
      opacity: 10,
    },
    buttonText: {
      fontFamily: Font["poppins-bold"],
      textAlign: "center",
    },
    loginButton: {
      backgroundColor: Colors.primary,
      paddingVertical: Spacing.padding.xs,
      paddingHorizontal: Spacing.padding.sm,
      width: "100%",
      borderRadius: Spacing.borderRadius.base,
      shadowColor: Colors.primary,
      shadowOffset: {
        width: 0,
        height: Spacing.padding.base,
      },
      shadowOpacity: 0.3,
      shadowRadius: Spacing.padding.base,
      alignItems: "center",
    },
    registerButton: {
      backgroundColor: "transparent",
      paddingVertical: Spacing.padding.sm,
      paddingHorizontal: Spacing.padding.sm,
      width: "40%",
      borderRadius: Spacing.borderRadius.base,
      alignItems: "center",
      justifyContent: "center",
    },
    loginButtonText: {
      color: Colors.white,
      fontSize: FontSize.xl,
    },
    registerButtonText: {
      color: Colors.text,
      fontSize: FontSize.lg,
    },
    descriptionText: {
      fontSize: FontSize.sm,
      color: Colors.text,
      fontFamily: Font["poppins-regular"],
      textAlign: "center",
    },
    headerText: {
      fontSize: FontSize.xxl,
      color: Colors.primary,
      fontFamily: Font["poppins-bold"],
      textAlign: "center",
      marginBottom: Spacing.padding.sm,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground
          style={{ height: height / 2.5, marginTop: 100 }}
          resizeMode="contain"
          source={{ uri: "https://www.dpsjhakri.com/images/Bgphotos/dps_logo.jpg" }}
        />
        <View style={{backgroundColor:Colors.light , borderTopLeftRadius:20 , borderTopRightRadius:20 ,marginVertical:10 , position:"absolute" , bottom:-10 }}>
          <View style={{ paddingHorizontal: Spacing.padding.base, paddingTop: Spacing.padding.xxl }}>
            <Text style={styles.headerText}>Delhi Public School</Text>
            <Text style={styles.headerText}>Login Now</Text>
          </View>
          <View>
            <Text style={styles.descriptionText}>
              We Can touch the Sky we Can fly So High
            </Text>
          </View>
          <View style={{ paddingHorizontal: Spacing.padding.base, paddingTop: Spacing.padding.xl, flexDirection: "row", justifyContent: "space-between" , marginBottom:30 }}>
            <TouchableOpacity style={styles.loginButton} onPress={() => nav.navigate("LoginScreen")}>
              <Text style={[styles.buttonText, styles.loginButtonText]}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

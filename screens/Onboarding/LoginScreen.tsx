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
  ImageBackground,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";
import Space from "../../constants/Space";
import FontSize from "../../constants/FontSize";
import Font from "../../constants/Font";
import { useNavigation } from "@react-navigation/native";


const LoginScreen: React.FC = () => {
  const nav = useNavigation();
  const Colorscheme = useColorScheme();
  const[rollno , setRollNo] = useState<any>();
  const[password  , setPassword] = useState<any>();

  const Redirect = ()=>{
    if(rollno == 1234 && password == 123){
      nav.navigate("T_BottomNav");
    }else{
      nav.navigate("BottomNav")
    }
  }
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        Colorscheme === "dark" ? Colors.darkBackground : Colors.white,
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
    }
  });

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ margin: 15 }} >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: FontSize.xl,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Space * 3,
              zIndex: -1,
            }}
          >
            Login Here
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.lg,
              maxWidth: "68%",
              textAlign: "center",
            }}
          >
            Welcome back you've been missed
          </Text>
        </View>
        <View style={{ marginVertical: Space * 3 }}>
          <TextInput
            onChangeText={setRollNo}
            placeholder="Enter Your Roll No"
            placeholderTextColor={Colors.textGray}
            style={{
              fontFamily: Font["poppins-regular"],
              fontSize: FontSize.sm,
              padding: Space * 2,
              backgroundColor: Colors.light,
              borderRadius: Space,
              marginVertical: Space,
            }}
          />

          <View style={{ position: "relative" }}>
            <TextInput
              onChangeText={setPassword}
              placeholder="Enter User Password"
              placeholderTextColor={Colors.textGray}
              secureTextEntry
              style={{
                fontFamily: Font["poppins-regular"],
                fontSize: FontSize.sm,
                padding: Space * 2,
                backgroundColor: Colors.light,
                borderRadius: Space,
                marginVertical: Space,
              }}
            />
            <TouchableOpacity style={{ position: "absolute", right: 20, top: "50%", transform: [{ translateY: -12 }] }}>
              <Ionicons name="eye" size={24} color={Colors.textGray} />
            </TouchableOpacity>
          </View>

        </View>
        <TouchableOpacity>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.sm,
              color: Colors.primary,
              alignSelf: "flex-end",
            }}
          >
            Forget your Password ?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: Space * 2,
            backgroundColor: Colors.primary,
            marginVertical: Space * 3,
            borderRadius: Space,
            shadowColor: Colors.primary,
            shadowOffset: {
              width: 0,
              height: Space,
            },
            shadowOpacity: 0.3,
            shadowRadius: Space,
          }}
          onPress={() => { Redirect() }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.white,
              textAlign: "center",
              fontSize: FontSize.lg,
            }}
          >
            Sign in
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: Space,
          }}
          onPress={() => nav.navigate("RegisterScreen")}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              textAlign: "center",
              fontSize: FontSize.sm,
            }}
          >
            Create new account
          </Text>
        </TouchableOpacity>

        <View
          style={{
            marginVertical: Space * 3,
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.primary,
              textAlign: "center",
              fontSize: FontSize.sm,
            }}
          >
            ( DELHI PUBLIC SCHOOl )
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

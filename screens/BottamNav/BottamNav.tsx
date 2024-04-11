import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../HomeScreen";
import Colors from "../../constants/Colors";
import Spacing from "../../constants/Spacing";
import { useColorScheme } from "react-native";
import AttendanceScreen from "../Attendance";
import Result from "../Result";
import ProfileScreen from "../Profile";


const Tab = createBottomTabNavigator();

const BottomNav: React.FC = () => {
  const colorScheme = useColorScheme(); 
  const nav = useNavigation();
  const color = Colors.primary;
  const tabBarStyle = {
    ShadowRoot: {
      shadowColor: "#7F5DF0",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  };

  return (
    <Tab.Navigator
      screenOptions={{

        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: colorScheme === 'dark' ? Colors.textGray : Colors.white,
          borderTopLeftRadius: Spacing.borderRadius.xxl,
          borderTopRightRadius: Spacing.borderRadius.xxl,
          height: 70,
          ...tabBarStyle.ShadowRoot,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 8, 
        },
        tabBarIconStyle: {
          marginTop: 3 
        },
        tabBarActiveTintColor: colorScheme === 'dark' ? Colors.white : Colors.primary, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Attendance"
        component={AttendanceScreen}
        options={{
          tabBarLabel: "Attendance",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="calendar-check" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Result"
        component={Result}
        options={{
          tabBarLabel: "Result",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};``

export default BottomNav;

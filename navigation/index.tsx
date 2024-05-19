import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Colors from "../constants/Colors";
import { RootStackParamList } from "../types";
import HomeScreen from "../screens/HomeScreen";
import BottomNav from "../screens/BottamNav/BottamNav";
import LoginScreen from "../screens/Onboarding/LoginScreen";
import RegisterScreen from "../screens/Onboarding/RegisterScreen";
import WelcomeScreen from "../screens/Onboarding/WelcomeScreen";
import TimeTable from "../screens/QuickActionScreens/TimeTable";
import AttendanceScreen from "../screens/Attendance";
import FeeDetails from "../screens/QuickActionScreens/FeeDetails";
import Syllabus from "../screens/QuickActionScreens/Syllabus";
import Hirarchy from "../screens/QuickActionScreens/Hirarchy";
import Porgress from "../screens/AccountScreens/Progress";
import HelpScreen from "../screens/QuickActionScreens/HelpScreen";
import LiberaryScreen from "../screens/QuickActionScreens/LibraryScreen";
import MyProfile from "../screens/AccountScreens/MyProfile";
import Result from "../screens/Result";
import Calender from "../screens/QuickActionScreens/Calender";
import T_BottomNav from "../screens/T_BottamNav/T_BottamNav";
import UploadAttendance from "../screens/TeacherScreens/UploadAttendance";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
      <Stack.Screen name='BottomNav' component={BottomNav} />
      <Stack.Screen name='TimeTable' component={TimeTable} />
      <Stack.Screen name='Attendance' component={AttendanceScreen} />
      <Stack.Screen name='Feedetails' component={FeeDetails} />
      <Stack.Screen name='Syllabus' component={Syllabus} />
      <Stack.Screen name='Hirarchy' component={Hirarchy} />
      <Stack.Screen name='Porgress' component={Porgress} />
      <Stack.Screen name='HelpScreen' component={HelpScreen} />
      <Stack.Screen name='LiberaryScreen' component={LiberaryScreen} />
      <Stack.Screen name='MyProfile' component={MyProfile} />
      <Stack.Screen name='Result' component={Result} />
      <Stack.Screen name='Calender' component={Calender} />



      {/* //teacher routes  */}
      <Stack.Screen name='T_BottomNav' component={T_BottomNav} />
      <Stack.Screen name='UploadAttendance' component={UploadAttendance} />

    </Stack.Navigator>
  );
}

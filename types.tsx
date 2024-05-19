import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
 HomeScreen : undefined;
 BottomNav : undefined;
 T_BottomNav : undefined;
 LoginScreen :undefined;
 RegisterScreen :undefined;
 WelcomeScreen :undefined;
 TimeTable:undefined;
 Attendance:undefined;
 Feedetails :undefined;
 Syllabus:undefined;
 Hirarchy:undefined;
 Porgress:undefined;
 HelpScreen:undefined;
 LiberaryScreen:undefined;
 MyProfile :undefined;
 Result :undefined;
 Calender:undefined;
 UploadAttendance:undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

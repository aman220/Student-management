import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
 HomeScreen : undefined;
 BottomNav : undefined;
 LoginScreen :undefined;
 RegisterScreen :undefined;
 WelcomeScreen :undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

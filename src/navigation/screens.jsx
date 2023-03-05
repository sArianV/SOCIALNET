import { Text, View } from "react-native";
import Navbar from "../components/Navbar/Navbar";
import NavbarBigLogo from "../components/Navbar/NavbarBigLogo";
import withDissableBackHandler from "../hocs/withDissableBackHandler";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

export const screens = [
  {
    id: 1,
    name: "SplashScreen",
    component: SplashScreen,
    options: {
      headerShown: false,
      statusBarStyle: "light",
      statusBarTranslucent: true,
    },
  },
  {
    id: 2,
    name: "HomeScreen",
    component: HomeScreen,
    options: {
      headerBackVisible: false,
      statusBarStyle: "dark",
      statusBarTranslucent: false,
      headerTitle: () => <Navbar />,
      headerShadowVisible: true,      
    },
  },
  {
    id: 3,
    name: "LoginScreen",
    component: withDissableBackHandler(LoginScreen),
    options: {
      headerBackVisible: false,
      statusBarStyle: "dark",
      statusBarTranslucent: false,
      headerTitle: () => <NavbarBigLogo />,
      headerShadowVisible: false,      
    },
  },
];

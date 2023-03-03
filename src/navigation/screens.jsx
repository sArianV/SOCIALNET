import { Text, View } from "react-native";
import NavbarBigLogo from "../components/Navbar/NavbarBigLogo";
import withDissableBackHandler from "../hocs/withDissableBackHandler";
import LoginScreen from "../screens/Login/LoginScreen";
import SplashScreen from "../screens/SplashScreen/SplashScreen";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

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
      statusBarStyle: "dark",
      statusBarTranslucent: false,
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

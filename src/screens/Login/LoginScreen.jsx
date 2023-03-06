import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import HiddenPasswordIcon from "../../../assets/svg/icons/HiddenPasswordIcon";
import ExternalLogin from "../../components/ExternalLogin/ExternalLogin";
import Input from "../../components/Input/Input";
import SocialnetButton from "../../components/SocialnetButton/SocialnetButton";

const LoginScreen = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [password, onChangePassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignInButton = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <ScrollView width="100%" height="100%" backgroundColor="white">
      <View style={styles.container}>
        <Text style={styles.bigFont}>Sign in</Text>
        <Text style={[styles.smallFont, styles.subtitle]}>
          SIGN IN WITH YOUR EMAIL ADDRESS
        </Text>
        <Input onChange={onChangeText} value={text} placeholder="Email" />
        <Input
          onChange={onChangePassword}
          value={password}
          placeholder="Password"
          rightIcon={HiddenPasswordIcon}
          onPressRightIcon={() => {
            setShowPassword((prevValue) => !prevValue);
          }}
          secureTextEntry={!showPassword}
        />
        <SocialnetButton
          textButton="Sign in"
          onPress={handleSignInButton}
          bigButton
        />
        <Text style={[styles.smallFont, styles.externalLoginTitle]}>
          CONTINUE WITH A SOCIAL ACCOUNT
        </Text>
        <ExternalLogin />
        <TouchableOpacity
          style={styles.registerTextContainer}
          onPress={() => console.log("sign up")}
        >
          <Text style={[styles.smallFont, styles.registerText]}>
            Don’t have an account? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 16,
    backgroundColor: "#fff",
    gap: 12,
    minHeight: "100%",
  },
  bigFont: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "ProximaNova",
    lineHeight: 24,
  },
  smallFont: {
    fontFamily: "ProximaNova",
    lineHeight: 16,
    fontSize: 13,
    fontWeight: "400",
    color: "#555555",
  },
  subtitle: {
    marginTop: 14,
    marginBottom: 4,
  },
  externalLoginTitle: {
    marginTop: 28,
    marginBottom: 8,
  },
  registerTextContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: 224,
  },
  registerText: {
    color: "#ED572F",
    fontWeight: "700",
    fontSize: 17,
  },
});

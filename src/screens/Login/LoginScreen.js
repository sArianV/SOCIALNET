import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import HiddenPasswordIcon from "../../../assets/svg/icons/HiddenPasswordIcon";
import NavbarLogoMedium from "../../../assets/svg/NavbarLogoMedium";
import NavbarLogoSmall from "../../../assets/svg/NavbarLogoSmall";
import Input from "../../components/Input/Input";
import SocialnetButton from "../../components/SocialnetButton/SocialnetButton";

const LoginScreen = ({navigation}) => {
  const [text, onChangeText] = useState("");
  const [password, onChangePassword] = useState("");

  const handleSignInButton = () => {
    navigation.navigate("HomeScreen");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.bigFont}>Sign in</Text>
      <View style={styles.subtitle}>
        <Text style={styles.smallFont}>SIGN IN WITH YOUR EMAIL ADDRESS</Text>
      </View>
      <Input onChange={onChangeText} value={text} placeholder="Email" />
      <View style={styles.passwordBox}>
        <Input
          onChange={onChangePassword}
          value={password}
          placeholder="Password"
          secureTextEntry
        />
        <Pressable style={styles.passwordIcon}>
          <HiddenPasswordIcon />
        </Pressable>
      </View>
      <SocialnetButton
        textButton="Sign in"
        onPress={handleSignInButton}
        bigButton
      />
      <NavbarLogoMedium />
      <NavbarLogoSmall />
    </View>
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
  },
  subtitle: {
    marginTop: 14,
    marginBottom: 4,
  },
  passwordBox: {
    width: "100%",
    position: "relative",
  },
  passwordIcon: {
    position: "absolute",
    right: 0,
    marginVertical: 15,
    marginRight: 18,
  },
});

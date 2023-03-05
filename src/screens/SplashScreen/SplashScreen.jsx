import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import FirstScreenBackground from "../../../assets/images/FirstScreenBackground.jpg";
import SocialnetBigLogo from "../../../assets/svg/SocialnetBigLogo";
import SocialnetButton from "../../components/SocialnetButton/SocialnetButton";

const IMG_URL = Image.resolveAssetSource(FirstScreenBackground).uri;

const SplashScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate("LoginScreen");
  };
  return (
    <ImageBackground style={styles.image} source={{ uri: IMG_URL }}>
        <View style={styles.container}>
          <View style={styles.title}>
            <SocialnetBigLogo />
          </View>
          <Text style={styles.subtitle}>Welcome</Text>
          <View style={styles.buttonContainer}>
            <SocialnetButton textButton="Get Started" onPress={onPress} />
          </View>
        </View>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  container: {
    position : "relative",
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    display: "flex",
      
    alignItems: "center",
    justifyContent: "center",
    marginTop: 182,
  },
  subtitle: {
    fontSize: 28,
    color: "white",
    textAlign: "center",
    fontFamily: "ProximaNova",
    fontWeight: "700",
    lineHeight: 34.1,
    marginTop: 32,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 31,
  },
});

import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import FirstScreenBackground from "../../../assets/images/FirstScreenBackground.jpg";

const IMG_URL = Image.resolveAssetSource(FirstScreenBackground).uri;

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={{ uri: IMG_URL }}>
        <Text>Splash</Text>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
});

import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SocialnetButton = ({ textButton, onPress, bigButton }) => {
  return (
    <View style={bigButton ? {} : styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.shadow, styles.button]}
        onPress={onPress}
      >
        <Text style={styles.textButton}>{textButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(SocialnetButton);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    elevation: 2,
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ED572F",
    borderRadius: 10,
    paddingVertical: 13,
    paddingHorizontal: 40,
  },
  textButton: {
    fontSize: 17,
    lineHeight: 20,
    fontFamily: "ProximaNova",
    fontWeight: "bold",
    color: "white",
  },
});

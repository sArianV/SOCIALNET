import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SocialnetButton = ({ textButton, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>{textButton}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default memo(SocialnetButton);

const styles = StyleSheet.create({
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

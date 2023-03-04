import { StyleSheet, TouchableOpacity } from "react-native";

const IconButton = ({ fullWidth, children, ...rest }) => {
  return (
    <TouchableOpacity
      {...rest}
      style={
        fullWidth
          ? [styles.button, styles.fullWidthButton]
          : [styles.button, styles.smallButton]
      }
    >
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#808080",
    borderWidth: 1,
  },
  smallButton: {
    height: 40,
    width: 84,
  },
  fullWidthButton: {
    height: 40,
    width: "100%",
  },
});

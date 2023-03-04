import { StyleSheet, View } from "react-native";
import IconButton from "../IconButton/IconButton";
import { EXTERNAL_LOGIN_ICONS } from "./IconList";

const ExternalLogin = () => {
  return (
    <View
      width="100%"
      style={styles.container}
    >
      {EXTERNAL_LOGIN_ICONS.map(({ name, icon: Icon, onPress, fullWidth }) => {
        return (
          <IconButton
            key={`ExternalLogin-${name}`}
            onPress={onPress}
            fullWidth={fullWidth}
          >
            <Icon />
          </IconButton>
        );
      })}
    </View>
  );
};

export default ExternalLogin;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    rowGap: 12,
    columnGap: 8,
  },
});

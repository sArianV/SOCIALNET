import { memo, useMemo } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Input = ({
  value,
  onChange,
  placeholder,
  rightIcon,
  onPressRightIcon,
  ...rest
}) => {
  const RigthIcon = useMemo(
    () => (rightIcon ? rightIcon : <View />),
    [rightIcon]
  );

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={rightIcon ? [styles.input, styles.inputWithIcon] : styles.input}
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        numberOfLines={1}
        {...rest}
      />
      {rightIcon && (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={onPressRightIcon ? onPressRightIcon : () => {}}
        >
          <RigthIcon />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default memo(Input);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  inputWithIcon: {
    paddingRight: 60,
  },
  inputContainer: {
    width: "100%",
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
    right: 0,
    height: "100%",
    justifyContent: "center",
    marginRight: 18,
  },
});

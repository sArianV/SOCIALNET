import { memo } from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ value, onChange, placeholder, ...rest }) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChange}
      value={value}
      placeholder={placeholder}
      numberOfLines={1}
      {...rest}
    />
  );
};

export default memo(Input);

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

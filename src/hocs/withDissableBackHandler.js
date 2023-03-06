import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { BackHandler } from "react-native";

const withDissableBackHandler = (WrappedComponent) => (props) => {
  useFocusEffect(
    useCallback(() => {
      const backHandler = BackHandler.addEventListener("hardwareBackPress", ()=> true);
      return () => backHandler.remove();
    }, [])
  );

  return <WrappedComponent {...props} />;
};

export default withDissableBackHandler;

import { useEffect } from "react";
import { BackHandler } from "react-native";

const withDissableBackHandler = (WrappedComponent) => (props) => {
  useEffect(() => {
    const dissabledBackAction = () => true;

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      dissabledBackAction
    );

    return () => backHandler.remove();
  }, []);

  return <WrappedComponent {...props} />;
};

export default withDissableBackHandler;

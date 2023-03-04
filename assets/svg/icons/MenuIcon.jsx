import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MenuIcons = (props) => (
  <Svg
    width={22}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 1.429C0 .994.352.643.786.643h20.428a.787.787 0 0 1 0 1.571H.786A.786.786 0 0 1 0 1.43Zm0 7.857C0 8.854.352 8.5.786 8.5h20.428c.432 0 .786.354.786.786a.788.788 0 0 1-.786.785H.786A.787.787 0 0 1 0 9.286Zm21.214 8.643H.786a.787.787 0 0 1 0-1.572h20.428c.432 0 .786.354.786.786a.788.788 0 0 1-.786.786Z"
      fill="gray"
    />
  </Svg>
);

export default MenuIcons;

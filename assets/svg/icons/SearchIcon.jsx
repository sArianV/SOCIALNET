import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = (props) => (
  <Svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="m21.797 20.826-6.08-6.08c1.34-1.564 2.118-3.588 2.118-5.809A8.937 8.937 0 0 0 8.898 0C3.963 0 0 4.001 0 8.937c0 4.936 4.001 8.937 8.898 8.937a8.89 8.89 0 0 0 5.81-2.155l6.08 6.08c.171.131.347.2.523.2a.684.684 0 0 0 .486-.202.683.683 0 0 0 0-.971Zm-12.86-4.327a7.548 7.548 0 0 1-7.562-7.562 7.548 7.548 0 0 1 7.562-7.562A7.524 7.524 0 0 1 16.5 8.937a7.548 7.548 0 0 1-7.562 7.562Z"
      fill="gray"
    />
  </Svg>
);

export default SearchIcon;

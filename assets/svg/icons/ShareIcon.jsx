import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ShareIcon = (props) => (
  <Svg
    width={17}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10.094.088c-.36.16-.594.519-.594.913v2H6A5.5 5.5 0 0 0 .5 8.5a6.128 6.128 0 0 0 3.131 5.44c.079.044.166.06.254.06.34 0 .615-.278.615-.616 0-.234-.134-.45-.306-.61-.294-.277-.694-.824-.694-1.774a3 3 0 0 1 3-3h3v2c0 .393.231.753.594.912.362.16.781.094 1.075-.169l5-4.5c.21-.19.331-.459.331-.743a.995.995 0 0 0-.331-.744l-5-4.5a.993.993 0 0 0-1.075-.169Z"
      fill="gray"
      fillOpacity={0.7}
    />
  </Svg>
)

export default ShareIcon
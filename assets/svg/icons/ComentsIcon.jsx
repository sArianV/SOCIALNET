import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ComentsIcon = (props) => (
  <Svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M.75 2c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v9c0 1.103-.897 2-2 2h-4.334L6.55 15.9a.505.505 0 0 1-.525.047.492.492 0 0 1-.275-.447V13h-3c-1.103 0-2-.897-2-2V2ZM5.5 4.5a.748.748 0 0 0-.75.75c0 .416.334.75.75.75H12c.416 0 .75-.334.75-.75A.748.748 0 0 0 12 4.5H5.5Zm0 3a.748.748 0 0 0-.75.75c0 .416.334.75.75.75H9c.416 0 .75-.334.75-.75A.748.748 0 0 0 9 7.5H5.5Z"
      fill="gray"
      fillOpacity={0.7}
    />
  </Svg>
)

export default ComentsIcon

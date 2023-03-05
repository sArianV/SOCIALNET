import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LikeIcon = (props) => (
  <Svg
    width={16}
    height={15}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.794.03c.812.162 1.34.952 1.178 1.765l-.072.356a7.45 7.45 0 0 1-.9 2.35h4.5a1.5 1.5 0 0 1 .116 2.997 1.5 1.5 0 0 1-.831 2.475c.137.225.215.494.215.778 0 .666-.434 1.231-1.034 1.425a1.5 1.5 0 0 1-1.466 1.825H9.203a3.006 3.006 0 0 1-1.665-.503l-1.204-.803A3 3 0 0 1 5 10.198V6.723A3.01 3.01 0 0 1 6.125 4.38l.231-.184a4.49 4.49 0 0 0 1.6-2.631l.072-.357A1.501 1.501 0 0 1 9.794.03ZM1 5h2c.553 0 1 .447 1 1v7c0 .553-.447 1-1 1H1c-.553 0-1-.447-1-1v-7c0-.553.447-1 1-1Z"
      fill="gray"
      fillOpacity={0.7}
    />
  </Svg>
)

export default LikeIcon;
import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FacebookIcon = (props) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.875 12.073c0-6.667-5.373-12.073-12-12.073s-12 5.406-12 12.073C.875 18.098 5.263 23.093 11 24v-8.436H7.952v-3.491H11v-2.66c0-3.026 1.792-4.698 4.533-4.698 1.313 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.931-1.956 1.887v2.265h3.328l-.532 3.49H14.75V24c5.737-.905 10.125-5.9 10.125-11.927Z"
      fill="#3A5998"
    />
  </Svg>
)

export default FacebookIcon

import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DonateIcon = (props) => (
  <Svg
    width={18}
    height={13}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.583 0C1.573 0 .75.925.75 2.063v8.25c0 1.137.822 2.062 1.833 2.062h12.834c1.01 0 1.833-.925 1.833-2.063v-8.25C17.25.925 16.428 0 15.417 0H2.583Zm1.834 10.313H2.583V8.25c1.012 0 1.834.925 1.834 2.063ZM2.583 4.125V2.062h1.834c0 1.138-.822 2.063-1.834 2.063Zm11 6.188c0-1.138.822-2.063 1.834-2.063v2.063h-1.834Zm1.834-6.188c-1.011 0-1.834-.925-1.834-2.063h1.834v2.063ZM9 9.281c-1.518 0-2.75-1.385-2.75-3.094C6.25 4.48 7.482 3.095 9 3.095s2.75 1.385 2.75 3.094c0 1.708-1.232 3.093-2.75 3.093Z"
      fill="gray"
      fillOpacity={0.7}
    />
  </Svg>
)

export default DonateIcon

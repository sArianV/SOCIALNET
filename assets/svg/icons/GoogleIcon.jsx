import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const GoogleIcon = (props) => (
  <Svg
    width={25}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M23.838 12.276c0-.816-.066-1.636-.207-2.438H12.312v4.62h6.482a5.554 5.554 0 0 1-2.399 3.647v2.999h3.867c2.271-2.09 3.576-5.177 3.576-8.828Z"
        fill="#4285F4"
      />
      <Path
        d="M12.313 24c3.236 0 5.965-1.062 7.954-2.896L16.4 18.106c-1.076.731-2.465 1.146-4.083 1.146-3.13 0-5.785-2.112-6.738-4.952H1.59v3.091a12.002 12.002 0 0 0 10.724 6.61Z"
        fill="#34A853"
      />
      <Path
        d="M5.575 14.3a7.188 7.188 0 0 1 0-4.594V6.615H1.589a12.01 12.01 0 0 0 0 10.776l3.986-3.09Z"
        fill="#FBBC04"
      />
      <Path
        d="M12.313 4.75a6.521 6.521 0 0 1 4.603 1.799l3.426-3.426A11.533 11.533 0 0 0 12.312 0 11.998 11.998 0 0 0 1.59 6.615l3.986 3.09c.948-2.843 3.607-4.955 6.737-4.955Z"
        fill="#EA4335"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.125)" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default GoogleIcon
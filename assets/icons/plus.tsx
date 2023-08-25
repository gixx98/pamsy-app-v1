import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const PlusIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#4D9989"
      d="M19.75 12a.75.75 0 0 1-.75.75h-6.25V19a.75.75 0 0 1-1.5 0v-6.25H5a.75.75 0 0 1 0-1.5h6.25V5a.75.75 0 0 1 1.5 0v6.25H19a.75.75 0 0 1 .75.75Z"
    />
  </Svg>
)
export default PlusIcon

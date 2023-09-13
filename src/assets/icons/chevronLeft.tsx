import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const ChevronLeftIcon = (props: SvgProps, color:string) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    color={color}
    {...props}
  >
    <Path
      fill="#324742"
      d="M15 19.75a.744.744 0 0 1-.53-.22l-7-7a.75.75 0 0 1 0-1.061l7-7a.75.75 0 1 1 1.061 1.061L9.061 12l6.47 6.47A.75.75 0 0 1 15 19.75Z"
    />
  </Svg>
)
export default ChevronLeftIcon

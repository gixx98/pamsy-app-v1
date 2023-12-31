import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const HomeIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#324742"
      d="M18 21.75h-4.25V16.5c0-.965-.785-1.75-1.75-1.75s-1.75.785-1.75 1.75v5.25H6c-2.418 0-3.75-1.332-3.75-3.75v-6.35c0-2.123.586-2.716 1.542-3.509l6.12-5.131a3.244 3.244 0 0 1 4.176 0l6.12 5.131c.956.793 1.542 1.387 1.542 3.509V18c0 2.418-1.332 3.75-3.75 3.75Zm-2.75-1.5H18c1.577 0 2.25-.673 2.25-2.25v-6.35c0-1.526-.252-1.735-.999-2.355L13.125 4.16a1.75 1.75 0 0 0-2.25 0L4.749 9.295c-.747.62-.999.829-.999 2.355V18c0 1.577.673 2.25 2.25 2.25h2.75V16.5A3.254 3.254 0 0 1 12 13.25a3.254 3.254 0 0 1 3.25 3.25v3.75Z"
    />
  </Svg>
)
export default HomeIcon

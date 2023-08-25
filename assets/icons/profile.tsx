import * as React from "react"
import Svg, { SvgProps, Mask, Path } from "react-native-svg"
const ProfileIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Mask id="a" fill="#fff">
      <Path
        fillRule="evenodd"
        d="m8.442 19.992-.194-.015a1.87 1.87 0 0 1-.987-.398 2.606 2.606 0 0 1-.963-1.606 3.095 3.095 0 0 1-.047-.764c.017-.3.072-.593.16-.88.14-.456.352-.87.62-1.251.201-.288.43-.549.681-.785.236-.221.45-.466.65-.725.252-.326.48-.672.706-1.02.199-.308.394-.617.606-.915a5.79 5.79 0 0 1 .513-.638 2.52 2.52 0 0 1 .796-.591c.228-.102.465-.156.712-.162.278-.007.554.023.825.096.415.11.774.33 1.084.65.212.22.39.47.558.73.176.277.339.563.506.846.189.319.384.632.601.929.217.296.457.568.718.818.316.302.597.638.836 1.015.203.323.37.667.485 1.04.09.289.147.585.162.891.022.465-.052.91-.245 1.328-.18.387-.438.698-.764.945-.24.182-.497.32-.782.397-.1.028-.203.047-.306.058l-.042.007c-.013.008-.028.002-.043.004-.011.002-.024-.004-.035.004h-.265c-.01-.008-.022-.003-.034-.004H14.9a3.17 3.17 0 0 1-.664-.115c-.37-.094-.734-.218-1.102-.32-.299-.083-.6-.15-.906-.188a3.937 3.937 0 0 0-.637-.021c-.17.006-.339.034-.506.068-.33.068-.652.165-.976.26a9.33 9.33 0 0 1-1.033.267 2.344 2.344 0 0 1-.43.045c-.03 0-.059.005-.09.004-.038-.002-.075.005-.113-.004ZM14.973 4.007c.477.062.84.326 1.119.743.19.285.31.605.384.948.064.295.088.594.079.897a4.2 4.2 0 0 1-.358 1.586c-.154.347-.352.66-.604.93-.225.24-.48.433-.777.553a1.457 1.457 0 0 1-.645.11c-.384-.024-.711-.19-.985-.482a2.333 2.333 0 0 1-.504-.881 3.355 3.355 0 0 1-.15-.718 3.817 3.817 0 0 1-.02-.504c.011-.398.077-.784.195-1.16.126-.4.304-.768.547-1.098a2.55 2.55 0 0 1 .73-.684c.212-.128.436-.21.677-.24.007-.004.015-.002.022-.003h.023c.011-.001.023.005.033-.004h.156c.01.009.021.003.032.004h.023c.008 0 .016-.002.023.003ZM4.014 10.141c.008-.159.034-.314.072-.467.074-.298.195-.569.384-.801.21-.26.471-.427.784-.495.253-.054.503-.031.749.052.283.095.533.257.755.467.345.327.593.728.764 1.187a3.437 3.437 0 0 1 .213 1.123c.004.24-.018.474-.072.706-.073.309-.195.59-.39.83a1.357 1.357 0 0 1-.836.508 1.405 1.405 0 0 1-.721-.07 2.132 2.132 0 0 1-.828-.554 3.021 3.021 0 0 1-.563-.838 3.438 3.438 0 0 1-.287-.972l-.022-.18c-.006-.029-.004-.056-.01-.084-.003-.011-.001-.022-.002-.034-.002-.015.004-.03-.004-.045v-.22c.013-.02.006-.043.008-.065 0-.016-.003-.033.006-.048ZM7.36 6.596a3.62 3.62 0 0 1 .193-1.215c.101-.288.24-.551.435-.778.209-.244.457-.42.757-.502.3-.083.594-.06.883.055.255.1.478.26.675.46.315.32.541.706.702 1.139.102.275.173.56.213.853.023.166.036.334.039.503.003.212-.009.424-.041.634a2.912 2.912 0 0 1-.446 1.207 1.76 1.76 0 0 1-.56.543 1.332 1.332 0 0 1-.808.187 1.549 1.549 0 0 1-.717-.257 2.473 2.473 0 0 1-.72-.736 3.646 3.646 0 0 1-.49-1.16 4.192 4.192 0 0 1-.116-.933ZM20 10.398v.051a3.296 3.296 0 0 1-.29 1.201 3.22 3.22 0 0 1-.508.81c-.267.308-.578.55-.946.694-.221.087-.449.13-.684.115a1.352 1.352 0 0 1-.905-.417 1.804 1.804 0 0 1-.437-.77 2.583 2.583 0 0 1-.103-.817 3.376 3.376 0 0 1 .858-2.151c.274-.298.588-.528.959-.657.211-.074.427-.107.648-.088.338.028.633.167.88.422.223.229.363.512.448.83.047.176.074.355.08.539v.051a3.245 3.245 0 0 0 0 .187Z"
        clipRule="evenodd"
      />
    </Mask>
    <Path
      stroke="#324742"
      strokeWidth={2.087}
      d="m8.442 19.992-.194-.015a1.87 1.87 0 0 1-.987-.398 2.606 2.606 0 0 1-.963-1.606 3.095 3.095 0 0 1-.047-.764c.017-.3.072-.593.16-.88.14-.456.352-.87.62-1.251.201-.288.43-.549.681-.785.236-.221.45-.466.65-.725.252-.326.48-.672.706-1.02.199-.308.394-.617.606-.915a5.79 5.79 0 0 1 .513-.638 2.52 2.52 0 0 1 .796-.591c.228-.102.465-.156.712-.162.278-.007.554.023.825.096.415.11.774.33 1.084.65.212.22.39.47.558.73.176.277.339.563.506.846.189.319.384.632.601.929.217.296.457.568.718.818.316.302.597.638.836 1.015.203.323.37.667.485 1.04.09.289.147.585.162.891.022.465-.052.91-.245 1.328-.18.387-.438.698-.764.945-.24.182-.497.32-.782.397-.1.028-.203.047-.306.058l-.042.007c-.013.008-.028.002-.043.004-.011.002-.024-.004-.035.004h-.265c-.01-.008-.022-.003-.034-.004H14.9a3.17 3.17 0 0 1-.664-.115c-.37-.094-.734-.218-1.102-.32-.299-.083-.6-.15-.906-.188a3.937 3.937 0 0 0-.637-.021c-.17.006-.339.034-.506.068-.33.068-.652.165-.976.26a9.33 9.33 0 0 1-1.033.267 2.344 2.344 0 0 1-.43.045c-.03 0-.059.005-.09.004-.038-.002-.075.005-.113-.004ZM14.973 4.007c.477.062.84.326 1.119.743.19.285.31.605.384.948.064.295.088.594.079.897a4.2 4.2 0 0 1-.358 1.586c-.154.347-.352.66-.604.93-.225.24-.48.433-.777.553a1.457 1.457 0 0 1-.645.11c-.384-.024-.711-.19-.985-.482a2.333 2.333 0 0 1-.504-.881 3.355 3.355 0 0 1-.15-.718 3.817 3.817 0 0 1-.02-.504c.011-.398.077-.784.195-1.16.126-.4.304-.768.547-1.098a2.55 2.55 0 0 1 .73-.684c.212-.128.436-.21.677-.24.007-.004.015-.002.022-.003h.023c.011-.001.023.005.033-.004h.156c.01.009.021.003.032.004h.023c.008 0 .016-.002.023.003ZM4.014 10.141c.008-.159.034-.314.072-.467.074-.298.195-.569.384-.801.21-.26.471-.427.784-.495.253-.054.503-.031.749.052.283.095.533.257.755.467.345.327.593.728.764 1.187a3.437 3.437 0 0 1 .213 1.123c.004.24-.018.474-.072.706-.073.309-.195.59-.39.83a1.357 1.357 0 0 1-.836.508 1.405 1.405 0 0 1-.721-.07 2.132 2.132 0 0 1-.828-.554 3.021 3.021 0 0 1-.563-.838 3.438 3.438 0 0 1-.287-.972l-.022-.18c-.006-.029-.004-.056-.01-.084-.003-.011-.001-.022-.002-.034-.002-.015.004-.03-.004-.045v-.22c.013-.02.006-.043.008-.065 0-.016-.003-.033.006-.048ZM7.36 6.596a3.62 3.62 0 0 1 .193-1.215c.101-.288.24-.551.435-.778.209-.244.457-.42.757-.502.3-.083.594-.06.883.055.255.1.478.26.675.46.315.32.541.706.702 1.139.102.275.173.56.213.853.023.166.036.334.039.503.003.212-.009.424-.041.634a2.912 2.912 0 0 1-.446 1.207 1.76 1.76 0 0 1-.56.543 1.332 1.332 0 0 1-.808.187 1.549 1.549 0 0 1-.717-.257 2.473 2.473 0 0 1-.72-.736 3.646 3.646 0 0 1-.49-1.16 4.192 4.192 0 0 1-.116-.933ZM20 10.398v.051a3.296 3.296 0 0 1-.29 1.201 3.22 3.22 0 0 1-.508.81c-.267.308-.578.55-.946.694-.221.087-.449.13-.684.115a1.352 1.352 0 0 1-.905-.417 1.804 1.804 0 0 1-.437-.77 2.583 2.583 0 0 1-.103-.817 3.376 3.376 0 0 1 .858-2.151c.274-.298.588-.528.959-.657.211-.074.427-.107.648-.088.338.028.633.167.88.422.223.229.363.512.448.83.047.176.074.355.08.539v.051a3.245 3.245 0 0 0 0 .187Z"
      clipRule="evenodd"
      mask="url(#a)"
    />
  </Svg>
)
export default ProfileIcon

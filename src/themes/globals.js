import { createGlobalStyle } from "styled-components"

import { colors } from "./theme"
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
}
body {
  min-width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  background-color: ${colors.offwhite}
}
html {
  overflow: scroll-y;
}
`
export default GlobalStyle

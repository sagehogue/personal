import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
}
body {
  min-width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
}
html {
  overflow: scroll-y;
}
`
export default GlobalStyle

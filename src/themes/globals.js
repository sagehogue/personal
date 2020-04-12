import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
}
body {
  min-width: 100vw;
}
html {
  overflow: scroll-y;
}
`
export default GlobalStyle

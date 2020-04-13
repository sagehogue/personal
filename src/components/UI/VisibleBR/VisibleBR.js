import React from "react"
import styled from "styled-components"

const StyledBR = styled.br`
  display: block;
  width: 100%;
  content: "";
  //   margin: 0 auto;
  padding: 1px;
  background-color: rgba(71, 161, 239, 0.404);
`
const VisibleBR = () => <StyledBR></StyledBR>
export default VisibleBR

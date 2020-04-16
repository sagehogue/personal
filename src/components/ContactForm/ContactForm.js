import React from "react"
import styled from "styled-components"

import GlobalStyles from "../../themes/theme"
import Theme from "../../themes/theme"
import { colors } from "../../themes/theme"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
  margin: auto;
  background-color: ${colors.skyblue};
  & label,
  & input {
    margin: auto;
    max-width: 85vw;
  }
  & label {
    display: block;
    text-align: center;
  }
`

export default function ContactForm() {
  return (
    <>
      <Form>
        <label>
          Name:
          <input type="text" name="name" value="" />
        </label>
        <label>
          Subject:
          <input type="text" name="subject" value="" />
        </label>
        <label>
          <input type="textarea" name="message" value="" size={100} />
        </label>
        <label>
          Contact Info:
          <input type="text" name="contact" value="Email/other" />
        </label>
        <input type="submit" value="Send" />
      </Form>
      <GlobalStyles />
    </>
  )
}

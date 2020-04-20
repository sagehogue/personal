import React, { useState } from "react"
import styled from "styled-components"

import GlobalStyles from "../../themes/theme"
import Theme from "../../themes/theme"
import { colors } from "../../themes/theme"

const Wrapper = styled.main`
  background-color: ${colors.deepblue};
  height: 50vh;
  & h1,
  & h4 {
    text-align: center;
    color: #f7f7f7;
    padding: 1rem 0;
  }
  & h4 {
    font-weight: 300;
    margin-bottom: 2rem;
  }
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 60vh;
  margin: auto;
  max-width: 60vw;
  // border: solid thin black;
  border-radius: 3px;
  & label,
  & input {
    margin: auto;
    max-width: 85vw;
  }
  & label {
    display: block;
    color: #f7f7f7;
    font-weight: 600;
    font-size: 2rem;
  }
  & label:last-of-type {
    color: ${colors.deepblue};
  }
  & textarea,
  & input {
    min-width: 25vw;
    padding: 0.5rem;
    font-size: 1rem;
  }
  .submit {
    min-width: 5vw;
    max-width: 12.5vw;
  }
`

const Input = styled.input`
  font-size: 1.25rem;
  color: ${colors.offwhite};
  background-color: ${colors.deepblue};
  border: none;
`

export default function ContactForm() {
  const [name, changeName] = useState("")
  const [subject, changeSubject] = useState("")
  const [message, changeMessage] = useState("")
  const [contact, changeContact] = useState("Email/Other")
  return (
    <>
      <Wrapper>
        <h1>Contact</h1>
        <h4>Got a question? Here's my line.</h4>
        <Form>
          <label>
            Name*
            <br />
            <input
              type="text"
              name="name"
              value={name}
              onChange={e => changeName(e.target.value)}
              required
              autoFocus
            />
          </label>
          <label>
            Subject*
            <br />
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={e => changeSubject(e.target.value)}
              required
            />
          </label>
          <label>
            Message
            <br />
            <textarea
              type="textarea"
              name="message"
              value=""
              value={message}
              onChange={e => changeMessage(e.target.value)}
              required
              maxlength={1000}
            />
          </label>
          <label>
            Contact Info
            <br />
            <input
              type="text"
              name="contact"
              value="Email/other"
              value={contact}
              onChange={e => changeContact(e.target.value)}
            />
          </label>
          <Input className={"submit"} type="submit" value="Send" />
        </Form>
        <GlobalStyles />
      </Wrapper>
    </>
  )
}

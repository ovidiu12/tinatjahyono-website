import React, { useState } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Container } from "../components/grid"
import SEO from "../components/seo"

const Root = styled.div`
  background: ${props => props.theme.colors.yellow};
  padding-top: 150px;
  height: 100vh;
`

const Heading = styled.h1`
  color: ${props => props.theme.colors.black};
  margin-bottom: 0;
  text-align: center;
  font-weight: bold;
  font-size: 100px;
  font-family: "Bitter", sans-serif;
`

const SubHeading = styled.h3`
  font-size: 30px;
  font-weight: normal;
  text-align: center;
`

const Text = styled.p`
  font-size: 24px;
  font-weight: normal;
  font-family: "Playfair Display", sans-serif;
  text-align: center;
`

const Form = styled.form`
  width: 50%;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
`

const Btn = styled.button`
  background: transparent;
  border: 1px solid black;
  padding: 12px 20px;
  font-family: "Playfair Display", sans-serif;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  display: inline-block;
  &:hover {
    background: black;
    color: white;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const GetInTouch = styled(Btn)`
  display: inline-block;
`
const DownloadResume = styled(Btn)`
  display: inline-block;
  border: none;
  &:hover {
    background: none;
    color: black;
  }
`

const Input = styled.input`
  border: 1px solid black;
  padding: 10px;
  background: transparent;
  width: 100%;
  font-size: 18px;
  font-family: "Bitter", sans-serif;
`

const FormGroup = styled.div`
  margin-bottom: 20px;
  label {
    display: block;
    margin-bottom: 5px;
  }
  textarea {
    background: transparent;
    width: 100%;
    border: 1px solid black;
    padding: 10px;
    font-family: "Bitter", sans-serif;
    font-size: 18px;
  }
`

const Submit = styled(Input)`
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: black;
    color: white;
  }
`

const Error = styled.p`
  color: red;
  margin-top: 10px;
  margin-bottom: 10px;
`

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [displayForm, setDisplayForm] = useState(false)
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    if (name === "") {
      setErrors(prevState => ({ ...prevState, name: "Name is required." }))
    }
    if (email === "") {
      setErrors(prevState => ({ ...prevState, email: "Email is required." }))
    }
    if (email === "") {
      setErrors(prevState => ({
        ...prevState,
        message: "Message is required.",
      }))
    }
  }

  const handleChange = (e, name) => {
    switch (name) {
      case "email":
        setEmail(e.target.value)
        setErrors({ ...errors, email: "" })
        break
      case "name":
        setName(e.target.value)
        setErrors({ ...errors, name: "" })
        break
      case "message":
        setMessage(e.target.value)
        setErrors({ ...errors, message: "" })
        break
      default:
        return
    }
  }
  return (
    <Layout>
      <Root>
        <SEO title="Contact" />
        <Container>
          <Heading>hello.</Heading>
          <SubHeading>Let's work together.</SubHeading>
          <Text>
            I am available for freelance projects and full-time employment
            <br />
            opportunities in the Bay Area, CA.
          </Text>
          <ButtonsWrapper>
            <GetInTouch onClick={() => setDisplayForm(true)}>
              Get in touch
            </GetInTouch>
            <DownloadResume>+Download Resume</DownloadResume>
          </ButtonsWrapper>
          {displayForm && (
            <Form
              onSubmit={handleSubmit}
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              method="post"
              action="#"
            >
              <Input type="hidden" name="bot-field" />
              <Input type="hidden" name="form-name" value="contact" />
              <FormGroup className="field half first">
                <label htmlFor="name">Name</label>
                <Input
                  onChange={e => handleChange(e, "name")}
                  value={name}
                  type="text"
                  name="name"
                  id="name"
                />
                {errors.name !== "" && <Error>{errors.name}</Error>}
              </FormGroup>
              <FormGroup className="field half">
                <label htmlFor="email">Email</label>
                <Input
                  onChange={e => handleChange(e, "email")}
                  value={email}
                  type="email"
                  name="email"
                  id="email"
                />
                {errors.email !== "" && <Error>{errors.email}</Error>}
              </FormGroup>
              <FormGroup className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  onChange={e => handleChange(e, "message")}
                  value={message}
                  name="message"
                  id="message"
                  rows="6"
                />
                {errors.message !== "" && <Error>{errors.message}</Error>}
              </FormGroup>
              <Submit type="submit" value="Send Message" className="special" />
            </Form>
          )}
        </Container>
      </Root>
    </Layout>
  )
}

export default Contact

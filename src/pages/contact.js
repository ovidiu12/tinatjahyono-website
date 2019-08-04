import React, { useState } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Container } from "../components/grid"
import SEO from "../components/seo"
import Footer from "../components/footer"

const Root = styled.div`
  background: ${props => props.theme.colors.yellow};
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
`

const Heading = styled.h1`
  color: ${props => props.theme.colors.black};
  margin-bottom: 3px;
  text-align: center;
  font-weight: bold;
  font-size: 90px;
  font-family: "Bitter", sans-serif;

  ${props => props.theme.mq({ until: "sm" })`
    font-size: 80px;
  `}
  @media(max-width: 350px) {
    font-size: 64px;
  }
`

const SubHeading = styled.h3`
  font-size: 27px;
  font-weight: normal;
  text-align: center;
  margin-bottom: 19px;
  ${props => props.theme.mq({ until: "sm" })`
    font-size: 24px;
  `}
  @media(max-width: 350px) {
    font-size: 19.2px;
  }
`

const Text = styled.p`
  font-size: 22px;
  line-height: 32px;
  font-weight: normal;
  font-family: "Playfair Display", sans-serif;
  text-align: center;
  margin-bottom: 37px;
  ${props => props.theme.mq({ until: "sm" })`
    font-size: 19.2px;
  `}
  @media(max-width: 350px) {
    font-size: 15.36px;
  }
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
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  ${props => props.theme.mq({ until: "sm" })`
    flex-direction: column;
    justify-content: center;
  `}
`

const GetInTouch = styled(Btn)`
  display: inline-block;
  width: 165px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => props.theme.mq({ until: "sm" })`
    margin: 0 auto 10px auto;
  `}
  transition: all 0.05s ease-in;
  &:hover {
    border-width: 3px;
  }
`
const DownloadResume = styled(Btn)`
  display: inline-block;
  margin-left: 21px;
  border: none;
  &:hover {
    background: none;
    color: black;
  }
  ${props => props.theme.mq({ until: "sm" })`
    margin-left: 0;
  `}
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

const FooterRoot = styled.div`
  background: #ffe884;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`

const ContentWrapper = styled.div`
  margin-top: -90px;

  @media (min-width: 300px) and (max-width: 360px) {
    margin-top: -35px;
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

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

  const validateForm = () => {
    let isNameValid = false
    let isMessageValid = false
    let isEmailValid = false
    if (name === "") {
      setErrors(prevState => ({ ...prevState, name: "Name is required." }))
    } else {
      isNameValid = true
    }
    if (email === "") {
      setErrors(prevState => ({ ...prevState, email: "Email is required." }))
    } else {
      isEmailValid = true
    }
    if (message === "") {
      setErrors(prevState => ({
        ...prevState,
        message: "Message is required.",
      }))
    } else {
      isMessageValid = true
    }

    if (isEmailValid && isNameValid && isMessageValid) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    let isFormValid = validateForm()
    if (isFormValid) {
      const formData = {
        name,
        email,
        message,
      }
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      })
        .then(() => alert("Success!"))
        .catch(error => console.log(error))
    } else {
      console.log("err")
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
      <Root isFormDisplayed={displayForm}>
        <SEO title="Contact" />
        <Container>
          <ContentWrapper>
            <Heading>hello.</Heading>
            <SubHeading>Let's work together.</SubHeading>
            <Text>
              I am available for freelance projects and full-time employment
              <br />
              opportunities in the Bay Area, CA.
            </Text>
            <ButtonsWrapper>
              <GetInTouch>
                <a href="mailto:hello@tinatjahyono.com">Get in touch</a>
              </GetInTouch>
              <DownloadResume>
                <a
                  href="https://prismic-io.s3.amazonaws.com/ovidiu12%2Fc3ed3d58-6ab4-4e2d-a0ac-947fd77dd646_ttjahyono_resume_2019.pdf"
                  download
                >
                  +Download Resume
                </a>
              </DownloadResume>
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
                <Submit
                  type="submit"
                  value="Send Message"
                  className="special"
                />
              </Form>
            )}
          </ContentWrapper>
        </Container>
      </Root>
      <FooterRoot>
        <Footer style={{ background: "#ffe884" }} />
      </FooterRoot>
    </Layout>
  )
}

export default Contact

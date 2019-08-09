import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { Container } from "../components/grid"
import SEO from "../components/seo"
import Footer from "../components/footer"
import { useStaticQuery } from "gatsby"

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

  ${props => props.theme.mq({ until: "sm" })`
    height: 78vh;
    position: relative;
  `}
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
  font-weight: normal;
  text-align: center;
  margin-bottom: 37px;
  p {
    line-height: 32px;
    font-family: "Playfair Display", sans-serif;
    margin-bottom: 0;
  }
  ${props => props.theme.mq({ until: "sm" })`
    font-size: 19.2px;
  `}
  @media(max-width: 350px) {
    font-size: 15.36px;
  }
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

const FooterRoot = styled.div`
  background: #ffe884;

  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  svg {
    padding-top: 1px;
  }

  ${props => props.theme.mq({ until: "sm" })`
    position: relative;
  `}
`

const ContentWrapper = styled.div`
  margin-top: -90px;

  @media (min-width: 300px) and (max-width: 360px) {
    margin-top: 0;
  }
  ${props => props.theme.mq({ until: "sm" })`
    margin-top: -50px;
  `}
`

const Contact = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      prismicGeneralBodyContact {
        primary {
          main_title
          subtitle
          description {
            html
          }
          get_in_touch_button
          download_resume
        }
      }
    }
  `)
  return (
    <Layout>
      <Root>
        <SEO title="Contact" />
        <Container>
          <ContentWrapper>
            <Heading>
              {data.prismicGeneralBodyContact.primary.main_title}
            </Heading>
            <SubHeading>
              {data.prismicGeneralBodyContact.primary.subtitle}
            </SubHeading>
            <Text
              dangerouslySetInnerHTML={{
                __html: data.prismicGeneralBodyContact.primary.description.html,
              }}
            ></Text>
            <ButtonsWrapper>
              <GetInTouch>
                <a href="mailto:hello@tinatjahyono.com">
                  {data.prismicGeneralBodyContact.primary.get_in_touch_button}
                </a>
              </GetInTouch>
              <DownloadResume>
                <a
                  href="https://prismic-io.s3.amazonaws.com/tina-tjahyono-portfolio%2F6de25974-1565-410b-832f-eba5b847660a_ttjahyono_resume_2019.pdf"
                  download
                >
                  {data.prismicGeneralBodyContact.primary.download_resume}
                </a>
              </DownloadResume>
            </ButtonsWrapper>
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

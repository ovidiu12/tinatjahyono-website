import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"

const Root = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  background: ${props => props.theme.colors.lightGray};

  ${props => props.theme.mq({ until: "lg" })`
    flex-direction: column;
  `}
`

const Heading = styled.h1`
  color: ${props => props.theme.colors.black};
  margin-bottom: 60px;
  text-align: left;
  font-weight: bold;
  margin: 80px 0;
  font-size: 40px;
  text-transform: uppercase;

  ${props => props.theme.mq({ until: "lg" })`
    text-align: center;
    margin-bottom: 60px;
  `}
`

const Sidebar = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  ${props => props.theme.mq({ until: "lg" })`
    width: 90%;
  `}
`

const Content = styled.div`
  width: 50%;
  padding-left: 100px;
  background: #fff;
  ${props => props.theme.mq({ until: "lg" })`
    width: 90%;
    padding: 0 80px;
    border-radius: 5px;
    margin-bottom: 50px;
  `}
  ${props => props.theme.mq({ from: "md", until: "lg" })`
    padding: 0 40px;
  `}
  ${props => props.theme.mq({ until: "sm" })`
    padding: 0 40px;
  `}
`

const Contact = styled.div`
  text-align: right;
  padding-right: 100px;
  ${props => props.theme.mq({ until: "lg" })`
    padding-right: 0;
  `}
`

const Label = styled.p`
  font-size: 15px;
  font-family: "Bitter", sans-serif;
  color: ${props => props.theme.colors.black};
  margin-bottom: 0;
  ${props => props.theme.mq({ until: "lg" })`
    margin-top: 50px;
    text-align: center;
  `}
`

const Email = styled(Label)`
  margin-bottom: 50px;
  font-weight: 700;
  ${props => props.theme.mq({ until: "lg" })`
    margin-top: 0;
    text-align: center;
  `}
`

const Resume = styled.div`
  text-align: right;
  padding-right: 100px;
  cursor: pointer;

  ${props => props.theme.mq({ until: "lg" })`
    padding-right: 0;
    margin-bottom: 50px;
    text-align: center;
  `}
`

const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin-bottom: 80px;
  ${props => props.theme.mq({ until: "lg" })`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
  `}
`

const Text = styled.div`
  max-width: 70%;
  font-weight: 700;
  font-family: "Bitter", sans-serif;
  margin-bottom: 80px;
  line-height: 1.8;

  ${props => props.theme.mq({ until: "lg" })`
    max-width: 100%;
    text-align: center;
  `}
`

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      prismicGeneral {
        data {
          about_section_title
          about_image {
            localFile {
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          about_text {
            html
            text
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <Root>
        <Sidebar>
          <Contact>
            <Label>Email</Label>
            <Email>hello@tinatjahyono</Email>
          </Contact>
          <Resume>Resume</Resume>
        </Sidebar>
        <Content>
          <Heading>About</Heading>
          <ImgWrapper>
            <Img
              fluid={
                data.prismicGeneral.data.about_image.localFile.childImageSharp
                  .fluid
              }
            />
          </ImgWrapper>
          <Text
            dangerouslySetInnerHTML={{
              __html: data.prismicGeneral.data.about_text.html,
            }}
          />
        </Content>
      </Root>
    </Layout>
  )
}

export default About

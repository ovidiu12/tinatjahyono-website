import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Container } from "../components/grid"
import CustomHeader from "../components/custom-header"
import CustomFooter from "../components/custom-footer"

const Root = styled.div`
  display: flex;
  ${props => props.theme.mq({ until: "md" })`
    flex-direction: column;
  `}
`

const Heading = styled.h1`
  color: ${props => props.theme.colors.black};
  margin-bottom: 60px;
  text-align: left;
  font-weight: bold;
  margin: 80px 0;
  margin-top: 67px;
  font-size: 40px;
  text-transform: uppercase;

  ${props => props.theme.mq({ until: "lg" })`
    text-align: center;
    margin-bottom: 60px;
  `}
`

const Sidebar = styled.div`
  background: #e1dee9;
  width: 181vw;
  margin-left: calc(-50vw + 50%);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${props => props.theme.mq({ until: "md" })`
    width: 100%;
    margin-left: 0;
    justify-content: center;
  `}
`

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 102px;
  ${props => props.theme.mq({ until: "md" })`
    padding-right: 0;
  `}
`

const Content = styled.div`
  padding-left: 100px;
  background: #fff;
  ${props => props.theme.mq({ until: "lg" })`
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
  ${props => props.theme.mq({ until: "lg" })`
    padding-right: 0;
  `}
`

const Label = styled.p`
  font-size: 20px;
  font-family: "Bitter", sans-serif;
  color: ${props => props.theme.colors.black};
  margin-bottom: 0;
  text-align: left;
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
  ${props => props.theme.mq({ until: "md" })`
    margin-bottom: 0;
  `}
`

const Resume = styled(Label)`
  cursor: pointer;
  font-weight: 700;
  a {
    font-family: "Bitter", sans-serif;
  }
  ${props => props.theme.mq({ until: "md" })`
    margin-bottom: 50px;
  `}
`

const ImgWrapper = styled.div`
  width: 280px;
  height: 280px;
  margin-bottom: 77px;
  margin-left: auto;
  margin-right: auto;
  ${props => props.theme.mq({ until: "lg" })`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
  `}
`

const Text = styled.div`
  font-weight: 700;
  font-family: "Bitter", sans-serif;
  font-size: 20px;
  margin-bottom: 80px;
  line-height: 32px;

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
      <Container noPadding>
        <Root>
          <Sidebar>
            <SidebarContent>
              <Contact>
                <Label>Email</Label>
                <Email>hello@tinatjahyono</Email>
              </Contact>
              <Resume>
                <a
                  href="https://prismic-io.s3.amazonaws.com/ovidiu12%2Fc3ed3d58-6ab4-4e2d-a0ac-947fd77dd646_ttjahyono_resume_2019.pdf"
                  download
                >
                  Resume
                </a>
              </Resume>
            </SidebarContent>
          </Sidebar>
          <Content>
            <CustomHeader style={{ marginRight: "-25px" }} bgColor="white" />
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
            <CustomFooter />
          </Content>
        </Root>
      </Container>
    </Layout>
  )
}

export default About

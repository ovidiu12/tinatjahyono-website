import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Container } from "../components/grid"
import Layout from "../components/layout"
import ProjectCarousel from "../components/project-carousel"
import SEO from "../components/seo"
const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const RightSide = styled.div`
  margin-top: 50px;
  padding-left: 50px;
`
const LeftSide = styled.div`
  margin-top: 50px;
`
const ImagesWrapper = styled.div``

const Title = styled.h1``
const Separator = styled.div`
  width: 10%;
  height: 1px;
  background: ${props => props.theme.colors.black};
  margin-bottom: 30px;
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
const Project = props => {
  const images = [
    ...props.data.prismicProject.data.images,
    { image: props.data.prismicProject.data.main_image, isMainImage: true },
  ]
  return (
    <Layout>
      <SEO title={`${props.data.prismicProject.data.title}`} />
      <Container>
        <Root>
          <LeftSide>
            <ImagesWrapper>
              <ProjectCarousel
                images={images.map(image => ({
                  id: image.image.localFile.id,
                  isMainImage: image.isMainImage || false,
                  ...image.image.localFile.childImageSharp.fluid,
                }))}
                itemsPerRow={[2, 2]}
              />
            </ImagesWrapper>
          </LeftSide>
          <RightSide>
            {/* <div style={{ width: "100%", height: "500px" }}>
            <Img
              fluid={
                props.data.prismicProject.data.main_image.localFile
                  .childImageSharp.fluid
              }
            ></Img>
          </div> */}
            <Title>{props.data.prismicProject.data.title}</Title>
            <Separator />
            <Text
              dangerouslySetInnerHTML={{
                __html: props.data.prismicProject.data.description.html,
              }}
            />
          </RightSide>
        </Root>
      </Container>
    </Layout>
  )
}

Project.propTypes = {}

export default Project

export const pageQuery = graphql`
  query Project($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        title
        description {
          html
        }
        main_image {
          localFile {
            id
            childImageSharp {
              fluid {
                originalImg
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        images {
          image {
            localFile {
              id
              childImageSharp {
                fluid(quality: 100) {
                  originalImg
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

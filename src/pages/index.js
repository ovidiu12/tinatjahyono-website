import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Gallery from "../components/gallery"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "../components/grid"
import styled from "styled-components"
import Logos from "../components/logos"

const Separator = styled.div`
  width: 100%;
  height: 75px;
`

const Separator2 = styled.div`
  height: 100px;
  width: 100%;
`

const Heading = styled.h1`
  color: ${props => props.theme.colors.black};
  margin-bottom: 54px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PhotosQuery {
      allPrismicProject(sort: { fields: [data___order], order: ASC }) {
        edges {
          node {
            uid
            id
            data {
              project_title {
                html
              }
              hover_description {
                html
              }
              main_image {
                localFile {
                  childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid
                      originalImg
                    }
                  }
                }
              }
              images {
                img_description {
                  html
                }
                web_link {
                  url
                }
                image {
                  localFile {
                    childImageSharp {
                      fluid(quality: 100) {
                        ...GatsbyImageSharpFluid
                        originalImg
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  useEffect(() => {
    // direct browser to top right away
    if (window.location.hash) {
      window.scrollTo({
        top: 900,
        behavior: "smooth",
      })
    }
  }, [])
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Separator />
      <Container>
        <div id="work">
          <Heading>WORK</Heading>
        </div>
      </Container>
      <Gallery
        images={data.allPrismicProject.edges.map(({ node }) => ({
          id: node.id,
          uid: node.uid,
          ...node.data.main_image.localFile.childImageSharp.fluid,
          images: node.data.images,
          caption: `${node.data.project_title.html}`,
          hover_description: node.data.hover_description.html || null,
        }))}
        itemsPerRow={[1, 2]}
      />
      <Separator2 />
      <Logos />
      <Separator2 />
    </Layout>
  )
}

export default IndexPage

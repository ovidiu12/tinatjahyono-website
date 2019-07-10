import React from "react"

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
  height: ${props => props.theme.utils.em("80px")};
`

const Heading = styled.h1`
  color: ${props => props.theme.colors.black};
  margin-bottom: 60px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query PhotosQuery {
      allPrismicProject {
        edges {
          node {
            id
            data {
              title
              short_description
              main_image {
                localFile {
                  childImageSharp {
                    fluid {
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
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Separator />
      <Container>
        <Heading>WORK</Heading>
        <Gallery
          images={data.allPrismicProject.edges.map(({ node }) => ({
            id: node.id,
            ...node.data.main_image.localFile.childImageSharp.fluid,
            caption: `${node.data.title}`,
            short_description: node.data.short_description,
          }))}
          itemsPerRow={[1, 2]}
        />
        <Logos />
      </Container>
      <Separator />
    </Layout>
  )
}

export default IndexPage

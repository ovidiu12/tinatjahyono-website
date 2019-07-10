import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Root = styled.div``

const LogoWrapper = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: center;
`

const ImgWrapper = styled.div`
  width: 150px;
  pointer-events: none;
`

const Logos = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "logos" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }
  return (
    <Root>
      <Slider {...settings}>
        {data.allFile.edges.map(node => {
          return (
            <LogoWrapper>
              <ImgWrapper>
                <Img fluid={node.node.childImageSharp.fluid} />
              </ImgWrapper>
            </LogoWrapper>
          )
        })}
      </Slider>
    </Root>
  )
}

export default Logos

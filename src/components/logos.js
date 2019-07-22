import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import PrevIcon from "../images/left-arrow.png"
import NextIcon from "../images/right-arrow.png"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Container } from "./grid"

const Root = styled.div`
  margin: 0 auto;
`

const LogoWrapper = styled.div`
  display: flex !important;
  align-items: center !important;
  justify-content: center;
  &:hover {
    img {
      filter: grayscale(0%);
    }
  }
`

const ImgWrapper = styled.div`
  width: 150px;
  pointer-events: none;

  img {
    filter: grayscale(100%);
    transition: all 0.2s ease-in;
  }
`

const PrevArrow = props => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img src={PrevIcon} />
    </div>
  )
}

const NextArrow = props => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <img src={NextIcon} />
    </div>
  )
}

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
    autoplay: false,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <Container>
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
    </Container>
  )
}

export default Logos

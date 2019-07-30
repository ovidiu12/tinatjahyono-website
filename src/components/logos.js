import React, { useState } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import PrevIcon from "../images/left-arrow.png"
import NextIcon from "../images/right-arrow.png"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { Container } from "./grid"
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    background: "rgba(0,0,0,0.8)",
  },
}

Modal.setAppElement("#___gatsby")

const ModalImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  & > :first-child {
    width: 100%;
    height: 100%;
  }
`

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
  pointer-events: none;

  img {
    filter: grayscale(100%);
    transition: all 0.2s ease-in;
  }
`

const PrevArrow = props => {
  const { className, onClick } = props
  return (
    <div
      style={{ display: props.currentSlide == 0 ? "none" : "inherit" }}
      className={className}
      onClick={onClick}
    >
      <img src={PrevIcon} />
    </div>
  )
}

const NextArrow = props => {
  const { className, onClick } = props
  return (
    <div
      style={{
        display:
          props.currentSlide == props.slideCount - 1 ? "none" : "inherit",
      }}
      className={className}
      onClick={onClick}
    >
      <img src={NextIcon} />
    </div>
  )
}

const Logos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [displayImg, setDisplayImg] = useState(null)
  const data = useStaticQuery(graphql`
    query LogoQuery {
      smallQuery: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "logos" }
        }
      ) {
        nodes {
          name
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
      largeQuery: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "logos/large" }
        }
      ) {
        nodes {
          name
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const settings = {
    dots: false,
    infinite: false,
    autoplay: false,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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

  const openModal = name => {
    setDisplayImg(name)
    setModalIsOpen(!modalIsOpen)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <Container>
        <Root>
          <Slider {...settings}>
            {data.smallQuery.nodes.map(node => {
              return (
                <LogoWrapper onClick={() => openModal(node.name)}>
                  <ImgWrapper>
                    <Img fixed={node.childImageSharp.fixed} />
                  </ImgWrapper>
                </LogoWrapper>
              )
            })}
          </Slider>
        </Root>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        {displayImg !== null && (
          <ModalImgWrapper>
            <Img
              fluid={
                data.largeQuery.nodes.find(item =>
                  displayImg.includes(item.name)
                ).childImageSharp.fluid
              }
            />
          </ModalImgWrapper>
        )}
      </Modal>
    </>
  )
}

export default Logos

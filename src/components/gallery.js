import Img from "gatsby-image"
import React, { useState, useEffect } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Box, Link } from "rebass"
import { chunk, sum } from "../utils/array"
import carouselFormatters from "../utils/carouselFormatters"
import styled from "styled-components"

const Title = styled.p`
  color: ${props => props.theme.colors.black};
  text-align: center;
  margin-bottom: 0;
  font-size: 24px;
  font-weight: 700;
  max-width: 80%;
  margin: 0 auto 1px auto;
  font-family: "Bitter", sans-serif;
  p {
    margin-bottom: 0;
  }
  p {
    &:last-of-type {
      margin-top: -7px;
    }
  }

  ${props => props.theme.mq({ until: "sm" })`
    font-size: 20px;
    max-width: 100%;
  `}
`

const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  text-align: center;
  z-index: 99;
  pointer-events: none;
  padding: 0 10px;
`

const Description = styled.p`
  color: ${props => props.theme.colors.black};
  margin-bottom: 0;
  font-size: 16px;
  line-height: 24px;
  font-family: "Playfair Display", sans-serif;
  max-width: 80%;
  margin: 0 auto;
  p {
    margin-bottom: 0;
  }
`

const CustomViewRoot = styled.div`
  display: flex;
  justify-content: center;
`

const CustomView = innerProps => {
  return (
    <div>
      <CustomViewRoot>
        <img src={innerProps.data.source} />
      </CustomViewRoot>
    </div>
  )
}

const customStyles = {
  footer: (base, state) => {
    const opacity = state.interactionIsIdle ? 1 : 1
    const padding = state.interactionIsIdle ? "40px" : "40px"
    const transition = "all 0.4s"

    return { ...base, opacity, transition, padding, fontSize: "18px" }
  },
}

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints = [1] }) => {
  const aspectRatios = images.map(image => image.aspectRatio)
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [displayText, setDisplayText] = useState(null)
  const [singleProjectImages, setSingleProjectImages] = useState([])
  const closeModal = () => setModalIsOpen(false)
  const openModal = (index, image) => {
    setSingleProjectImages(image.images)
    setModalIsOpen(true)
  }

  return (
    <>
      <Box>
        {images.map((image, i) => {
          return (
            <Link
              key={image.id}
              href={image.originalImg}
              onMouseEnter={() => setDisplayText(i)}
              onMouseLeave={() => setDisplayText(null)}
              onTouchStart={() => setDisplayText(i)}
              onTouchEnd={() => setDisplayText(null)}
              onClick={e => {
                e.preventDefault()
                openModal(i, image)
              }}
              style={{ position: "relative" }}
            >
              <Box
                as={Img}
                fluid={image}
                title={image.caption}
                width={"50%"}
                css={`
                  display: inline-block;
                  vertical-align: middle;
                  max-height: 385px;
                  height: 385px;
                  position: relative;
                  :hover {
                    :before {
                      opacity: ${displayText === i ? "0.95" : "0"};
                    }
                    :after {
                      display: block;
                    }
                  }
                  :after {
                    content: "";
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    word-wrap: break-word;
                    color: #000;
                    position: absolute;
                    display: none;
                    z-index: 9;
                  }
                  :before {
                    background: #e1dee9;
                    opacity: 0;
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    transition: opacity 0.3s;
                    z-index: 9;
                  }
                  @media (max-width: 766px) {
                    width: 100%;
                    margin: 10px auto;
                  }
                `}
              />
              {displayText === i && (
                <TextWrapper>
                  <Title
                    dangerouslySetInnerHTML={{
                      __html: image.caption,
                    }}
                  />
                  <Description
                    dangerouslySetInnerHTML={{
                      __html: image.hover_description,
                    }}
                  />
                </TextWrapper>
              )}
            </Link>
          )
        })}
        {ModalGateway && (
          <ModalGateway>
            {modalIsOpen && (
              <Modal onClose={closeModal}>
                <Carousel
                  styles={customStyles}
                  views={singleProjectImages.map(image => ({
                    source:
                      image.image.localFile.childImageSharp.fluid.originalImg,
                    caption: image.image_description,
                    link: image.web_link,
                  }))}
                  formatters={carouselFormatters}
                  components={{
                    View: CustomView,
                    FooterCaption: props => {
                      return (
                        <div>
                          <span>{props.currentView.caption}</span>
                          {props.currentView.link !== null && (
                            <div>
                              <a
                                style={{ color: "rgba(255,255,255,0.5)" }}
                                href={props.currentView.link.url}
                              >
                                {props.currentView.link.url}
                              </a>
                            </div>
                          )}
                        </div>
                      )
                    },
                  }}
                />
              </Modal>
            )}
          </ModalGateway>
        )}
      </Box>
    </>
  )
}

export default Gallery

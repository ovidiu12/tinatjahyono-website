import Img from "gatsby-image"
import React, { useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Box, Link } from "rebass"
import { chunk, sum } from "../utils/array"
import carouselFormatters from "../utils/carouselFormatters"
import styled from "styled-components"
import Button from "./button"

const Title = styled.p`
  color: ${props => props.theme.colors.black};
  text-align: center;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 700;
  font-family: "Bitter", sans-serif;
`

const TextWrapper = styled.div`
  position: absolute;
  top: -10px;
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
  font-family: "Playfair Display", sans-serif;
`

const ModalFooter = styled.div`
  margin: 0 auto;
  margin-top: 20px;
`

const ViewProject = styled(Button)`
  border: none;
  background: ${props => props.theme.colors.yellow};
  color: black;
  font-weight: 700;
  font-size: 18px;
  padding: 15px 30px;
  font-family: "Bitter", sans-serif;
  &:hover {
    background: ${props => props.theme.colors.yellow};
    color: black;
  }
`

const Gallery = ({
  images,

  itemsPerRow: itemsPerRowByBreakpoints = [1],
}) => {
  const aspectRatios = images.map(image => image.aspectRatio)
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState(null)
  const [projectId, setProjectId] = useState(null)
  const closeModal = () => setModalIsOpen(false)
  const openModal = (imageIndex, projectId) => {
    setModalCurrentIndex(imageIndex)
    setProjectId(projectId)
    setModalIsOpen(true)
  }
  return (
    <Box style={{ marginBottom: "60px" }}>
      {images.map((image, i) => {
        return (
          <Link
            key={image.id}
            href={image.originalImg}
            onMouseEnter={() => setDisplayText(i)}
            onMouseLeave={() => setDisplayText(null)}
            onClick={e => {
              e.preventDefault()
              openModal(i, image.uid)
            }}
            style={{ position: "relative" }}
          >
            <Box
              as={Img}
              fluid={image}
              title={image.caption}
              width={rowAspectRatioSumsByBreakpoints.map(
                (rowAspectRatioSums, j) => {
                  const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j])
                  const rowAspectRatioSum = rowAspectRatioSums[rowIndex]

                  return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`
                }
              )}
              css={`
                display: inline-block;
                vertical-align: middle;
                position: relative;
                :hover {
                  :before {
                    opacity: 0.95;
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
              `}
            />
            {displayText === i && (
              <TextWrapper>
                <Title>{image.caption}</Title>
                <Description>{image.short_description}</Description>
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
                views={images.map(({ originalImg, caption }) => ({
                  source: originalImg,
                  caption,
                }))}
                currentIndex={modalCurrentIndex}
                formatters={carouselFormatters}
                components={{
                  FooterCount: () => null,
                  Footer: () => (
                    <ModalFooter>
                      <Link href={`/project/${projectId}`}>
                        <ViewProject>View Project</ViewProject>
                      </Link>
                    </ModalFooter>
                  ),
                }}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </Box>
  )
}

export default Gallery

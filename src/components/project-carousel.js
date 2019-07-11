import Img from "gatsby-image"
import React, { useState } from "react"
import Carousel, { Modal, ModalGateway } from "react-images"
import { Box, Link } from "rebass"
import { chunk, sum } from "../utils/array"
import carouselFormatters from "../utils/carouselFormatters"

const Gallery = ({ images, itemsPerRow: itemsPerRowByBreakpoints = [1] }) => {
  const aspectRatios = images.map(image => image.aspectRatio)
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)
  const closeModal = () => setModalIsOpen(false)
  const openModal = imageIndex => {
    setModalCurrentIndex(imageIndex)
    setModalIsOpen(true)
  }
  return (
    <>
      {images.map((image, i) => {
        if (image.isMainImage) {
          return (
            <Link
              href={images[i].originalImg}
              onClick={e => {
                e.preventDefault()
                openModal(i)
              }}
              style={{ position: "relative", width: "100%" }}
            >
              <Box
                as={Img}
                fluid={images[i]}
                width={[1]}
                css={`
                  :hover {
                    :before {
                      opacity: 0.95;
                    }
                  }
                  :before {
                    background: rgba(0, 0, 0, 0.1);
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
                  margin-bottom: 10px;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                `}
              />
            </Link>
          )
        }
      })}

      <Box
        css={`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 10px;
        `}
        style={{ marginBottom: "60px" }}
      >
        {images.map((image, i) => {
          if (!image.isMainImage)
            return (
              <Link
                key={image.id}
                href={image.originalImg}
                onClick={e => {
                  e.preventDefault()
                  openModal(i, image.uid)
                }}
                style={{ position: "relative", width: "100%" }}
              >
                <Box
                  as={Img}
                  fluid={image}
                  title={image.caption}
                  width={rowAspectRatioSumsByBreakpoints.map(
                    (rowAspectRatioSums, j) => {
                      const rowIndex = Math.floor(
                        i / itemsPerRowByBreakpoints[j]
                      )
                      const rowAspectRatioSum = rowAspectRatioSums[rowIndex]

                      return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`
                    }
                  )}
                  css={`
                    width: 100% !important;
                    max-height: 100px !important;
                    display: inline-block;
                    vertical-align: middle;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                    position: relative;
                    :hover {
                      :before {
                        opacity: 0.95;
                      }
                    }
                    :before {
                      background: rgba(0, 0, 0, 0.1);
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
              </Link>
            )
        })}
        {ModalGateway && (
          <ModalGateway>
            {modalIsOpen && (
              <Modal onClose={closeModal}>
                <Carousel
                  views={images.map(({ originalImg }) => ({
                    source: originalImg,
                  }))}
                  currentIndex={modalCurrentIndex}
                  formatters={carouselFormatters}
                  components={{
                    FooterCount: () => null,
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

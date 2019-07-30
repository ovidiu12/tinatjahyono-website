import React from "react"
import styled from "styled-components"
import { Container } from "../components/grid"
import DownArrow from "../images/down-arrow.png"

const Root = styled.div`
  height: 91vh;
  background: ${props => props.theme.colors.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`

const TextWrapper = styled.div``

const Heading = styled.h1`
  font-size: 80px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.utils.em("3px")};
  margin-top: -115px;
  ${props => props.theme.mq({ until: "sm" })`
    font-size: 46px;
  `}
`

const SubHeading = styled.h3`
  color: ${props => props.theme.colors.black};
  margin-bottom: 0;
  font-weight: 400;
  font-size: 32px;
  ${props => props.theme.mq({ until: "sm" })`
    font-size: 24px;
  `}
`

const ArrowWrapper = styled.div`
  width: ${props => props.theme.utils.em("40px")};
  height: auto;
  position: absolute;
  bottom: 33px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`

const Hero = () => {
  return (
    <Root>
      <Container>
        <TextWrapper>
          <Heading>Tina Tjahyono</Heading>
          <SubHeading>Graphic Designer</SubHeading>
        </TextWrapper>
        <ArrowWrapper
          onClick={() => window.scrollTo({ top: 700, behavior: "smooth" })}
        >
          <img src={DownArrow} alt="Down arrow" />
        </ArrowWrapper>
      </Container>
    </Root>
  )
}

export default Hero

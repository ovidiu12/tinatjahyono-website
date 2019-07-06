import React from "react"
import styled from "styled-components"
import { Container } from "../components/grid"
import DownArrow from "../images/down-arrow.svg"

const Root = styled.div`
  height: ${props => props.theme.utils.em("700px")};
  background: ${props => props.theme.colors.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`

const Heading = styled.h1`
  font-size: ${props => props.theme.utils.em("55px")};
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  margin-bottom: ${props => props.theme.utils.em("3px")};
  margin-top: -100px;
`

const SubHeading = styled.h3`
  color: ${props => props.theme.colors.black};
`

const ArrowWrapper = styled.div`
  width: ${props => props.theme.utils.em("40px")};
  height: auto;
  position: absolute;
  bottom: ${props => props.theme.utils.em("30px")};
  left: 50%;
  transform: translateX(-50%);
`

const Arrow = styled.img``

const Hero = () => {
  return (
    <Root>
      <Container>
        <Heading>Tina Tjahyono</Heading>
        <SubHeading>Graphic Designer</SubHeading>
        <ArrowWrapper>
          <Arrow src={DownArrow} />
        </ArrowWrapper>
      </Container>
    </Root>
  )
}

export default Hero

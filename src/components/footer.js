import React from "react"
import styled from "styled-components"
import { Container } from "./grid"

const Root = styled.div`
  background: ${props => props.theme.colors.yellow};
`

const ContentWrapper = styled.div`
  padding: ${props => props.theme.utils.em("20px")};
  display: flex;
  align-items: center;
`

const Copyright = styled.p`
  color: ${props => props.theme.colors.black}
  text-align: center;
  font-size: ${props => props.theme.utils.em("14px")};
  margin-bottom:0;
`

const Footer = () => {
  return (
    <Root>
      <Container>
        <ContentWrapper>
          <Copyright>©2019 Tina Tjahyono</Copyright>
        </ContentWrapper>
      </Container>
    </Root>
  )
}

export default Footer

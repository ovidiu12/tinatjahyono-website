import React from "react"
import styled from "styled-components"
import { Container } from "./grid"
import LinkedInIcon from "../images/linkedin-icon.svg"
import MailIcon from "../images/mail-icon.svg"

const Root = styled.div`
  background: ${props => props.theme.colors.yellow};
`

const ContentWrapper = styled.div`
  padding: ${props => props.theme.utils.em("20px")};
  display: flex;
  align-items: flex-end;
`

const Copyright = styled.p`
  color: ${props => props.theme.colors.mediumGray};
  text-align: center;
  font-size: ${props => props.theme.utils.em("14px")};
  margin-bottom: 0;
`

const Socials = styled.div`
  margin-left: auto;
  display: flex;
`

const Icon = styled.div`
  padding: 0 7px;
  &:last-of-type {
    padding-right: 0;
  }
  svg {
    width: 16px;
    height: 16px;
    path {
      fill: #6d6e71;
    }
  }
`

const Footer = () => {
  return (
    <Root>
      <Container>
        <ContentWrapper>
          <Copyright>©2019 Tina Tjahyono</Copyright>
          <Socials>
            <Icon>
              <a href="/contact">
                <MailIcon />
              </a>
            </Icon>
            <Icon>
              <a href="https://www.linkedin.com/in/ttjahyono/">
                <LinkedInIcon />
              </a>
            </Icon>
          </Socials>
        </ContentWrapper>
      </Container>
    </Root>
  )
}

export default Footer

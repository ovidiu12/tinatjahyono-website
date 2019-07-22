import React from "react"
import styled from "styled-components"
import { Container } from "./grid"
import LinkedInIcon from "../svgs/linkedin-icon.svg"
import MailIcon from "../svgs/mail-icon.svg"

const Root = styled.div`
  background: #fff;
  border-top: 1px solid #8c8c8c;
  height: 80px;
  display: flex;
  align-items: center;
`

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

const Copyright = styled.p`
  color: #6d6e71;
  text-align: center;
  font-size: 14px;
  margin-bottom: 0;
`

const Socials = styled.div`
  margin-left: auto;
  display: flex;
`

const Icon = styled.div`
  padding: 0 7px;
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
  }
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

const CustomFooter = () => {
  return (
    <Root>
      <ContentWrapper>
        <Copyright>© 2019 Tina Tjahyono</Copyright>
        <Socials>
          <Icon>
            <a href="mailto:hello@tinatjahyono.com">
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
    </Root>
  )
}

export default CustomFooter

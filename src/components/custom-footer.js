import React from "react"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"
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
  const data = useStaticQuery(graphql`
    query CustomFooterQuery {
      prismicGeneral {
        data {
          linkedin_link
          copyright
        }
      }
    }
  `)
  return (
    <Root>
      <ContentWrapper>
        <Copyright>{data.prismicGeneral.data.copyright}</Copyright>
        <Socials>
          <Icon>
            <a href="mailto:tst170@gmail.com">
              <MailIcon style={{ marginTop: "3.7px" }} />
            </a>
          </Icon>
          <Icon>
            <a href={data.prismicGeneral.data.linkedin_link}>
              <LinkedInIcon />
            </a>
          </Icon>
        </Socials>
      </ContentWrapper>
    </Root>
  )
}

export default CustomFooter

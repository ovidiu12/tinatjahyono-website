import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Container } from "./grid"

const Root = styled.header`
  background: ${props => props.theme.colors.yellow};
`

const Navigation = styled.ul`
  margin: 0;
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  width: 50%;
  ${props => props.theme.mq({ until: "sm" })`
    width: 100%;
    margin: 0;
    justify-content: space-between;
  `}
`
const NavigationItem = styled.li`
  min-width: 90px;
  height: 90px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  position: relative;
  text-transform: uppercase;
  transition: font-weight 0.3s ease-in;
  a {
    letter-spacing: 0.05px;
    font-weight: ${props => (props.isActive ? 700 : "normal")};
    font-size: 14px;
    font-family: "Bitter", sans-serif;
    &:hover {
      font-weight: 700;
      cursor: pointer;
      letter-spacing: 0;
    }
  }
  ${props => props.theme.mq({ until: "sm" })`
    min-width: auto;
    a{
      font-size: 13px;
    }
  `}
`

const Header = ({ siteTitle }) => {
  const [activeNav, setActiveNav] = useState({
    home: false,
    work: false,
    about: false,
    contact: false,
  })
  useEffect(() => {
    if (window) {
      let currentUrl = window.location.href.split(window.location.origin)[1]
      if (currentUrl === "/#work") {
        setActiveNav({ ...activeNav, work: true })
      } else if (currentUrl === "/about") {
        setActiveNav({ ...activeNav, about: true })
      } else if (currentUrl === "/contact") {
        setActiveNav({ ...activeNav, contact: true })
      } else {
        setActiveNav({ ...activeNav, home: true })
      }
    }
  }, [])
  return (
    <Root>
      <Container>
        <Navigation>
          <NavigationItem isActive={activeNav.home}>
            <Link title="home" to="/">
              Home
            </Link>
          </NavigationItem>

          <NavigationItem
            isActive={activeNav.work}
            onClick={() =>
              window &&
              window.scrollTo({
                top: 900,
                behavior: "smooth",
              })
            }
          >
            <a title="work" href="#work">
              Work
            </a>
          </NavigationItem>

          <NavigationItem isActive={activeNav.about}>
            <Link title="about" to="/about">
              About
            </Link>
          </NavigationItem>

          <NavigationItem isActive={activeNav.contact}>
            <Link title="contact" to="/contact">
              Contact
            </Link>
          </NavigationItem>
        </Navigation>
      </Container>
    </Root>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

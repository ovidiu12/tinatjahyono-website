import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
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
`
const NavigationItem = styled.li`
  min-width: 90px;
  height: 75px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  position: relative;
  text-transform: uppercase;
  font-size: ${props => props.theme.utils.em("14px")};
  font-family: "Bitter", sans-serif;
  transition: all 0.3s ease-in;
  &:hover {
    font-weight: 700;
  }
`

const Header = ({ siteTitle }) => (
  <Root>
    <Container>
      <Navigation>
        <Link to="/">
          <NavigationItem>Home</NavigationItem>
        </Link>
        <Link to="/work">
          <NavigationItem>Work</NavigationItem>
        </Link>
        <Link to="/about">
          <NavigationItem>About</NavigationItem>
        </Link>
        <Link to="/contact">
          <NavigationItem>Contact</NavigationItem>
        </Link>
      </Navigation>
    </Container>
  </Root>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

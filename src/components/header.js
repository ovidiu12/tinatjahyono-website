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
  a:last-of-type {
    li {
      padding-right: 0;
      &:after {
        left: ${props => props.theme.utils.em("22px")};
        transform: translateX(-${props => props.theme.utils.em("11px")});
      }
    }
  }
`
const NavigationItem = styled.li`
  padding: ${props => props.theme.utils.em("30px")}
    ${props => props.theme.utils.em("22px")};
  margin-bottom: 0;
  position: relative;
  text-transform: uppercase;
  font-size: ${props => props.theme.utils.em("14px")};

  &:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: 10px;
    left: 0;
    height: 1px;
    background: ${props => props.theme.colors.black};
    transition: all 0.2s ease-in;
  }
  &:hover {
    &:after {
      width: 100%;
    }
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
        <Link to="/content">
          <NavigationItem>Content</NavigationItem>
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

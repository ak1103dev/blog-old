import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"

const Container = styled.header`
  background: rgb(70, 89, 39);
  margin-bottom: 1.45rem;
  padding: 10px;
  a {
    color: white;
  }
`
const ListDropDown = styled.li`
  display: inline-block;
  margin-right: 1rem;
`
const LinkToggle = styled.a`
  text-decoration: underline;
  cursor: pointer;
  &::after {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
  }
`
const DropDownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 10px;
  >a {
    color: #444;
  }
`

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = ({ siteTitle }) => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Container>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>AK1103DEV</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right`, display: 'flex' }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListDropDown>
          <LinkToggle onClick={() => setShowMenu(!showMenu)}>Donation</LinkToggle>
          {
            showMenu &&
            <DropDownMenu>
              <Link to="/donation/">Donation</Link>
              <Link to="/confirm-payment/">Confirm Payment</Link>
            </DropDownMenu>
          }
        </ListDropDown>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

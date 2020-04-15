import React, { Component } from "react"
import { Link } from "gatsby"

import NavButton from "./NavButton/NavButton"
import NavTray from "./NavTray/NavTray"
import TrayItem from "./NavTray/TrayItem/TrayItem"
import Backdrop from "../Backdrop/Backdrop"

import { FaWrench } from "react-icons/fa"
import { FaEnvelope } from "react-icons/fa"
import { FaHome } from "react-icons/fa"

// Should refactor to use styled components rather than this css file.
import classes from "./NavMenu.module.css"

import styled from "styled-components"
const NavLink = styled(Link)`
  transition: all 0.5s;
  list-style: none;
  &.active {
    color: orange;
  }
`
class NavMenu extends Component {
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange)
    this.setState({
      menuIsClosed: true,
      activePage: "index",
      width: window.innerWidth,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange)
  }

  handleWindowSizeChange = () => {
    this.setState(oldState => {
      return {
        ...oldState,
        width: window.innerWidth,
      }
    })
  }

  handlePageChange = e => {
    const pageClicked = e.target.innerText
    this.setState(oldState => {
      return {
        ...oldState,
        activePage: pageClicked,
      }
    })
  }

  toggleMenu = () => {
    this.setState({ menuIsClosed: !this.state.menuIsClosed })
  }

  render() {
    return (
      <div className={classes.NavMenu}>
        <NavButton
          menuClosed={this.state.menuIsClosed}
          toggleMenuHandler={this.toggleMenu}
        />
        <NavTray menuClosed={this.state.menuIsClosed}>
          <Link activeClassName={classes.active} exact="/" to="/">
            <NavLink>
              <TrayItem clickHandler={this.handlePageChange}>
                <FaHome />
              </TrayItem>
            </NavLink>
          </Link>

          <Link to="/projects" activeClassName={classes.active}>
            <NavLink>
              <TrayItem clickHandler={this.handlePageChange}>
                <FaWrench />
              </TrayItem>
            </NavLink>
          </Link>

          <Link to="/" activeClassName={classes.active}>
            <NavLink>
              <TrayItem clickHandler={this.handlePageChange}>
                <FaEnvelope />
              </TrayItem>
            </NavLink>
          </Link>
        </NavTray>
        <Backdrop
          isDisabled={this.state.menuIsClosed}
          menuHandler={this.toggleMenu}
        />
      </div>
    )
  }
}

export default NavMenu

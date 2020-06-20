import React, { Component } from "react"
import "./Navigation.scss"
import { Link } from "gatsby"
import { stack as Menu } from "react-burger-menu"
import SocialButtons from "../SocialButtons/SocialButtons"

import Icon from "../../images/john-icon.png"

// customCrossIcon={false}
const Sidebar = ({ isMenuOpen, isOpen, menuItems }) => (
  <Menu
    width={`100%`}
    onStateChange={isMenuOpen}
    disableAutoFocus
    right
    customBurgerIcon={false}
    isOpen={isOpen}
  >
    <Link to="/" onClick={() => isMenuOpen(false)}>
      <img src={Icon} style={{ width: "30px" }} />
    </Link>
    {menuItems.map((item, index) => (
      <div key={index} className="text-center">
        <br />
        {item.url.includes("http") ? (
          <a
            href={item.url}
            style={{ color: "white" }}
            className="menu-item"
            to={item.url}
          >
            <span className={item.icon}> </span> {item.name}
          </a>
        ) : (
          <Link
            onClick={() => isMenuOpen(false)}
            activeClassName="menu-active"
            style={{ color: "white" }}
            className="menu-item"
            to={item.url}
          >
            <span className={item.icon}> </span> {item.name}
          </Link>
        )}
        <br />
        <br />
      </div>
    ))}
    <div className="text-center">
      <SocialButtons size="small" />
    </div>
  </Menu>
)

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  toggleMenuOpen = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }

  isMenuOpen = s => {
    if (s.isOpen !== true) {
      this.setState({
        menuOpen: false,
      })
    }
  }

  render() {
    return (
      <div className="navigation-wrapper">
        <Sidebar
          menuItems={this.props.menuItems}
          isMenuOpen={this.isMenuOpen}
          isOpen={this.state.menuOpen}
        />
        <nav
          className="navbar navbar-expand-lg navbar-light  fixed-top shadow-sm"
          style={{ backgroundColor: this.props.backgroundColor || "white" }}
        >
          <div className="container">
            <Link
              to="/"
              style={{ color: this.props.color || "black" }}
              className="navbar-brand"
            >
              <img src={Icon} style={{ width: "30px" }} />
            </Link>
            <button
              className="navbar-toggler"
              onClick={this.toggleMenuOpen}
              style={{ border: "0" }}
            >
              <span className="navbar-toggler-icon"> </span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav ml-auto"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                {this.props.menuItems.map((item, index) => (
                  <div key={index}>
                    {item.url.includes("http") ? (
                      <a
                        href={item.url}
                        style={{
                          color: this.props.color || "black",
                          fontWeight: "600",
                        }}
                        className="nav-link mr-3"
                        to={item.url}
                      >
                        <span className={item.icon}> </span> {item.name}
                      </a>
                    ) : (
                      <Link
                        style={{
                          color: this.props.color || "black",
                          fontWeight: "600",
                        }}
                        key={index}
                        activeClassName="menu-active"
                        className="nav-link mr-3"
                        to={item.url}
                      >
                        <span className={item.icon}> </span> {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                {/* <div className="nav-link ml-5">
                                    <SocialButtons size="small" />
                                </div> */}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navigation

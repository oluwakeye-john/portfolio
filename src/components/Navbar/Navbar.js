import React, { Component } from "react"
import './Navbar.scss'
import {Link} from 'gatsby'
import { slide as Menu } from "react-burger-menu"

const Sidebar = ({isMenuOpen, isOpen, menuItems}) => (
    <Menu width={250} onStateChange={isMenuOpen} disableAutoFocus right customBurgerIcon={false} isOpen={isOpen}>
        {
            menuItems.map((item, index) => (
                <div  key={index} >
                    <Link style={{color: "white"}} className="menu-item"to={item.url}>{item.name}</Link>
                    <hr />
                </div>
            ))
        }
    </Menu>
)

class Navbar extends Component{
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }

    menuItems = [
        {
            name: "Home",
            url : '/'
        },
        {
            name: "About",
            url : '/' +
                ''
        },
        {
            name: "Contact",
            url : '/'
        }
    ]

    toggleMenuOpen = () => {
        this.setState({
            menuOpen : !this.state.menuOpen
        })
    }

    isMenuOpen = (s) => {
        if(s.isOpen !== true){
            this.setState({
                menuOpen: false
            })
        }
    }

    render() {
        return (
            <div >
                <Sidebar menuItems={this.menuItems} isMenuOpen={this.isMenuOpen} isOpen={this.state.menuOpen}  />
                <nav className="navbar navbar-expand-lg navbar-light shadow-sm fixed-top">
                    <div className="container">
                        <Link to='/' className="navbar-brand">Gatsby</Link>
                        <span className="navbar-toggler" onClick={this.toggleMenuOpen} style={{border: "0"}}>
                            <span className="navbar-toggler-icon"> </span>
                        </span>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto"  data-toggle="collapse" data-target=".navbar-collapse.show">
                                {
                                    this.menuItems.map((item, index) => (
                                        <Link className="nav-link" key={index} to={item.url}>{item.name}</Link>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
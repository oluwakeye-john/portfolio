import React from "react"
import { slide as Menu } from 'react-burger-menu'
import './Sidebar.css'

const Sidebar = () => {
    const showSettings = e => {
        e.preventDefault()
    }
    return (
        <Menu disableAutoFocus right>
            <a id="home" href="#" className="menu-item">Home</a>
            <hr />
            <a id="home" href="#" className="menu-item">About</a>
            <hr />
            <a id="home" href="#" className="menu-item">Contact</a>
            <hr />
            <a id="home" onClick={showSettings} href="#" className="menu-item--small">Contact</a>
        </Menu>
    )
}

export default Sidebar
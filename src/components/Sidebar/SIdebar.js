import React from "react"
import { slide as Menu } from 'react-burger-menu'
import './Sidebar.css'

const Sidebar = () => (
    <Menu disableAutoFocus>
        <a id="home" href="#" className="menu-item">Home</a>
        <a id="home" href="#" className="menu-item">About</a>
        <a id="home" href="#" className="menu-item">Contact</a>
    </Menu>
)

export default Sidebar
import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"
import Navigation from "./Navigation/Navigation"
import Footer from "./Navigation/Footer"
import FixedButtons from "./FixedButtons/FixedButtons"
import ParticlesBg from "./ParticlesBg/ParticlesBg"

const Layout = ({ children }) => {
  //   const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const menuItems = [
    {
      name: "Home",
      url: "#",
    },
    {
      name: "About",
      url: "#aboutSection",
    },
    {
      name: "Projects",
      url: "#projectSection",
    },
    {
      name: "Contact",
      url: "#contactSection ",
    },
  ]

  return (
    <div>
      <Navigation title="John" menuItems={menuItems} />
      {/*<Navigation title={`John`} menuItems={menuItems} />*/}
      {/* <ParticlesBg /> */}
      <div className="">
        <div style={{ height: "70px" }}> </div>
        <main>{children}</main>
        <Footer />
      </div>
      <FixedButtons />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

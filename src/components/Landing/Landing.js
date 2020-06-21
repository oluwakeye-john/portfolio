import Anim from "react-reveal/Zoom"
import Rubber from "react-reveal/Shake"
import Rotate from "react-reveal/Reveal"
import React from "react"
import "./Landing.scss"

import Im1 from "../../images/overlay.svg"
import Im2 from "../../images/dev.svg"
import HireButton from "../HireButton/HireButton"

import SocialButtons from "../SocialButtons/SocialButtons"

const Landing = () => (
  <div className="mainIntro" style={{ backgroundImage: `url(${Im1})` }}>
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <>
            <h1 className="main-heading">
              <Rubber>
                <div role="img">
                  <div className="wave">👋 </div>Hi There!
                </div>
              </Rubber>
            </h1>
          </>
          <br />

          <Rotate>
            <div>
              <h2 className="main-subheading">I'm Oluwakeye John</h2>
              <h2 className="main-subheading">
                I'm a Full Stack Web developer
              </h2>
            </div>
          </Rotate>
          <br />
          <SocialButtons size="small" />
          <br />

          <HireButton />
          <br />
          <br />
          <br />
        </div>
        <div className="col-lg-7">
          <div className="container text-center">
            <Rotate>
              <img
                alt="dev logo"
                src={Im2}
                className="img-fluid rounded"
                // style={{ width: "250px" }}
              />
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Landing

import React from 'react';
import Particles from "react-particles-js";
import "./ParticlesBg.css"

function ParticlesBg() {
    return (
        <Particles className="part"
            params={{
                particles: {
                    number: {
                        value: 30,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: "#c1c1c1"
                    },
                    line_linked: {
                        color: "#a1a1a1"
                    }
                }
            }} />
    );
}

//131313

export default ParticlesBg;
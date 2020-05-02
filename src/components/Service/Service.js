import React from "react"
import HireButton from "../HireButton/HireButton"
import './service.scss'

const Service = () => (
    <div className="container text-center" id="serviceSection">
        <h3 className="text-muted">Services</h3>
        <br />
        <div className="row">
            <div className="col-lg-4 mb-5">
                <div className="serviceMain">
                    <span className="fas fa-mobile fa-3x serviceIcon"> </span>
                    <br /><br />
                    <h4 className="text-center">Mobile Friendly</h4>
                    <br />
                    <p>
                        A responsive design makes your website accessible to all users, regardless of their device
                    </p>
                </div>
            </div>
            <div className="col-lg-4 mb-5">
                <div className="serviceMain">
                    <span className="fas fa-draw-polygon fa-3x serviceIcon"> </span>
                    <br /><br />
                    <h4 className="text-center">Web Development</h4>
                    <br />
                    <p>
                        Clear, modern designs - optimized for performance, search engines, and users to customers
                    </p>
                </div>
            </div>
            <div className="col-lg-4 mb-5">
                <div className="serviceMain">
                    <span className="fas fa-paint-roller fa-3x serviceIcon"> </span>
                    <br /><br />
                    <h4 className="text-center">Mobile Friendly</h4>
                    <br />
                    <p>
                        A responsive design makes your website accessible to all users, regardless of their device
                    </p>
                </div>
            </div>

        </div>
        <HireButton />
    </div>
)

export default Service
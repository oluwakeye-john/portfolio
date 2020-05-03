import React from "react"
import Zoom from "react-reveal/Pulse"

const Contact = () => (
    <Zoom>
        <div className="container" id="contactSection">
            <h3 className="text-center text-muted">Get In Touch</h3>
            <br />
            <div className="row text-muted">
                <div className="col-lg-3">

                </div>
                <div className="col-lg-6">
                    <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <div>
                            <label htmlFor="name">
                                Name*
                            </label>
                            <br />
                            <input type="text" id="email" className="form-control" name="name" required />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="email">
                                Email*
                            </label>
                            <br />
                            <input type="email" id="email" className="form-control" name="email" required />
                        </div>
                        <br />

                        <div>
                            <label htmlFor="message">
                                Message*
                            </label>
                            <br />
                            <textarea rows={6} id="message" className="form-control" name="message" required> </textarea>
                        </div>
                        <br />
                        <input type="submit" className="btn" style={{backgroundColor: "#6C63FF", color: "white"}} />
                    </form>
                </div>
            </div>
        </div>
    </Zoom>
)

export default Contact
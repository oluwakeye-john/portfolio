import React from "react"

const Contact = () => (
    <div className="container" id="contactSection">
        <h1 className="text-center">Get In Touch</h1>
        <br />
        <div className="row text-muted">
            <div className="col-lg-3">

            </div>
            <div className="col-lg-6">
                <form onSubmit={(e) => e.preventDefault() } >
                    <div>
                        <label htmlFor="name">
                            Name
                        </label>
                        <br />
                        <input type="text" id="email" className="form-control" name="name" required />
                    </div>
                    <br />

                    <div>
                        <label htmlFor="email">
                            Email
                        </label>
                        <br />
                        <input type="email" id="email" className="form-control" name="email" required />
                    </div>
                    <br />

                    <div>
                        <label htmlFor="message">
                            Message
                        </label>
                        <br />
                        <textarea rows={6} id="message" className="form-control" name="message" required> </textarea>
                    </div>
                    <br />
                    <input type="submit" className="btn btn-success" />
                </form>
            </div>
        </div>
    </div>
)

export default Contact
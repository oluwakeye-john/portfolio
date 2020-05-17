import React, { Component } from "react"
import Zoom from "react-reveal/Zoom"

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fetching: false
        }
    }

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    onSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        this.setState({
            fetching: true
        })

        const contact_name = e.target.contact_name.value;
        const contact_email = e.target.contact_email.value;
        const contact_message = e.target.contact_message.value;

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
                "form-name": "contact",
                "name": contact_name,
                "email": contact_email,
                "message": contact_message
            })
        })
            .then(() => {
                alert("Your message has been submitted!")
                this.setState({
                    fetching: false
                })
            })
            .catch(error => {
                alert("An error occurred while submitting your form while submitting your message. Please try again")
                console.log(error)
            });
    }


    render() {
        return (

            <Zoom>
                <div className="container" id="contactSection">
                    <h3 className="text-center">Get In Touch</h3>
                    <br />
                    <div className="row">
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-6">
                            <form name="contact" method="POST" data-netlify="true" onSubmit={this.onSubmit}>
                                <input type="hidden" name="form-name" value="contact" />
                                <div>
                                    <label htmlFor="name">
                                        Name*
                                    </label>
                                    <br />
                                    <input onChange={this.onUpdateName} type="text" id="contact_name" className="form-control input-border" name="contact_name" required />
                                </div>
                                <br />

                                <div>
                                    <label htmlFor="email">
                                        Email*
                                    </label>
                                    <br />
                                    <input onChange={this.onUpdateEmail} type="email" id="contact_email" className="form-control input-border" name="contact_email" required />
                                </div>
                                <br />

                                <div>
                                    <label htmlFor="message">
                                        Message*
                                    </label>
                                    <br />
                                    <textarea onChange={this.onUpdateMessage} rows={6} id="contact_message" className="form-control input-border" name="contact_message" required />
                                </div>
                                <br />
                                <button type="submit" className="btn" style={{ backgroundColor: "#6C63FF", color: "white", borderRadius: "0" }}>
                                    Submit
                                    {
                                        this.state.fetching
                                        &&
                                        <span className="ml-1 spinner-border spinner-border-sm" />
                                    }
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Zoom>
        )
    }
}

export default Contact
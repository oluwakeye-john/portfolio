import React, { Component } from "react"
import Zoom from "react-reveal/Pulse"

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    onSubmit = (e) => {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    }

    onUpdateName = (e) => {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    onUpdateEmail = (e) => {
        console.log(e.target.value)
        this.setState({
            email: e.target.value
        })
    }

    onUpdateMessage = (e) => {
        console.log(e.target.value)
        this.setState({
            message: e.target.value
        })
    }
    render() {
        return (

            <Zoom>
                <div className="container" id="contactSection">
                    <h3 className="text-center text-muted">Get In Touch</h3>
                    <br/>
                    <div className="row text-muted">
                        <div className="col-lg-3">

                        </div>
                        <div className="col-lg-6">
                            <form name="contact" method="POST" data-netlify="true" onSubmit={this.onSubmit}>
                                <input type="hidden" name="form-name" value="contact"/>
                                <div>
                                    <label htmlFor="name">
                                        Name*
                                    </label>
                                    <br/>
                                    <input onChange={this.onUpdateName} type="text" id="email" className="form-control" name="name" required/>
                                </div>
                                <br/>

                                <div>
                                    <label htmlFor="email">
                                        Email*
                                    </label>
                                    <br/>
                                    <input onChange={this.onUpdateEmail} type="email" id="email" className="form-control" name="email" required/>
                                </div>
                                <br/>

                                <div>
                                    <label htmlFor="message">
                                        Message*
                                    </label>
                                    <br/>
                                    <textarea onChange={this.onUpdateMessage} rows={6} id="message" className="form-control" name="message" required/>
                                </div>
                                <br/>
                                <input type="submit" className="btn"
                                       style={{ backgroundColor: "#6C63FF", color: "white" }}/>
                            </form>
                        </div>
                    </div>
                </div>
            </Zoom>
        )
    }
}

export default Contact
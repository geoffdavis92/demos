import React, { Component } from "react";

export default class Form extends Component {
    render() {
        return (
            <form>
            	<h3>My Form</h3>
                <p>
                    <label htmlFor="email_address" className="form-label">
                        Email Address<br />
                        <input
                            type="email"
                            name="email_address"
                            id="email_address"
                            className="form-input"
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor="message" className="form-label">
                        Your Message<br />
                        <input
                            type="text"
                            name="message"
                            id="message"
                            className="form-input"
                        />
                    </label>
                </p>
                <p>
                    <input
                        type="submit"
                        value="Submit"
                        className="btn btn-primary btn-lg"
                    />
                </p>
            </form>
        );
    }
}

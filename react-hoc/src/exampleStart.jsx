import React, { Component } from "react";
import { render } from "react-dom";

import "spectre.css";

// Compose the form
class Form extends Component {
    render() {
        return (
            <form>
            	<h3>My Form</h3>
                <p>
                    <label htmlFor="email_address">
                        Email Address<br />
                        <input
                            type="email"
                            name="email_address"
                            id="email_address"
                        />
                    </label>
                </p>
                <p>
                    <label htmlFor="message">
                        Your Message<br />
                        <input type="text" name="message" id="message" />
                    </label>
                </p>
                <p>
                    <input type="submit" value="Submit" />
                </p>
            </form>
        );
    }
}

/**
 * withFormspree HOC function will go here!
 */

// Render the form
render(<Form />, document.getElementById("root"));

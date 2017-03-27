import React from "react";
import { render } from "react-dom";

import withFormSpree from "./withFormspree";
import Form from "./form";

import "./spectre.css";

const MyWrappedForm = withFormSpree(Form);

render(
    <div className="container" style={{ margin: "1em auto", maxWidth: "25%" }}>
        <MyWrappedForm />
    </div>,
    document.getElementById("root")
);

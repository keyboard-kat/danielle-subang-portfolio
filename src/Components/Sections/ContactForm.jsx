import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import componentsStyle from "Styles/componentsStyle.jsx";
import TextField from "material-ui/TextField";

import Button from "_components/Button.jsx";

class ContactForm extends Component {
  render() {
    return (
      <>
        <div style={{ marginTop: "25px" }}>
          <form method="POST" action="https://formspree.io/YOUREMAILHERE">
            <TextField
              fullWidth={true}
              required={true}
              type="email"
              id="email"
              inputStyle={{
                color: "white",
                height: "100%",
                background: "transparent"
              }}
              placeholder="Your email"
            />

            <TextField
              id="message"
              required={true}
              inputStyle={{ color: "white", height: "15%" }}
              rows={5}
              fullWidth={true}
              type="text"
              placeholder="Write me a message"
            />

            <Button type="submit" color="info">
              {" "}
              Send
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export default withStyles(componentsStyle)(ContactForm);

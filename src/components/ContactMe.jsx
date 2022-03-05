import React from "react";
import "./contactMe.scss";
import Button from "@mui/material/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `#cccccc !important`,
    },
  },
  cssFocused: {
    color: "#cccccc !important",
  },
  cssLabel: {
    color: "#cccccc",
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "#cccccc !important",
  },
});

const ContactMe = () => {
  const classes = useStyles();
  return (
    <div className="section-container">
      <div className="title-header">
        <div>Get In Touch</div>
        <div>Contact Me</div>
      </div>
      <div className="contact-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107235146!2d85.07300191831742!3d25.608175570492524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1637681832287!5m2!1sen!2sin"
            allowFullScreen=""
            width="100%"
            height="100%"
            loading="lazy"
            key="145"
          ></iframe>
        </div>
        <div className="contact-form">
          <div className="fileds-wrapper">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </div>
          <div className="fileds-wrapper">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </div>
          <div className="fileds-wrapper">
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
            />
          </div>
          <div className="fileds-wrapper">
            <Button variant="contained">Let's Talk</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

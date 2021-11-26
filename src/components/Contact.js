import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contactMainContainer">
      <div className="contactHeading">
        <b>
          <u>Contact Me</u>
        </b>
      </div>
      <div className="contactContainer container">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107235146!2d85.07300191831742!3d25.608175570492524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1637681832287!5m2!1sen!2sin"
            allowFullScreen=""
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>
        <div className="contactForm">
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Your name"
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Message...."
                ></textarea>
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <button type="button" className="btn btn-secondary">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

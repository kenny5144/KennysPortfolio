import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.scss";

const Contact = () => {
  const formref = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailInput, setEmailInput] = useState({
    title: "",
    mail: "",
    text: "",
  });
  const templateparams = {
    form_name: emailInput.title,
    form_email: emailInput.mail,
    to_name: "kehinde ojo",
    message: emailInput.text,
  };
  function handlChange(e) {
    const { name, value } = e.target;
    setEmailInput((prev) => {
      return { ...prev, [name]: value };
    });
  }
  // console.log("hi", emailInput)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_rjb4d39",
        "template_ixxga7i",
        templateparams,
        "TSDFmMgD3XOwoXul6"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(false);
        }
      );
  };
  return (
    <div className="container">
      <div className="contact">
        <div className="textContainer">
          <h1>Let’s work together</h1>
          <div className="item">
            <h2>Mail</h2>
            <span>ojok761@gmail.com</span>
          </div>
          <div className="item">
            <h2>Location</h2>
            <span>Orange NJ</span>
          </div>
          <div className="item">
            <h2>Phone</h2>
            <span>+973 757 8155</span>
          </div>
        </div>
        <div className="formContainer">
          <form ref={formref} onSubmit={sendEmail}>
            <input
              type="text"
              onChange={handlChange}
              value={emailInput.title}
              required
              placeholder="Name"
              name="title"
            />
            <input
              type="email"
              onChange={handlChange}
              value={emailInput.mail}
              required
              placeholder="Email"
              name="mail"
            />
            <textarea
              rows={8}
              onChange={handlChange}
              value={emailInput.text}
              placeholder="Message"
              name="text"
            />
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

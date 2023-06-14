import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Validation from "./formValidation";
import "../contact/contactform.scss";
import axios, { Axios } from "axios";

const ContactForm = ({ setShowmodal }) => {
  const [formData, setFormData] = useState({
    name: "",
    phonenumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const formHandler = (event) => {
    const { name, value } = event.target;

    setFormData((prevalues) => {
      return {
        ...prevalues,
        [name]: value,
      };
    });
    // console.log(formData);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      phonenumber: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  const submitForm = (event) => {
    event.preventDefault();
    const errmsg = Validation(formData);
    setErrors(errmsg);
    if (Object.values(errmsg).length > 0) {
      console.log(errmsg);
    }

    if (Object.values(errmsg).length === 0) {
      console.log("no error");
      console.log(errmsg);
      //https://formspree.io/f/xayzvvza warsi.work@gmail.com
      //https://formspree.io/f/xvonnpke warsiadil35@gmail.com
      //https://formspree.io/f/xlekkrdo aadilwarsi75@gmail.com
      axios
        .post("https://formspree.io/f/xvonnpke", {
          name: formData.name,
          phonenumber: formData.phonenumber,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
        .then((res) => {
          console.log("posting data", res);
          if (res.status === 200) {
            setShowmodal(true);
            setFormData({
              name: "",
              phonenumber: "",
              email: "",
              subject: "",
              message: "",
            });
          }
        })
        .catch((err) => {
          console.log("something went wrong", err);
        });
    }
  };

  function Validation(values) {
    const error = {};
    const email_pattern =
      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/;
    const phonenum = /^\d{10}|\d{11}|\d{12}$/;

    if (
      values.name === null ||
      values.name === "" ||
      values.name === undefined
    ) {
      error.name = "Name is required *";
    }

    if (
      values.phonenumber === null ||
      values.phonenumber === "" ||
      values.phonenumber === undefined
    ) {
      error.phonenumber = "Phone number is required *";
    } else if (!phonenum.test(values.phonenumber)) {
      error.phonenumber = "Please enter valid phone number *";
    }

    if (
      values.email === null ||
      values.email === "" ||
      values.email === undefined
    ) {
      error.email = "Email is required *";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Please enter valid email *";
    }

    if (
      values.subject === null ||
      values.subject === "" ||
      values.subject === undefined
    ) {
      error.subject = " Please enter subject *";
    }

    if (
      values.message === null ||
      values.message === "" ||
      values.message === undefined
    ) {
      error.message = "Please enter message *";
    }
    return error;
  }

  return (
    <div className="form-container-sub">
      <form className="form-box">
        <div className="form-inputs">
          <p className="waringMsg">
            Note :- All <span>fields</span> required (*).
          </p>
          <input
            className="inputs"
            type="text"
            id="input-name"
            placeholder="Full Name"
            name="name"
            value={formData.name}
            onChange={formHandler}
          />
          {errors.name && <h5 className="errormessage">{errors.name}</h5>}
          <input
            className="inputs"
            type="text"
            id="input-phonenumber"
            placeholder="Contact Number"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={formHandler}
          />
          {errors.phonenumber && (
            <span className="errormessage">{errors.phonenumber}</span>
          )}
          <input
            className="inputs"
            type="email"
            id="input-email"
            placeholder="demo@email.com"
            name="email"
            value={formData.email}
            onChange={formHandler}
          />
          {errors.email && <span className="errormessage">{errors.email}</span>}
          <input
            className="inputs"
            type="text"
            id="input-subject"
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={formHandler}
          />
          {errors.subject && (
            <span className="errormessage">{errors.subject}</span>
          )}

          <textarea
            className="inputs"
            name="message"
            type="text"
            id="input-message"
            placeholder="Message"
            value={formData.message}
            onChange={formHandler}
          ></textarea>
          {errors.message && (
            <span className="errormessage">{errors.message}</span>
          )}

          <input
            type="submit"
            value="Submit"
            id="input-submit"
            onClick={submitForm}
          />
          <input
            type="reset"
            value="Reset"
            id="input-reset"
            onClick={resetForm}
          ></input>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

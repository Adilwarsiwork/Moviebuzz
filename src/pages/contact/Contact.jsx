import React from "react";
import { useState } from "react";
import "./style.scss";
import { IoCall } from "react-icons/io5";
import { MdLocationOn, MdAttachEmail } from "react-icons/md";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Modal from "./Modal.jsx";

const Contact = () => {
  const [showmodal, setShowmodal] = useState(false);

  const iocallicon = <IoCall />;
  const locationicon = <MdLocationOn />;
  const mailicon = <MdAttachEmail />;

  const phonenumber = "+919575726843";
  const address = "Mowa, Raipur, Chhattisgarh, India";
  const email = "warsi.work@gmail.com";

  return (
    <div className="form-container">
      <h6>
        All the links and form fields are working. Just fill the form and click
        on "Submit" button to send message to me.
      </h6>
      <h4>GET IN TOUCH AND HIRE ME.</h4>
      <h2>CONTACT</h2>

      {showmodal && <Modal setShowmodal={setShowmodal}></Modal>}

      <div className="form-subcontainer">
        <div className="left">
          <a
            href="https://goo.gl/maps/m7a34ct3VckU45C79"
            target="_blank"
            style={{ color: "#0a4d68" }}
          >
            <ContactInfo icon={locationicon} data={address}></ContactInfo>
          </a>
          <a
            href="tel:+919575726843"
            target="_blank"
            style={{ color: "#0a4d68" }}
          >
            <ContactInfo icon={iocallicon} data={phonenumber}></ContactInfo>
          </a>
          <a
            href="mailto:warsi.work@gmail.com"
            target="_blank"
            style={{ color: "#0a4d68" }}
          >
            <ContactInfo icon={mailicon} data={email}></ContactInfo>
          </a>
        </div>
        <div className="right">
          <ContactForm setShowmodal={setShowmodal}></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const ContactInfo = (props) => {
  return (
    <div className="information-container">
      <div className="information">
        <span className="icon">{props.icon}</span>
        <span className="text-info">{props.data}</span>
      </div>
    </div>
  );
};

export default ContactInfo;

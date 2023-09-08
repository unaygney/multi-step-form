import React from "react";
import SuccessLogo from "../../assets/icon-thank-you.svg";

function Success() {
  return (
    <div className="success-page">
     <div className="img-wrapper">
     <img src={SuccessLogo} alt="Success Logo" />
     </div>
      <h3 className="success-title">Thank You</h3>
      <p className="success-text">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default Success;

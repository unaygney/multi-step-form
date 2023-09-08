import React from "react";
import { useState } from "react";
import { Field } from "formik";
import { StepInfo } from "../constants.js";

import ArcadeIcon from "../../assets/icon-arcade.svg";
import AdvancedIcon from "../../assets/icon-advanced.svg";
import ProIcon from "../../assets/icon-pro.svg";

const Icons = {
  1: ArcadeIcon,
  2: AdvancedIcon,
  3: ProIcon,
};

function Step2({ values, setBillingTypes, billingTypes }) {
  const [isActive, setIsActive] = useState(false);
  const selectedValue = values.picked;

  return (
    <div className="step2-form">
      <h2 className="form-title">Select your plan</h2>
      <h5 className="form-subtitle">
        You have the option of monthly or yearly billing.
      </h5>
      <div
        className="radio-group"
        role="group"
        aria-labelledby="my-radio-group"
      >
        {StepInfo[0].step2[billingTypes].map((field) => (
          <label
            key={field.id}
            className={selectedValue === field.title ? "selected" : ""}
          >
            <Field type="radio" name="picked" value={field.title} />
            <div className="img-wrapper">
              <img src={Icons[field.id]} alt="" />
            </div>
            <div className="info">
              <h4 className="select-title">{field.title}</h4>
              <p className="select-price">{field.price}</p>
            </div>
          </label>
        ))}
      </div>

      <div className="switch-box">
        <span className={`switch-price ${isActive ? "" : "active"}`}>
          Monthly
        </span>
        <label className="switch">
          <input
            type="checkbox"
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
            onClick={() => setBillingTypes(isActive ? "monthly" : "yearly")}
          />
          <span className="slider round"></span>
        </label>
        <span className={`switch-price ${isActive ? "active" : ""}`}>
          Yearly
        </span>
      </div>
    </div>
  );
}

export default Step2;

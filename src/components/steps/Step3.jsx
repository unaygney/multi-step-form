import React from "react";
import { Field } from "formik";
import { StepInfo } from "../constants.js";
function Step3({ billingTypes ,values }) {


  return (
    <div className="step3-form">
      <h2 className="form-title">Pick add-ons</h2>
      <h5 className="form-subtitle">
        Add-ons help enhance your gaming experience.
      </h5>
      <div className="checkbox-group" role="group" aria-labelledby="checkbox-group">
        {StepInfo[0].step3[billingTypes].map((field) => (
          <label key={field.id} htmlFor={field.id} className={`checkbox-label ${values[`service-${field.id}`] ? 'active' : ''}`} >
            <Field type="checkbox"  id={field.id} name={`service-${field.id}`}/>
            <div className="checkbox-text">
              <h3 className="checkbox-title">{field.title}</h3>
              <p className="checkbox-info">{field.description}</p>
            </div>
            <span className="price">{field.price}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default Step3;

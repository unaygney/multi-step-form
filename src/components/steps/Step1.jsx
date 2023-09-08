import React from "react";
import { Field } from "formik";
import {StepInfo} from '../constants.js'




function Step1({values}) {


  return (
    <div className="step1-form">
      <h2 className="form-title">Personal Info</h2>
      <h5 className="form-subtitle">
        Please provide your name, email address, and phone number.
      </h5>
      <div className="form-wrapper">
        {StepInfo[0].step1.map((field) => (
          <div className="form-control" key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <Field id={field.id} name={field.id} placeholder={field.placeholder} type={field.type} />
          </div>
        ))}

      </div>
    </div>
  );
}

export default Step1;

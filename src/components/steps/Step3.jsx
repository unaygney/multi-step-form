import React from "react";
import { Field } from "formik";
import {StepInfo} from '../constants.js'
function Step3({billingTypes}) {

  console.log(billingTypes)
  return (
    <div className="step3-form">
      <h2 className="form-title">Pick add-ons</h2>
      <h5 className="form-subtitle">
        Add-ons help enhance your gaming experience.
      </h5>
      <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="1" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="2" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="3" />
              Three
            </label>


          </div>
    </div>
  );
}

export default Step3;

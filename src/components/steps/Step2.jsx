import React from "react";
import { Field } from "formik";
import { useState } from "react";

function Step2({ values }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <h2 className="form-title">Select your plan</h2>
      <h5 className="form-subtitle">
      You have the option of monthly or yearly billing.
      </h5>
      <div role="group" aria-labelledby="my-radio-group">
        <label>
          <Field type="radio" name="picked" value="Arcade" />
          Arcade
        </label>
        <label>
          <Field type="radio" name="picked" value="Advanced" />
          Advanced
        </label>

        <label>
          <Field type="radio" name="picked" value="Pro" />
          Pro
        </label>
        <div>Picked: {values.picked}</div>
      </div>
    </div>
  );
}

export default Step2;

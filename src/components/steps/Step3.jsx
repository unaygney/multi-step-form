import React from "react";
import { Field } from "formik";
function Step3() {
  return (
    <div>
      <h2 className="form-title">Pick add-ons</h2>
      <h5 className="form-subtitle">
        Add-ons help enhance your gaming experience.
      </h5>
      <Field name="about" component={"textarea"} placeholder={"about"} />
    </div>
  );
}

export default Step3;

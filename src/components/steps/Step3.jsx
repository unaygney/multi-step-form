import React from "react";
import { Field } from "formik";
function Step3({ values }) {
  console.log(values);
  return (
    <div>
      <Field name="about" component={'textarea'} placeholder={"about"} />
    </div>
  );
}

export default Step3;

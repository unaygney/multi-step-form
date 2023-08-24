import React from "react";
import { Field } from "formik";

function Step1() {
  return (
    <div>
      <>
        <Field name="name" placeholder={"name"} />
        <Field name="surname" placeholder={"surname"} />
      </>
    </div>
  );
}

export default Step1;

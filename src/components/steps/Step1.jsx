import React from "react";
import { Field } from "formik";

function Step1() {
  return (
    <div>
        <Field name="name" placeholder={"Name"} />
        <Field name="surname" placeholder={"Surname"} />
    </div>
  );
}

export default Step1;

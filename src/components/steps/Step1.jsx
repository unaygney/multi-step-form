import React from "react";
import { Field } from "formik";

function Step1() {
  return (
    <div>
        <Field name="name" placeholder={"Name"} />
        <Field name="email" placeholder={"e.g. stephenking@lorem.com"} />
    </div>
  );
}

export default Step1;
  
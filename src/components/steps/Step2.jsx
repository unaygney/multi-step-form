import React from "react";
import { Field } from "formik";
import { useState } from 'react'
import { Switch } from '@headlessui/react'



function Step2({ values }) {


  const [enabled, setEnabled] = useState(false)
   
  return (
    <>
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
    </>
  );
}

export default Step2;

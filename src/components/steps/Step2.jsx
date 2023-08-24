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

      <div className="py-16">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-900' : 'bg-teal-700'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
    </>
  );
}

export default Step2;
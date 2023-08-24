import React from 'react'
import { Field } from 'formik'

function Step2({values}) {

    console.log(values)
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
  )
}

export default Step2

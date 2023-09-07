import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";

//Steps
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Success from "./Success";

function MultiStepForm() {
  const [billingTypes, setBillingTypes] = useState("monthly");

  return (
    <div className="form-container">
      <Formik
        initialValues={{
          step: 1,
          lastStep: 5,

          //Step 1
          name: "",
          email: "",
          phone: "",

          // Step 2
          picked: "",

          //step 3 
          "service-0" : false,
          "service-1" : false,
          "service-2" : false
    
        
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
        }}
      >
        {({ values, setFieldValue }) => {
          const handleChangeNext = (e) => {
            setFieldValue("step", values.step + 1);
          };

          const handleChangePrev = (e) => {
            setFieldValue("step", values.step - 1);
          };

          return (
            <Form>
              {values.step === 1 && <Step1 values={values} />}
              {values.step === 2 && <Step2 values={values} setBillingTypes={setBillingTypes} billingTypes={billingTypes} />}
              {values.step === 3 && <Step3 values={values} billingTypes={billingTypes} />}
              {values.step === 4 && <Step4 values={values} />}
              {values.step === 5 && <Success values={values} />}

              <div className="buttons">
                {values.step !== 1 && (
                  <button
                    className="btn"
                    type="button"
                    onClick={handleChangePrev}
                  >
                    Go Back
                  </button>
                )}

                {values.step < values.lastStep && (
                  <button
                    className="btn active"
                    type="button"
                    onClick={handleChangeNext}
                  >
                    Next Step
                  </button>
                )}

                {values.step === values.lastStep && (
                  <button className="btn confirm" type="submit">
                    Confirm
                  </button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default MultiStepForm;

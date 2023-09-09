import React from "react";
import { useState } from "react";
import { Formik, Form } from "formik";
import { StepperValidation } from "../StepperValidation";
import { Items } from "../constants";
//Steps
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Success from "./Success";

function MultiStepForm() {
  const [billingTypes, setBillingTypes] = useState("monthly");
const [step , setStep ] = useState(1)

  return (
    <>
      <div className="form-container">
        <div className="side-bar">
          {Items.map((item , index) => (
            <div key={item.id} className="item">
              <div className={`item-number ${step === index + 1 ? "active" : ""}`}>{item.number}</div>
              <div className="item-body">
                <div className="subtitle">{item.subtitle}</div>
                <div className="title">{item.title}</div>
              </div>
            </div>
          ))}
        </div>

        <Formik
          initialValues={{
            step: step,
            lastStep: 5,

            //Step 1
            name: "",
            "email-address": "",
            "phone-number": "",

            // Step 2
            picked: "",

            //step 3
            "service-0": false,
            "service-1": false,
            "service-2": false,
          }}
          validationSchema={StepperValidation}
          onSubmit={(values, actions) => {
            console.log("values", values);
          }}
        >
          {({ values, setFieldValue, errors, touched, isValid, dirty  }) => {
            const handleChangeNext = (e) => {
              setFieldValue('step', values.step + 1);
              setStep(values.step + 1); 
            };
            const handleChangePrev = (e) => {
              setFieldValue('step', values.step - 1);
              setStep(values.step - 1); 
            };

            return (
              <Form>
                {values.step === 1 && (
                  <Step1 values={values} errors={errors} touched={touched} />
                )}
                {values.step === 2 && (
                  <Step2
                    values={values}
                    setBillingTypes={setBillingTypes}
                    billingTypes={billingTypes}
                  />
                )}
                {values.step === 3 && (
                  <Step3 values={values} billingTypes={billingTypes} />
                )}
                {values.step === 4 && (
                  <Step4 values={values} billingTypes={billingTypes} setBillingTypes={setBillingTypes} />
                )}
                {values.step === 5 && <Success values={values} />}

                <div className="buttons">
                  {values.step !== 1 && values.step !== values.lastStep && (
                    <button
                      className="btn"
                      type="button"
                      onClick={handleChangePrev}
                    >
                      Go Back
                    </button>
                  )}

                  {values.step < 4 && (
                    <button
                      className="btn active"
                      type="button"
                      onClick={handleChangeNext}
                      disabled={!isValid || !dirty}
                    >
                      Next Step
                    </button>
                  )}

                  {values.step === values.lastStep - 1 && (
                    <button
                      className="btn confirm"
                      onClick={handleChangeNext}
                      type="submit"
                    >
                      Confirm
                    </button>
                  )}
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default MultiStepForm;

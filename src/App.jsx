import { Formik, Form } from "formik";
import './main.css'

// Components
import Step1 from './components/steps/Step1'
import Step2 from './components/steps/Step2'
import Step3 from './components/steps/Step3'


function App() {
  return (
    <div>
      <h1 className="form-title">Anywhere in your App</h1>

      <Formik
        initialValues={{
          step: 1,
          lastStep: 4,

          name: "",
          surname: "",

          // Step 2
          picked: "",

          //Step 3
          about: "",
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
              {values.step === 1 && ( <Step1 />)}
              {values.step === 2 && ( <Step2 values={values} /> )}
              {values.step === 3 && (<Step3 values={values} />)}

              <div className="buttons">
                {values.step !== 1 && (
                  <button className="btn" type="button" onClick={handleChangePrev}>
                    Go Back
                  </button>
                )}

                {values.step < values.lastStep && (
                  <button className="btn active" type="button" onClick={handleChangeNext}>
                    Next Step
                  </button>
                )}

                {values.step === values.lastStep && (
                  <button className="btn confirm" type="submit">Confirm</button>
                )}
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;

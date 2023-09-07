import MultiStepForm from "./components/steps/MultiStepForm";
import SideBar from "./components/SideBar";
import "./main.css";

function App() {
  return (
    <div className="multi-step-form">
      <SideBar />
      <MultiStepForm />
    </div>
  );
}

export default App;

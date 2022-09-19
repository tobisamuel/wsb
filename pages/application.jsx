import { useState } from "react";
import Layout from "../components/Layout";
import PaymentForm from "../components/payment";
import RegistrationForm from "../components/registration";
import EducationForm from "../components/education";
import Congrats from "../components/congrats";
import { GrStatusGood } from "react-icons/gr";

const steps = [
  "key Personal data",
  "pricing and promotions",
  "education and work experience",
  "summary",
];

const Application = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const currentForm = () => {
    switch (step) {
      case 0:
        return <RegistrationForm nextStep={nextStep} />;
      case 1:
        return <PaymentForm nextStep={nextStep} prevStep={prevStep} />;
      case 2:
        return <EducationForm nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Congrats />;
      default:
        return <RegistrationForm nextStep={nextStep} />;
    }
  };

  return (
    <Layout>
      <div className="py-14 pl-32 flex bg-lightgray space-x-16">
        {steps.map((step, i) => (
          <div className="flex items-center gap-4 text-tabac text-base" key={i}>
            <GrStatusGood />
            <p className="font-robotoslab font-bold">{step}</p>
          </div>
        ))}
      </div>

      {currentForm()}
    </Layout>
  );
};

export default Application;

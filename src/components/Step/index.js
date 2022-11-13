import Progress from "./Progress";
import Form from "./Form";
import ProgressControl from "./ProgressControl";
import { useState, useEffect } from "react";
const Step = () => {
  const [step, setStep] = useState("1");
  useEffect(()=>{
    console.log(step);
  }, [step])
  return (
    <>
      <section className="register-container col col-lg-6 col-sm-12" data-phase={step} data-total-price="0">
        {/* <!-- register-title --> */}
        <h2 className="register-title col col-12">結帳</h2>

        {/* <!-- register-progress --> */}
        <Progress/>

        {/* <!-- register-form --> */}
        <Form/>
      </section>
      {/* <!-- progress-control --> */}
        <ProgressControl setStep={setStep}/>
    </>
  )
}
export default  Step;
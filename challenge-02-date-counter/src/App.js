// import { useState } from "react";
import Counter from "./Counter";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
//   const [step, setStep] = useState(1);
//   const [count, setCount] = useState(0);

//   const d = new Date();
//   d.setDate(d.getDate() + count);

//   const handleNextStep = function () {
//     setStep((step) => step + 1);
//   };

//   const handlePrevStep = function () {
//     if (step > 1) setStep((step) => step - 1);
//   };

//   const handleIncCount = function () {
//     setCount((count) => count + step);

//     // x = date.toDateString;
//   };

//   const handleDecCount = function () {
//     setCount((count) => count - step);
//     // setDate((date) => date - count);
//     // x = date.toDateString;
//   };

//   // const date = new Date();
//   // console.log(date);
//   return (
//     <div className="App">
//       <div>
//         <button onClick={handlePrevStep}>-</button>
//         <span> Step: {step} </span>
//         <button onClick={handleNextStep}>+</button>
//       </div>

//       <div>
//         <button onClick={handleDecCount}>-</button>
//         <span> Count: {count} </span>
//         <button onClick={handleIncCount}>+</button>
//       </div>
//       <p>{d.toDateString()}</p>
//     </div>
//   );
// }

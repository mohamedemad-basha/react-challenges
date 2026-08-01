import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <input
          type="range"
          min="1"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        ></input>
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((count) => count - step)}>-</button>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(+e.target.value)}
        />
        <button onClick={() => setCount((count) => count + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
              ? `  ${count} days from today is `
              : `
               ${Math.abs(count)} days from today was `}
        </span>
        {date.toDateString()}
      </p>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

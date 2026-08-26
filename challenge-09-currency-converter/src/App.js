import { useEffect, useState } from "react";

export default function App() {
  const [currFrom, setCurrFrom] = useState("USD");
  const [currTo, setCurrTo] = useState("EUR");
  const [amount, setAmount] = useState("");
  const [output, setOutput] = useState("Enter valid number");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convertCurrency() {
        try {
          if (!amount || amount <= 0) {
            setOutput("Enter valid number");
            return;
          }

          if (currFrom === currTo) {
            setOutput(Number(amount));
            return;
          }

          if (Number(amount) > 0) {
            setIsLoading(true);

            const res = await fetch(
              `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currFrom}&to=${currTo}`,
            );

            const data = await res.json();

            console.log(data);

            setOutput(data.rates[currTo]);
          }
        } catch (err) {
          console.log(err.message);
        } finally {
          setIsLoading(false);
        }
      }

      convertCurrency();
    },
    [currFrom, currTo, amount],
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        value={currFrom}
        onChange={(e) => setCurrFrom(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      <select
        value={currTo}
        onChange={(e) => setCurrTo(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>

      {isLoading ? (
        "loading..."
      ) : (
        <p>{typeof output === "number" ? `${output} ${currTo}` : output}</p>
      )}
    </div>
  );
}

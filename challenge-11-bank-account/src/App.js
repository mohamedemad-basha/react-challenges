/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

import { useReducer, useState } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") {
    return state;
  }

  switch (action.type) {
    case "openAccount":
      if (state.isActive) return state;

      return {
        ...state,
        isActive: true,
        balance: 500,
      };

    case "deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };

    case "withdraw":
      if (action.payload > state.balance) return state;

      return {
        ...state,
        balance: state.balance - action.payload,
      };

    case "requestLoan":
      if (state.loan > 0) return state;

      return {
        ...state,
        loan: action.payload,
        balance: state.balance + action.payload,
      };

    case "payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
      };

    case "closeAccount":
      if (state.loan > 0 || state.balance !== 0) return state;

      return { ...initialState };

    default:
      throw new Error("Unknown action type");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const [deposit, setDeposit] = useState("");
  const [loani, setLoani] = useState("");
  const [withdraw, setWithdraw] = useState("");

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>

      {isActive && (
        <>
          <p>Balance: {balance}</p>
          <p>Loan: {loan}</p>{" "}
        </>
      )}

      <p>
        <button onClick={() => dispatch({ type: "openAccount" })}>
          Open account
        </button>
      </p>

      <input
        type="text"
        value={deposit}
        onChange={(e) => setDeposit(+e.target.value)}
        placeholder="50"
        disabled={!isActive}
      />
      <button
        onClick={() => {
          dispatch({ type: "deposit", payload: deposit });
          setDeposit("");
        }}
        disabled={!isActive}
      >
        Deposit
      </button>

      <input
        type="text"
        value={withdraw}
        onChange={(e) => setWithdraw(+e.target.value)}
        placeholder="50"
        disabled={!isActive}
      />
      <button
        onClick={() => {
          dispatch({ type: "withdraw", payload: withdraw });
          setWithdraw("");
        }}
        disabled={!isActive}
      >
        Withdraw
      </button>

      <input
        type="text"
        value={loani}
        onChange={(e) => setLoani(+e.target.value)}
        placeholder="1000"
        disabled={!isActive}
      />
      <button
        onClick={() => {
          dispatch({ type: "requestLoan", payload: loani });
          setLoani("");
        }}
        disabled={!isActive}
      >
        Request a loan
      </button>

      <p>
        <button
          onClick={() => dispatch({ type: "payLoan" })}
          disabled={!isActive}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => dispatch({ type: "closeAccount" })}
          disabled={!isActive || loan > 0 || balance !== 0}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

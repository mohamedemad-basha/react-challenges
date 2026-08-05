import { useState } from "react";
import Bill from "./Bill.js";
import Tip from "./Tip.js";
import Output from "./Output.js";
import Reset from "./Reset.js";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [friendTip, setFriendTip] = useState(0);

  const handleReset = function () {
    setBill("");
    setTip(0);
    setFriendTip(0);
  };

  return (
    <div>
      <Bill bill={bill} onSetBill={setBill} />

      <Tip tip={tip} onSetTip={setTip}>
        How did you like the service?
      </Tip>

      <Tip tip={friendTip} onSetTip={setFriendTip}>
        How did your friend like the service?
      </Tip>

      <Output bill={bill} tip={tip} friendTip={friendTip} />

      {+bill > 0 && <Reset onReset={handleReset} />}
    </div>
  );
}

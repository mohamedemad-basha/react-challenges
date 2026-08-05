export default function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label htmlFor="bill">How much was your bill?</label>
      <input
        id="bill"
        type="number"
        min="0"
        placeholder="Bill Amount"
        value={bill}
        onChange={(e) => onSetBill(e.target.value)}
      />
    </div>
  );
}

export default function Tip({ tip, onSetTip, children }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSetTip(+e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>It was great (20%)</option>
      </select>
    </div>
  );
}

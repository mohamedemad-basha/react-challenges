export default function Output({ bill, tip, friendTip }) {
  const billValue = +bill;
  const averageTip = (tip + friendTip) / 2;
  const finalTip = (billValue * averageTip) / 100;
  const totalBill = billValue + finalTip;

  return (
    billValue > 0 && (
      <h3 className="output">
        You pay ${totalBill.toFixed(2)} (${billValue.toFixed(2)} + $
        {finalTip.toFixed(2)} tip)
      </h3>
    )
  );
}

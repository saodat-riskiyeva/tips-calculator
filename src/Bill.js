export default function Bill({ bill, handleBill }) {
  console.log(bill);
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        id="billAmount"
        value={bill}
        onChange={(e) => handleBill(e.target.value)}
      />
    </div>
  );
}

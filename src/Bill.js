export default function Bill({ bill, handleBill }) {
  console.log(bill);
  return (
    <div>
      How much was the bill?
      <input
        type="text"
        id="billAmount"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => handleBill(Number(e.target.value))}
      />
    </div>
  );
}

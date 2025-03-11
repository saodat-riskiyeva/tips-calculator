export default function Calculations({ bill, rating1, rating2 }) {
  const isOpen = bill > 0;

  const tipsPercent = (Number(rating1 / 100) + Number(rating2 / 100)) / 2;
  const tips = tipsPercent * Number(bill);

  const totalAmount = Number(bill) + tips;

  return (
    isOpen && (
      <p>
        <b>
          You pay ${totalAmount} (${bill} + ${tips} tips)
        </b>
      </p>
    )
  );
}

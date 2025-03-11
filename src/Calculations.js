export default function Calculations({ bill, rating1, rating2 }) {
  const isOpen = bill > 0;
  const tips = ((rating1 + rating2) / 200) * bill;

  const totalAmount = bill + tips;

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

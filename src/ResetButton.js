export default function ResetButton({
  bill,
  handleBill,
  setRating1,
  setRating2,
}) {
  const isPresent = bill > 0;

  function handleResetButton() {
    handleBill(0);
    setRating1(0);
    setRating2(0);
  }

  return (
    isPresent && (
      <p>
        <button onClick={(e) => handleResetButton()}> Reset </button>
      </p>
    )
  );
}

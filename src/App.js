import { useState } from "react";
import "./styles.css";
// import Bill from "./Bill";
// import MyServiceRating from "./MyServiceRating";
// import FriendServiceRating from "./FriendServiceRating";
// import Calculations from "./Calculations";
// import ResetButton from "./ResetButton";

// export const serviceRating = [
//   {
//     rating: "Dissatisfied",
//     percent: 0,
//   },
//   {
//     rating: "It was okay",
//     percent: 5,
//   },
//   {
//     rating: "It was good",
//     percent: 10,
//   },
//   {
//     rating: "Absolutely amazing",
//     percent: 20,
//   },
// ];

// export default function App() {
//   const [bill, setBill] = useState("");
//   const [myRating, setMyRating] = useState(0);
//   const [friendRating, setFriendRating] = useState(0);

//   function handleBill(value) {
//     setBill(value);
//   }

//   return (
//     <div className="App">
//       <Bill bill={bill} handleBill={handleBill} />
//       <MyServiceRating rating={myRating} setRating={setMyRating} />
//       <FriendServiceRating rating={friendRating} setRating={setFriendRating} />
//       <Calculations bill={bill} rating1={myRating} rating2={friendRating} />
//       <ResetButton
//         bill={bill}
//         handleBill={handleBill}
//         setRating1={setMyRating}
//         setRating2={setFriendRating}
//       />
//     </div>
//   );
// }

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = (bill * (percentage1 + percentage2)) / 2 / 100;

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPrecentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPrecentage>
      <SelectPrecentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend lije the service?
      </SelectPrecentage>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label> How Much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPrecentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0"> Dissatisfied (0%)</option>
        <option value="5"> It was ok (5%)</option>
        <option value="10"> It was good (10%)</option>
        <option value="20"> Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}> Reset</button>;
}

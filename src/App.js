import { useState } from "react";
import "./styles.css";
import Bill from "./Bill";
import MyServiceRating from "./MyServiceRating";
import FriendServiceRating from "./FriendServiceRating";
import Calculations from "./Calculations";
import ResetButton from "./ResetButton";

export const serviceRating = [
  {
    rating: "Dissatisfied",
    percent: 0,
  },
  {
    rating: "It was okay",
    percent: 5,
  },
  {
    rating: "It was good",
    percent: 10,
  },
  {
    rating: "Absolutely amazing",
    percent: 20,
  },
];

export default function App() {
  const [bill, setBill] = useState("");
  const [myRating, setMyRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);

  function handleBill(value) {
    setBill(value);
  }

  return (
    <div className="App">
      <Bill bill={bill} handleBill={handleBill} />
      <MyServiceRating rating={myRating} setRating={setMyRating} />
      <FriendServiceRating rating={friendRating} setRating={setFriendRating} />
      <Calculations bill={bill} rating1={myRating} rating2={friendRating} />
      <ResetButton
        bill={bill}
        handleBill={handleBill}
        setRating1={setMyRating}
        setRating2={setFriendRating}
      />
    </div>
  );
}

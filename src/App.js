import "./styles.css";

const serviceRating = [
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
  return (
    <div className="App">
      <Bill />
      <YourServiceRating />
      <FriendsServiceRating />
      <Calculations />
      <ResetButton />
    </div>
  );
}

function Bill() {
  return (
    <div>
      How much was the bill?
      <input type="text" id="billAmount" value="0" />
    </div>
  );
}

function YourServiceRating() {
  return (
    <div>
      How did you like the service?
      <select id="serviceRating">
        {serviceRating.map((option) => {
          return (
            <option value={option.rating}>
              {option.rating} ({option.percent}%)
            </option>
          );
        })}
      </select>
    </div>
  );
}

function FriendsServiceRating() {
  return (
    <div>
      How did your friend like the service?
      <select id="serviceRating">
        {serviceRating.map((option) => {
          return (
            <option value={option.rating}>
              {option.rating} ({option.percent}%)
            </option>
          );
        })}
      </select>
    </div>
  );
}

function Calculations() {
  return (
    <p>
      <b> You pay $X ($X + $Y tips) </b>
    </p>
  );
}

function ResetButton() {
  return (
    <p>
      <button> Reset </button>
    </p>
  );
}

import { serviceRating } from "./App";

export default function FriendServiceRating({ rating, setRating }) {
  console.log(rating);
  return (
    <div>
      How did your friend like the service?
      <select
        id="serviceRating"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      >
        {serviceRating.map((option) => {
          return (
            <option value={option.percent} key={option.rating}>
              {option.rating} ({option.percent}%)
            </option>
          );
        })}
      </select>
    </div>
  );
}

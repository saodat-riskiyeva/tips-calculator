import { serviceRating } from "./App";

export default function MyServiceRating({ rating, setRating }) {
  console.log(rating);
  return (
    <div>
      How did you like the service?
      <select
        id="serviceRating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
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

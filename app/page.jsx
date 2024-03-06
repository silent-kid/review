import { StarRating, OverallRating } from "@components/Rating";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="rating">
          <button className="cross">&times;</button>
          <h2>Review</h2>
          <hr />
          <h3>Safety</h3>
          <p>How would you rate the safety?</p>
          <StarRating />
          <h3>Communication</h3>
          <p>How well was the communication?</p>
          <StarRating />
          <h3>Would you recommend Trausti?</h3>
          <p>Mark based on your experience</p>
          <StarRating />
          <h3>Overall Rating</h3>
          <OverallRating />
          <button type="submit" className="submit">Submit</button>
        </div>
      </div>
    </>
  );
}

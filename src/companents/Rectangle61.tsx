
import React, { useState } from "react";
import { reviews,} from "./productsdata";

export default function Rectangle61() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev >= reviews.length - 3 ? 0 : prev + 1));
  };

  const previous = () => {
    setIndex((prev) => (prev === 0 ? reviews.length - 3 : prev - 1));
  };

  return (
    <div className="rectangle61-container">
      <div className="rectangle61-inner">
        <div className="rectangle61-header">
          <h2>Customer Reviews</h2>

          <div className="rectangle61-controls">
            <button onClick={previous} aria-label="Previous reviews">
              <span className="chevron chevron-left" />
            </button>

            <button onClick={next} aria-label="Next reviews">
              <span className="chevron chevron-right" />
            </button>
          </div>
        </div>

        <div className="rectangle61-list">
          {reviews.slice(index, index + 3).map((review) => (
            <article className="rectangle61-card" key={review.id}>
              <div className="rectangle61-top">
                <img
                  className="rectangle61-avatar"
                  src={review.image}
                  alt="Customer"
                />

                <div className="rectangle61-user">
                  <strong>{review.name}</strong>
                  <span>{review.location}</span>
                </div>

                <div className="rectangle61-info">
                  <div className="rectangle61-stars">★★★★★</div>
                  <div className="rectangle61-date">
                    <span>◷</span>
                    {review.date}
                  </div>
                </div>
              </div>

              <p className="rectangle61-text">{review.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rectangle61-rating">
        <div className="rectangle61-score">3.4</div>

        <div className="rectangle61-stars">
          <span>★★★</span><span className="half-star">★</span><span className="empty-star">★</span>
        </div>

        <div className="rectangle61-count">1,360 reviews</div>
      </div>
    </div>
  );
}

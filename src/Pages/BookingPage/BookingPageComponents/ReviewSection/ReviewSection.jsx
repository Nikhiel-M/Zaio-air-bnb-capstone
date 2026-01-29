import React from 'react'
import { ReviewSection } from './ReviewSection.styled' 
import ProgressBar from "../../../../components/GeneralComponents/ProgressBar/ProgressBar";

const ReviewBarSection = () => {
  const reviews = [
    { label: "Cleanliness", value: 80, ariaLabel: "cleanliness" },
    { label: "Communication", value: 75, ariaLabel: "communication" },
    { label: "Check-in", value: 55, ariaLabel: "check-in" },
    { label: "Accuracy", value: 80, ariaLabel: "accuracy" },
    { label: "Location", value: 75, ariaLabel: "location" },
    { label: "Value", value: 55, ariaLabel: "value" },
  ];

  return (
    <ReviewSection>
      {reviews.map((review) => (
        <div key={review.ariaLabel} className="reviewContainer">
          <div>{review.label}</div>
          <ProgressBar
            value={review.value}
            ariaLabel={review.ariaLabel}
            className="progressBar"
          />
        </div>
      ))}
    </ReviewSection>
  );
};

export default ReviewBarSection
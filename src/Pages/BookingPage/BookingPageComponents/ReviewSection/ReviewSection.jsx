import React from 'react'
import { ReviewSection } from './ReviewSection.styled' 
import ProgressBar from "../../../../components/GeneralComponents/ProgressBar/ProgressBar";

const ReviewBarSection = () => {
  return (
              <ReviewSection>
            <div className="reviewContainer">
              Cleanliness
              <ProgressBar
                value={80}
                ariaLabel="cleanliness"
                className="progressBar"
              />
            </div>
            <div className="reviewContainer">
              Communication
              <ProgressBar
                value={75}
                ariaLabel="commmunication"
                className="progressBar"
              />
            </div>
            <div className="reviewContainer">
              Check-in
              <ProgressBar
                value={55}
                ariaLabel="check-in"
                className="progressBar"
              />
            </div>
            <div className="reviewContainer">
              Accuracy
              <ProgressBar
                value={80}
                ariaLabel="Accuracy"
                className="progressBar"
              />
            </div>
            <div className="reviewContainer">
              Location
              <ProgressBar
                value={75}
                ariaLabel="Location"
                className="progressBar"
              />
            </div>
            <div className="reviewContainer">
              Value
              <ProgressBar
                value={55}
                ariaLabel="Value"
                className="progressBar"
              />
            </div>
          </ReviewSection>
  )
}

export default ReviewBarSection
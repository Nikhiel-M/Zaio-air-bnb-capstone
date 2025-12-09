import React from "react";
import { ProgressContainer, ProgressFill } from "./ProgressBar.styled";

const ProgressBar = ({ value = 0, color = "black", ariaLabel = "progress" }) => {
  const pct = Math.min(100, Math.max(0, +value));

  return (
    <ProgressContainer>
      <div
        className="progress"
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
      >
        <ProgressFill width={pct} color={color} />
      </div>
      <div className="amount">{pct}%</div>
    </ProgressContainer>
  );
};

export default ProgressBar;

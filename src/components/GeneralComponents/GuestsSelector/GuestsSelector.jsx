import React, { useState, useEffect, useRef } from "react";
import { GuestButton, GuestLI, GuestUL } from "./GuestsSelector.styled";

const GuestsSelector = ({ max = 1, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} style={{ width: "100%", position: "relative" }}>
      <GuestButton
        type="button"
        onClick={() => setOpen(!open)}
        style={{ }}
      >
        {value} {value === 1 ? "Guest" : "Guests"} ▼
      </GuestButton>

      {/* Dropdown */}
      {open && (
       <GuestUL>
          {Array.from({ length: max }, (_, i) => {
            const n = i + 1;

            return (
              <GuestLI
                key={n}
                onClick={() => {
                  onChange(n);
                  setOpen(false);
                }}
              
              >
                {n} {n === 1 ? "Guest" : "Guests"}
              </GuestLI>
            );
          })}
        </GuestUL>
      )}
    </div>
  );
};

export default GuestsSelector;

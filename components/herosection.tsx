import React from "react";
var ageCalculator = require("age-calculator");
let { AgeFromDate } = ageCalculator;

export default function HeroSection() {
  const birthdate = new Date(2003, 3, 19); // April 19, 2003 (Note: Month is 0-indexed)
  let age = new AgeFromDate(birthdate).age;
  let university = "Thammasat University";
  let Bachelor = "Computer Science";
  return (
    <div className="hero" style={{ minHeight: "30vh" }}>
      <div className="hero-content flex-col lg:flex-row">
        <div className="avatar online flex items-center justify-center">
          <div className="w-60 rounded-full">
            <img src="/people/NooobtimeX.webp" alt="Avatar" />
          </div>
        </div>
        <div>
          <span className="px-1 text-3xl font-semibold">
            Portfolio
            <br />
          </span>
          <h2 className="text-5xl font-bold">
            Wongsaphat Puangsorn <span className="text-2xl">{age}</span>
          </h2>
          <span className="flex items-center px-1 text-3xl font-semibold">
            {university}
          </span>
          <span className="px-1 text-2xl font-semibold">
            {Bachelor}
            <br />
          </span>
        </div>
      </div>
    </div>
  );
}

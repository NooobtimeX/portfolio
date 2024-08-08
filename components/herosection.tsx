import React from "react";
var ageCalculator = require("age-calculator");
let { AgeFromDate } = ageCalculator;

export default function HeroSection() {
  const birthdate = new Date(2003, 3, 19); // April 19, 2003 (Note: Month is 0-indexed)
  let age = new AgeFromDate(birthdate).age;
  let university = "Thammasat University";
  let Bachelor = "Computer Science";
  return (
    <div className="hero bg-base-200" style={{ minHeight: "30vh" }}>
      <div className="hero-content flex-col lg:flex-row">
        <div className="avatar online flex items-center justify-center">
          <div className="w-60 rounded-full">
            <img src="/people/NooobtimeX.webp" alt="Avatar" />
          </div>
        </div>
        <div>
          <span className="text-3xl px-1 font-semibold">
            Portfolio
            <br />
          </span>
          <span className="text-3xl px-1 font-semibold">
            Male | {age} years old
          </span>
          <h2 className="text-5xl font-bold">Wongsaphat Puangsorn</h2>
          <span className="text-3xl px-1 font-semibold flex items-center">
            {university}
          </span>
          <span className="text-2xl  px-1 font-semibold">
            {Bachelor}
            <br />
          </span>
        </div>
      </div>
    </div>
  );
}

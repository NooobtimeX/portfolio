import React from "react";
var ageCalculator = require("age-calculator");
let { AgeFromDate } = ageCalculator;

export default function HeroSection() {
  const birthdate = new Date(2003, 3, 19); // April 19, 2003 (Note: Month is 0-indexed)
  let gender = "Male";
  let age = new AgeFromDate(birthdate).age;
  let university = "Thammasat University";
  return (
    <div className="hero bg-base-200" style={{ minHeight: "30vh" }}>
      <div className="hero-content flex-col lg:flex-row">
        <div className="avatar online flex items-center justify-center">
          <div className="w-24 rounded-full">
            <img src="/people/NooobtimeX.jpg" alt="Avatar" />
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold">Wongsaphat Puangsorn</h1>
          <p className="p-1">{university}</p>
          <span className="p-1">{gender}</span>
          <span className="p-1">Age: {age}</span>
        </div>
      </div>
    </div>
  );
}

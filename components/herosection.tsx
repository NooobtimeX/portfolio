import React from "react";
var ageCalculator = require("age-calculator");
let { AgeFromDate } = ageCalculator;

export default function HeroSection() {
  const birthdate = new Date(2003, 3, 19); // April 19, 2003 (Note: Month is 0-indexed)
  let age = new AgeFromDate(birthdate).age;
  let university = "Thammasat University";
  let bachelor = "Computer Science";

  return (
    <div className="hero rounded-xl bg-gray-800 bg-gradient-to-r text-white">
      <div className="hero-content flex flex-col items-center justify-center p-8 lg:flex-row">
        <div className="avatar online mb-6 flex items-center justify-center lg:mb-0">
          <div className="h-40 w-40 overflow-hidden rounded-full shadow-lg">
            <img
              src="/people/NooobtimeX.webp"
              alt="Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="text-center lg:ml-8 lg:text-left">
          <span className="text-3xl font-semibold">Portfolio</span>
          <h2 className="mt-2 text-5xl font-bold">
            Wongsaphat Puangsorn <span className="text-2xl">{age}</span>
          </h2>
          <span className="text-3xl font-semibold">{university}</span>
          <p className="mt-1 text-2xl font-semibold">{bachelor}</p>
        </div>
      </div>
    </div>
  );
}

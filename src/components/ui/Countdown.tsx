"use client";
import Countdown from "react-countdown";

const CountDown = () => {
  const today = new Date();
  const regAt = new Date("2024-03-09");
  const regAtDiff = regAt.getTime() - today.getTime();
  console.log(regAtDiff);
  return (
    <Countdown
      date={Date.now() + regAtDiff}
      className="bg-gradient-to-r from-primary to-secondary -mt-4 bg-clip-text text-6xl font-bold text-transparent"
    />
  );
};

export default CountDown;

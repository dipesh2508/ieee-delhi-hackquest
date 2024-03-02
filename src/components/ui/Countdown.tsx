"use client";
import Countdown from "react-countdown";

const CountDown = () => {
  const today = new Date();
  const regAt = new Date("2024-03-19T23:59:59.999Z");
  const regAtDiff = regAt.getTime() - today.getTime();
  console.log(regAtDiff);
  return (
    <Countdown
      date={Date.now() + regAtDiff}
      className="bg-gradient-to-r from-primary to-secondary -mt-4 bg-clip-text text-4xl md:text-6xl justify-center text-center items-center font-bold text-transparent"
    />
  );
};

export default CountDown;

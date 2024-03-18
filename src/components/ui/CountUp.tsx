"use client";

import { CountUp } from "use-count-up";

const CountUpDiv = ({ end, duration }: { end: number; duration: number }) => {
  return <CountUp isCounting end={end} duration={duration} />;
};

export default CountUpDiv;

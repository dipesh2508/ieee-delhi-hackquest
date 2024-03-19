"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { CountUp } from "use-count-up";

const CountUpDiv = ({ end, duration }: { end: number; duration: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <div ref={ref}>
      {isInView ? <CountUp isCounting end={end} duration={duration} /> : <></>}
    </div>
  );
};

export default CountUpDiv;

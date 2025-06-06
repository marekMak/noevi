"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

type CounterProps = {
  num: number;
};

const Counter = ({ num }: CounterProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return <div ref={ref}>{inView && <CountUp end={num} duration={2} />}</div>;
};

export default Counter;

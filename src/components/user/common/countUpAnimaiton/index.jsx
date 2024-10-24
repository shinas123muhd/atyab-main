import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const CoutnUpAnimation = ({ value }) => {
  const [isAnimateStart, setAnimateStart] = useState(false);
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      setAnimateStart(true);
    }
  }, [inView]);
  return (
    <div ref={ref}>
      {isAnimateStart && <CountUp end={value} duration={2} />}
    </div>
  );
};

export default CoutnUpAnimation;

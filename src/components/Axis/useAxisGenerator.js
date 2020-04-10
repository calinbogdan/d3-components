import { useRef, useEffect } from "react";
import { select, axisBottom, axisTop, axisLeft, axisRight } from "d3";

const axisOrientationToGenerator = {
  top: axisTop,
  bottom: axisBottom,
  left: axisLeft,
  right: axisRight,
};

function useAxisGenerator(orientation, scale) {
  const axisRef = useRef();

  useEffect(() => {
    select(axisRef.current).call(
      axisOrientationToGenerator[orientation](scale).tickSize(2)
    );
  }, [orientation, scale]);

  return axisRef;
}

export default useAxisGenerator;

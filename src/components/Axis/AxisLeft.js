import React, { useState, useEffect } from "react";
import useAxisGenerator from "./useAxisGenerator";
import AxisWrapper from "./AxisWrapper";

const AxisLeft = (props) => {
  const axisRef = useAxisGenerator("left", props.scale);
  const [height, setHeight] = useState(props.scale.range()[1]);

  useEffect(() => {
    setHeight(props.scale.range()[1]);
  }, [props.scale]);

  return <AxisWrapper height={height} width={25} ref={axisRef} />;
};

export default AxisLeft;
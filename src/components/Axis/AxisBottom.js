import React, { useState, useEffect } from "react";
import useAxisGenerator from "./useAxisGenerator";
import AxisWrapper from "./AxisWrapper";

const AxisBottom = (props) => {
  const axisRef = useAxisGenerator("bottom", props.scale);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(props.scale.range()[1]);
  }, [props.scale]);

  return <AxisWrapper height={25} width={width} ref={axisRef} {...props} />;
};

export default AxisBottom;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import AxisBottom from "../Axis/AxisBottom";
import AxisLeft from "../Axis/AxisLeft";
import { line } from "d3";

import "./LineChart.css";

const LineChart = (props) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setHeight(props.yScale?.range()[1] ?? 0);
    setWidth(props.xScale?.range()[1] ?? 0);
  }, [props.xScale, props.yScale]);

  const lineWith = line()
    .x((d) => d.x)
    .y((d) => d.y);

  return (
    <svg
      className="LineChart"
      overflow="visible"
      height={height}
      width={width}
      {...props}
    >
      <path d={lineWith(props.data)} />
      {/* {props.horizontalLines && } */}
      <AxisLeft scale={props.yScale} />
      <AxisBottom scale={props.xScale} y={height} />
    </svg>
  );
};

LineChart.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  data: PropTypes.array.isRequired,
};

export default LineChart;

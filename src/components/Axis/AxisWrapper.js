import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const AxisWrapper = forwardRef((props, ref) => (
  <svg overflow="visible" width={props.width} height={props.height} {...props}>
    <g ref={ref} />
  </svg>
));

AxisWrapper.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default AxisWrapper;
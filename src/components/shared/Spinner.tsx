import React, { CSSProperties } from "react";

import "./styles/spinner.css";

interface Props {
  /*
   * Spinner
   * @props
   * style: CSS properties to modify the appearance of the spinner
   */
  style?: CSSProperties;
}

const Spinner = ({ style }: Props) => {
  return <div className="spinner" style={style}></div>;
};

export default Spinner;

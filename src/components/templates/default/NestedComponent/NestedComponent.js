import React, { useState } from "react";
import PropTypes from "prop-types";
import { borders, background } from "./NestedComponent.module.scss";

export const KeyValueComponent = ({ label, value }) => {
  const [show, setShow] = useState(true);
  const toggleShow = () => setShow(!show);
  return (
    <div key={label} className={borders}>
      <div
        className={`p-4 ${background}`}
        onClick={toggleShow}
        data-component-id="toggle-display"
      >
        {label}
      </div>
      <div
        className={`p-4 text-truncate ${show ? "" : "d-none"}`}
        data-component-id="displayed-value"
      >
        {NestedComponent({ children: value })}
      </div>
    </div>
  );
};

const NestedComponent = ({ children }) => {
  if (typeof children !== "object") {
    return children.toString();
  } else {
    const grandchildren = Object.keys(children).map(key =>
      KeyValueComponent({ label: key, value: children[key] })
    );
    return <div className={borders}>{grandchildren}</div>;
  }
};

export default NestedComponent;

NestedComponent.propTypes = {
  children: PropTypes.any
};

KeyValueComponent.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any
};

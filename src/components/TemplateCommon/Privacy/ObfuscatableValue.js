import React from "react";
import PropTypes from "prop-types";
import css from "./obfuscatableValueStyles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const ObfuscatableValue = ({ field, value, handleObfuscation, editable }) =>
  value ? (
    <div
      onClick={() => {
        if (editable) {
          handleObfuscation(field);
        }
      }}
      style={{ display: "inline-block" }}
    >
      {value}{" "}
      {editable && (
        <FontAwesomeIcon
          icon={faTimes}
          cursor="pointer"
          className={`${css["remove-icon"]}`}
          style={{ color: "red" }}
        />
      )}
    </div>
  ) : null;

ObfuscatableValue.propTypes = {
  field: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleObfuscation: PropTypes.func,
  editable: PropTypes.bool
};

export default ObfuscatableValue;

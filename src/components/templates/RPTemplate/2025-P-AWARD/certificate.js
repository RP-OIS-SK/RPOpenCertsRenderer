import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoRPLeft,
  renderHeaderImage,
  renderPETAwardText,
  renderOneSignature
} from "../common/certificate";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderHeaderImage()}
      {renderLogoRPLeft(2024)}
      {renderPETAwardText(document)}
      {renderOneSignature(document, 2024)}
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

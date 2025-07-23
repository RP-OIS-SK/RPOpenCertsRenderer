import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoRPLeft,
  renderPETAwardText,
  renderOneSignature
} from "../common/certificate";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderLogoRPLeft(2022)}
      {renderPETAwardText(document)}
      {renderOneSignature(document, 2000)}
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

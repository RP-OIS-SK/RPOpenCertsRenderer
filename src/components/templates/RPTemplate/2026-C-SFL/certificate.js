import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoRPSF,
  renderPETAwardText,
  renderTwoSignaturesAwards
} from "../common/certificate";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderLogoRPSF("Special", "Awards", 2024)}
      {renderPETAwardText(document)}
      {renderTwoSignaturesAwards(document, 2024)}
    </div>
  </div>
);
Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

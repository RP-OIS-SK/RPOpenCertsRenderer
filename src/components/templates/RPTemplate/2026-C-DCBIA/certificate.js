import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoNPRP,
  renderAwardText,
  renderTwoSignatures,
  renderFooter
} from "../common/certificate";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderLogoNPRP(2024)}
      {renderAwardText(document)}
      {renderTwoSignatures(document, 1)}
    </div>
    {renderFooter(document)}
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoRP,
  renderAwardText,
  renderTwoSignatures,
  renderLogoRPPartner,
  renderFooter
} from "../common/certificate";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderLogoRP(2024)}
      {renderAwardText(document)}
      {renderTwoSignatures(document, 0)}
      {renderLogoRPPartner(1, 2024)}
    </div>
    {renderFooter(document)}
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

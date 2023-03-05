import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoRP,
  renderAwardTextPFP,
  renderTwoSignatures,
  renderFooter
} from "../common/certificate";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderLogoRP()}
      {renderAwardTextPFP(document)}
      {renderTwoSignatures(document, 4)}
    </div>
    {renderFooter(document)}
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

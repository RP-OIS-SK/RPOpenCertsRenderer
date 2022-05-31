import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoRPLeftText,
  renderPETAwardText,
  renderTwoSignaturesAwards
} from "../common/certificate";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderLogoRPLeftText("EAE", "Award")}
      {renderPETAwardText(document)}
      {renderTwoSignaturesAwards(document)}
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

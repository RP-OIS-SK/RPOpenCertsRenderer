import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoRPLeft,
  renderCOAAwardTextEMP,
  renderCOAOneSignature
} from "../common/certificate";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderLogoRPLeft()}
      {renderCOAAwardTextEMP(document)}
      {renderCOAOneSignature(document)}
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

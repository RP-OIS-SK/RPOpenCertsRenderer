import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoRPLeft,
  renderCOAAwardTextDROH,
  renderCOAOneSignature
} from "../common/certificate";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderLogoRPLeft()}
      {renderCOAAwardTextDROH(document)}
      {renderCOAOneSignature(document)}
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

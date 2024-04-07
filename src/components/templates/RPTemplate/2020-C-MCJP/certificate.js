import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoRP,
  renderAwardTextCET,
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
      {renderLogoRP(2020)}
      {renderAwardTextCET(document, 1)}
      {renderTwoSignatures(document, 2)}
      {renderLogoRPPartner(1)}
    </div>
    {renderFooter(document)}
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

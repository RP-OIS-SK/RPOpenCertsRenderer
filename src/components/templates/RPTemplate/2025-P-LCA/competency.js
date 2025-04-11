import PropTypes from "prop-types";
import React from "react";
import {
  renderHeader,
  renderCompetency,
  renderOneSignature
} from "../common/competency";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderHeader(document)}
      {renderCompetency(document)}
      {renderOneSignature(document, 0)}
    </div>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

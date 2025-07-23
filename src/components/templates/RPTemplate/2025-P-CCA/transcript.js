import PropTypes from "prop-types";
import React from "react";
import { renderHeader, renderTranscript } from "../common/CCATranscript";

const Template = ({ document }) => (
  <div className="container" style={{ fontSize: "0.9rem" }}>
    {renderHeader(2025)}
    {renderTranscript(document)}
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

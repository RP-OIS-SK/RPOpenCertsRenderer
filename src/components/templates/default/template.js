import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import NestedComponent from "./NestedComponent";

const Template = ({ document }) => (
  <div className="container">
    <NestedComponent>{document}</NestedComponent>
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};

export default Template;

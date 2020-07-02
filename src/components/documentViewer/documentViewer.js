import React from "react";
import PropTypes from "prop-types";
import { documentTemplates } from "./utils";

const DocumentViewer = props => {
  const { tabIndex, document, handleHeightUpdate, handleObfuscation } = props;
  const templates = documentTemplates(document, handleHeightUpdate);
  const Template = templates[tabIndex].template;

  return <Template document={document} handleObfuscation={handleObfuscation} />;
};

DocumentViewer.propTypes = {
  document: PropTypes.object.isRequired,
  tabIndex: PropTypes.number,
  handleHeightUpdate: PropTypes.func.isRequired,
  handleObfuscation: PropTypes.func
};

export default DocumentViewer;

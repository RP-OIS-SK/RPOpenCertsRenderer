// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

// TODO: Use dynamic loading to prevent all templates to be loaded at once.
import DefaultTemplate from "./default";
import CustomTemplate from "./customTemplate";
import GovTechDemoCert from "./govtechDemoCert";
import RP_2020_P_MAIN from "./RPTemplate/2020-P-MAIN";
import RP_2020_P_CCA from "./RPTemplate/2020-P-CCA";

export default {
  default: DefaultTemplate,
  CUSTOM_TEMPLATE: CustomTemplate,
  GOVTECH_DEMO: GovTechDemoCert,
  RP_2020_P_MAIN: RP_2020_P_MAIN,
  RP_2020_P_CCA: RP_2020_P_CCA,
  NULL: []
};

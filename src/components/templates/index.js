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
import RP_2020_C_DCBIA from "./RPTemplate/2020-C-DCBIA";
import RP_2020_C_DCJP from "./RPTemplate/2020-C-DCJP";
import RP_2020_C_DCN from "./RPTemplate/2020-C-DCN";
import RP_2020_C_DCSU from "./RPTemplate/2020-C-DCSU";
import RP_2020_C_DPLUS from "./RPTemplate/2020-C-DPLUS";
import RP_2020_C_MC from "./RPTemplate/2020-C-MC";
import RP_2020_C_MCBIA from "./RPTemplate/2020-C-MCBIA";
import RP_2020_C_MCJP from "./RPTemplate/2020-C-MCJP";
import RP_2020_C_MCSU from "./RPTemplate/2020-C-MCSU";

export default {
  default: DefaultTemplate,
  CUSTOM_TEMPLATE: CustomTemplate,
  GOVTECH_DEMO: GovTechDemoCert,
  RP_2020_P_MAIN: RP_2020_P_MAIN,
  RP_2020_P_CCA: RP_2020_P_CCA,
  RP_2020_C_DCBIA: RP_2020_C_DCBIA,
  RP_2020_C_DCJP: RP_2020_C_DCJP,
  RP_2020_C_DCN: RP_2020_C_DCN,
  RP_2020_C_DCSU: RP_2020_C_DCSU,
  RP_2020_C_DPLUS: RP_2020_C_DPLUS,
  RP_2020_C_MC: RP_2020_C_MC,
  RP_2020_C_MCBIA: RP_2020_C_MCBIA,
  RP_2020_C_MCJP: RP_2020_C_MCJP,
  RP_2020_C_MCSU: RP_2020_C_MCSU,
  NULL: []
};

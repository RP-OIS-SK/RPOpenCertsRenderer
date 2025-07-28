// This file is the template registry serves as the template registry.
// When templates are loaded, their name will be compared to the keys of the
// exported object and that template will be used. If a template cannot be
// found, the default template will be used instead.

// TODO: Use dynamic loading to prevent all templates to be loaded at once.
import DefaultTemplate from "./default";
import CustomTemplate from "./customTemplate";
import GovTechDemoCert from "./govtechDemoCert";
import RP_2024_P_MINOR from "./RPTemplate/2024-P-MINOR";
import RP_2025_P_MINOR from "./RPTemplate/2025-P-MINOR";
import RP_2024_P_NMAIN from "./RPTemplate/2024-P-NMAIN";
import RP_2025_P_NMAIN from "./RPTemplate/2025-P-NMAIN";
import RP_2025_P_MAIN from "./RPTemplate/2025-P-MAIN";
import RP_2024_P_MAIN from "./RPTemplate/2024-P-MAIN";
import RP_2020_P_MAIN from "./RPTemplate/2020-P-MAIN";
import RP_2010_P_MAIN from "./RPTemplate/2010-P-MAIN";
import RP_2006_P_MAIN from "./RPTemplate/2006-P-MAIN";
import RP_2020_P_CCA from "./RPTemplate/2020-P-CCA";
import RP_2025_P_CCA from "./RPTemplate/2025-P-CCA";
import RP_2020_C_DCBIA from "./RPTemplate/2020-C-DCBIA";
import RP_2022_C_DCBIA from "./RPTemplate/2022-C-DCBIA";
import RP_2024_C_DCBIA from "./RPTemplate/2024-C-DCBIA";
import RP_2025_C_DCBIA from "./RPTemplate/2025-C-DCBIA";
import RP_2020_C_DCJP from "./RPTemplate/2020-C-DCJP";
import RP_2022_C_DCJP from "./RPTemplate/2022-C-DCJP";
import RP_2024_C_DCJP from "./RPTemplate/2024-C-DCJP";
import RP_2025_C_DCJP from "./RPTemplate/2025-C-DCJP";
import RP_2020_C_DCN from "./RPTemplate/2020-C-DCN";
import RP_2022_C_DCN from "./RPTemplate/2022-C-DCN";
import RP_2024_C_DCN from "./RPTemplate/2024-C-DCN";
import RP_2025_C_DCN from "./RPTemplate/2025-C-DCN";
import RP_2020_C_DCSU from "./RPTemplate/2020-C-DCSU";
import RP_2022_C_DCSU from "./RPTemplate/2022-C-DCSU";
import RP_2024_C_DCSU from "./RPTemplate/2024-C-DCSU";
import RP_2025_C_DCSU from "./RPTemplate/2025-C-DCSU";
import RP_2021_C_DCCMW from "./RPTemplate/2021-C-DCCMW";
import RP_2024_C_DCCMW from "./RPTemplate/2024-C-DCCMW";
import RP_2025_C_DCCMW from "./RPTemplate/2025-C-DCCMW";
import RP_2020_C_DPLUS from "./RPTemplate/2020-C-DPLUS";
import RP_2022_C_DPLUS from "./RPTemplate/2022-C-DPLUS";
import RP_2024_C_DPLUS from "./RPTemplate/2024-C-DPLUS";
import RP_2025_C_DPLUS from "./RPTemplate/2025-C-DPLUS";
import RP_2022_C_DCSD from "./RPTemplate/2022-C-DCSD";
import RP_2024_C_DCSD from "./RPTemplate/2024-C-DCSD";
import RP_2025_C_DCSD from "./RPTemplate/2025-C-DCSD";
import RP_2024_C_DCSE from "./RPTemplate/2024-C-DCSE";
import RP_2025_C_DCSE from "./RPTemplate/2025-C-DCSE";
import RP_2020_C_MC from "./RPTemplate/2020-C-MC";
import RP_2022_C_MC from "./RPTemplate/2022-C-MC";
import RP_2024_C_MC from "./RPTemplate/2024-C-MC";
import RP_2025_C_MC from "./RPTemplate/2025-C-MC";
import RP_2020_C_MCBIA from "./RPTemplate/2020-C-MCBIA";
import RP_2022_C_MCBIA from "./RPTemplate/2022-C-MCBIA";
import RP_2024_C_MCBIA from "./RPTemplate/2024-C-MCBIA";
import RP_2025_C_MCBIA from "./RPTemplate/2025-C-MCBIA";
import RP_2020_C_MCJP from "./RPTemplate/2020-C-MCJP";
import RP_2022_C_MCJP from "./RPTemplate/2022-C-MCJP";
import RP_2024_C_MCJP from "./RPTemplate/2024-C-MCJP";
import RP_2025_C_MCJP from "./RPTemplate/2025-C-MCJP";
import RP_2020_C_MCSU from "./RPTemplate/2020-C-MCSU";
import RP_2022_C_MCSU from "./RPTemplate/2022-C-MCSU";
import RP_2024_C_MCSU from "./RPTemplate/2024-C-MCSU";
import RP_2025_C_MCSU from "./RPTemplate/2025-C-MCSU";
import RP_2024_C_MCSE from "./RPTemplate/2024-C-MCSE";
import RP_2025_C_MCSE from "./RPTemplate/2025-C-MCSE";
import RP_2021_P_AWARD from "./RPTemplate/2021-P-AWARD";
import RP_2024_P_AWARD from "./RPTemplate/2024-P-AWARD";
import RP_2025_P_AWARD from "./RPTemplate/2025-P-AWARD";
import RP_2022_P_COA_DROH from "./RPTemplate/2022-P-COA-DROH";
import RP_2022_D_COA_EMP from "./RPTemplate/2022-D-COA-EMP";
import RP_2022_P_BOG from "./RPTemplate/2022-P-BOG";
import RP_2025_P_BOG from "./RPTemplate/2025-P-BOG";
import RP_2022_P_BPRZ from "./RPTemplate/2022-P-BPRZ";
import RP_2025_P_BPRZ from "./RPTemplate/2025-P-BPRZ";
import RP_2022_P_EAE from "./RPTemplate/2022-P-EAE";
import RP_2025_P_EAE from "./RPTemplate/2025-P-EAE";
import RP_2022_P_SCHS from "./RPTemplate/2022-P-SCHS";
import RP_2024_P_SCHS from "./RPTemplate/2024-P-SCHS";
import RP_2025_P_SCHS from "./RPTemplate/2025-P-SCHS";
import RP_2022_P_NAK from "./RPTemplate/2022-P-NAK";
import RP_2024_P_NAK from "./RPTemplate/2024-P-NAK";
import RP_2025_P_NAK from "./RPTemplate/2025-P-NAK";
import RP_2022_P_PFP from "./RPTemplate/2022-P-PFP";
import RP_2024_P_PFP from "./RPTemplate/2024-P-PFP";
import RP_2025_P_PFP from "./RPTemplate/2025-P-PFP";
import RP_2023_P_LCA from "./RPTemplate/2023-P-LCA";
import RP_2024_P_LCA from "./RPTemplate/2024-P-LCA";
import RP_2025_P_LCA from "./RPTemplate/2025-P-LCA";

export default {
  default: DefaultTemplate,
  CUSTOM_TEMPLATE: CustomTemplate,
  GOVTECH_DEMO: GovTechDemoCert,
  RP_2024_P_MINOR: RP_2024_P_MINOR,
  RP_2025_P_MINOR: RP_2025_P_MINOR,
  RP_2024_P_NMAIN: RP_2024_P_NMAIN,
  RP_2025_P_NMAIN: RP_2025_P_NMAIN,
  RP_2006_P_MAIN: RP_2006_P_MAIN,
  RP_2010_P_MAIN: RP_2010_P_MAIN,
  RP_2020_P_MAIN: RP_2020_P_MAIN,
  RP_2024_P_MAIN: RP_2024_P_MAIN,
  RP_2025_P_MAIN: RP_2025_P_MAIN,
  RP_2020_P_CCA: RP_2020_P_CCA,
  RP_2025_P_CCA: RP_2025_P_CCA,
  RP_2020_C_DCBIA: RP_2020_C_DCBIA,
  RP_2022_C_DCBIA: RP_2022_C_DCBIA,
  RP_2024_C_DCBIA: RP_2024_C_DCBIA,
  RP_2025_C_DCBIA: RP_2025_C_DCBIA,
  RP_2020_C_DCJP: RP_2020_C_DCJP,
  RP_2022_C_DCJP: RP_2022_C_DCJP,
  RP_2024_C_DCJP: RP_2024_C_DCJP,
  RP_2025_C_DCJP: RP_2025_C_DCJP,
  RP_2020_C_DCN: RP_2020_C_DCN,
  RP_2022_C_DCN: RP_2022_C_DCN,
  RP_2024_C_DCN: RP_2024_C_DCN,
  RP_2025_C_DCN: RP_2025_C_DCN,
  RP_2020_C_DCSU: RP_2020_C_DCSU,
  RP_2022_C_DCSU: RP_2022_C_DCSU,
  RP_2024_C_DCSU: RP_2024_C_DCSU,
  RP_2025_C_DCSU: RP_2025_C_DCSU,
  RP_2020_C_DPLUS: RP_2020_C_DPLUS,
  RP_2022_C_DPLUS: RP_2022_C_DPLUS,
  RP_2024_C_DPLUS: RP_2024_C_DPLUS,
  RP_2025_C_DPLUS: RP_2025_C_DPLUS,
  RP_2022_C_DCSD: RP_2022_C_DCSD,
  RP_2024_C_DCSD: RP_2024_C_DCSD,
  RP_2025_C_DCSD: RP_2025_C_DCSD,
  RP_2021_C_DCCMW: RP_2021_C_DCCMW,
  RP_2024_C_DCCMW: RP_2024_C_DCCMW,
  RP_2025_C_DCCMW: RP_2025_C_DCCMW,
  RP_2024_C_DCSE: RP_2024_C_DCSE,
  RP_2025_C_DCSE: RP_2025_C_DCSE,
  RP_2020_C_MC: RP_2020_C_MC,
  RP_2022_C_MC: RP_2022_C_MC,
  RP_2024_C_MC: RP_2024_C_MC,
  RP_2025_C_MC: RP_2025_C_MC,
  RP_2020_C_MCBIA: RP_2020_C_MCBIA,
  RP_2022_C_MCBIA: RP_2022_C_MCBIA,
  RP_2024_C_MCBIA: RP_2024_C_MCBIA,
  RP_2025_C_MCBIA: RP_2025_C_MCBIA,
  RP_2020_C_MCJP: RP_2020_C_MCJP,
  RP_2022_C_MCJP: RP_2022_C_MCJP,
  RP_2024_C_MCJP: RP_2024_C_MCJP,
  RP_2025_C_MCJP: RP_2025_C_MCJP,
  RP_2020_C_MCSU: RP_2020_C_MCSU,
  RP_2022_C_MCSU: RP_2022_C_MCSU,
  RP_2024_C_MCSU: RP_2024_C_MCSU,
  RP_2025_C_MCSU: RP_2025_C_MCSU,
  RP_2024_C_MCSE: RP_2024_C_MCSE,
  RP_2025_C_MCSE: RP_2025_C_MCSE,
  RP_2021_P_AWARD: RP_2021_P_AWARD,
  RP_2024_P_AWARD: RP_2024_P_AWARD,
  RP_2025_P_AWARD: RP_2025_P_AWARD,
  RP_2022_P_COA_DROH: RP_2022_P_COA_DROH,
  RP_2022_D_COA_EMP: RP_2022_D_COA_EMP,
  RP_2022_P_BOG: RP_2022_P_BOG,
  RP_2025_P_BOG: RP_2025_P_BOG,
  RP_2022_P_BPRZ: RP_2022_P_BPRZ,
  RP_2025_P_BPRZ: RP_2025_P_BPRZ,
  RP_2022_P_EAE: RP_2022_P_EAE,
  RP_2025_P_EAE: RP_2025_P_EAE,
  RP_2022_P_SCHS: RP_2022_P_SCHS,
  RP_2024_P_SCHS: RP_2024_P_SCHS,
  RP_2025_P_SCHS: RP_2025_P_SCHS,
  RP_2022_P_NAK: RP_2022_P_NAK,
  RP_2024_P_NAK: RP_2024_P_NAK,
  RP_2025_P_NAK: RP_2025_P_NAK,
  RP_2022_P_PFP: RP_2022_P_PFP,
  RP_2024_P_PFP: RP_2024_P_PFP,
  RP_2025_P_PFP: RP_2025_P_PFP,
  RP_2023_P_LCA: RP_2023_P_LCA,
  RP_2024_P_LCA: RP_2024_P_LCA,
  RP_2025_P_LCA: RP_2025_P_LCA,
  NULL: []
};

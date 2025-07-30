import { get } from "lodash";
import React from "react";
import {
  IMG_LOGO_RP,
  IMG_AWARD_LOGO_RP,
  IMG_AWARD_LOGO_RP24,
  IMG_CERTIFICATE_SEAL_PFP,
  IMG_CERTIFICATE_SEAL_PFP_25,
  IMG_CERTIFICATE_SEAL,
  IMG_CERTIFICATE_SEAL_25,
  IMG_LOGO_ALLPOLY,
  IMG_LOGO_ALLPOLY24,
  IMG_LOGO_SUSS,
  IMG_LOGO_NP,
  IMG_LOGO_NPRP,
  IMG_LOGO_NP24,
  IMG_LOGO_NP24RP,
  IMG_LOGO_NYP,
  IMG_LOGO_NYP24,
  IMG_LOGO_NYP_SEAL,
  IMG_LOGO_NYP_SEAL25,
  IMG_LOGO_RPTP,
  IMG_LOGO_RPSP,
  IMG_LOGO_RP24L,
  IMG_LOGO_RP24TP,
  IMG_LOGO_RP24SP,
  IMG_LOGO_HEADER,
  IMG_LOGO_FOOTER
} from "./images";

import {
  formatDDMMMYYYY,
  formatDate,
  formatDatePrefix,
  formatCertName,
  formatSignatoriesPosition
} from "./functions";

export const RPlogoAwardStyle = {
  textAlign: "left",
  width: "auto",
  height: "auto"
};
export const logoLStyle = {
  textAlign: "left",
  width: "100%",
  height: "auto"
};
export const logoRStyle = {
  width: "100%",
  height: "auto",
  textAlign: "right"
};
export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};
export const sealWidthStyle = {
  width: "95%",
  height: "auto",
  textAlign: "center"
};

export const sealWidthStyle2 = {
  width: "80%",
  height: "auto",
  textAlign: "center"
};

export const signatureTextStyle = {
  color: "#090",
  fontWeight: "bold",
  fontSize: "1.1rem"
};

export const compSignatureTextStyle = {
  color: "#090",
  fontWeight: "bold",
  fontSize: "1.1rem",
  textTransform: "uppercase"
};

export const printCertStyle = {
  fontFamily: "Old English Text MT",
  fontWeight: "bold",
  fontSize: "3rem",
  color: "#555",
  textAlign: "center"
};
export const printCertStyle24 = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "3rem",
  color: "#555",
  textAlign: "center"
};
export const printAwardCertTitleStyle = {
  fontFamily: "Times New Roman",
  fontSize: "3.5rem",
  color: "#008000",
  textAlign: "center"
};
export const printAwardCertTitleStyle24 = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "3.5rem",
  color: "#008000",
  textAlign: "center"
};
export const printPAwardCertTitleStyle = {
  fontFamily: "Californian FB",
  fontSize: "3.5rem",
  color: "#008000",
  textAlign: "center"
};
export const printPAwardCertTitleStyle24 = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "3.5rem",
  color: "#008000",
  textAlign: "center"
};

export const printPAwardCertRecipentStyle = {
  fontFamily: "Californian FB",
  fontSize: "3.5rem",
  color: "#008000",
  textAlign: "center"
};
export const printPAwardCertRecipentStyle24 = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "3.0rem",
  color: "#555",
  textAlign: "center"
};
export const printAwardDipTitleStyle = {
  fontFamily: "Times New Roman",
  fontSize: "2.5rem",
  color: "#008000",
  textAlign: "center"
};
export const printAwardDipTitleStyle24 = {
  fontFamily: "Arial",
  fontSize: "2.5rem",
  color: "#008000",
  textAlign: "center"
};
export const printPAAwardDipTitleStyle = {
  fontFamily: "Californian FB",
  fontSize: "2.5rem",
  color: "#008000",
  textAlign: "center"
};

export const printSCCertStyle = {
  fontFamily: "Old English Text MT",
  fontWeight: "bold",
  fontSize: "3.5rem",
  color: "#000",
  textAlign: "center"
};
export const PAsignatureTextStyle = {
  fontFamily: "Arial",
  fontSize: "1.4rem"
};
export const PAsignatureDateTextStyle = {
  fontFamily: "Arial",
  fontSize: "1.0rem"
};
export const SCsignatureTextStyle = {
  fontFamily: "High Tower Text",
  fontSize: "1.4rem"
};
export const printSCRecipentStyle = {
  fontFamily: "High Tower Text",
  fontWeight: "900!important",
  fontStyle: "italic",
  fontSize: "2.5rem",
  color: "#000",
  textAlign: "center"
};
export const printSCTextStyle1 = {
  fontFamily: "High Tower Text",
  fontWeight: "500!important",
  fontStyle: "italic",
  fontSize: "1.6rem",
  color: "#555",
  textAlign: "center"
};
export const printSCTextStyle = {
  fontFamily: "High Tower Text",
  fontWeight: "500!important",
  fontSize: "1.6rem",
  color: "#555",
  textAlign: "center"
};
export const printRecipientStyle = {
  fontFamily: "Lucida Calligraphy",
  fontWeight: "500!important",
  fontSize: "3rem",
  color: "#555",
  textAlign: "center"
};
export const printRecipientStyle24 = {
  fontFamily: "Arial",
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: "3rem",
  color: "#555",
  textAlign: "center"
};
export const printAwardTitleStyle = {
  fontFamily: "Lucida Calligraphy",
  fontWeight: "500!important",
  fontSize: "3.5rem",
  color: "#008000",
  textAlign: "right"
};
export const printAwardTitleStyle24 = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "3.5rem",
  color: "#008000",
  textAlign: "right"
};
export const printAwardTextStyle24 = {
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "3.0rem",
  color: "#555",
  textAlign: "center"
};
export const printTextStyle = {
  fontFamily: "Times New Roman",
  fontWeight: "500!important",
  fontSize: "2rem",
  color: "#555",
  textAlign: "center"
};
export const printTextStyle24 = {
  fontFamily: "Arial",
  fontWeight: "500!important",
  fontSize: "2rem",
  color: "#555",
  textAlign: "center"
};
export const printPATextStyle = {
  fontFamily: "Californian FB",
  fontWeight: "500!important",
  fontSize: "2rem",
  color: "#555",
  textAlign: "center"
};
export const printPATextStyle24 = {
  fontFamily: "Arial",
  fontWeight: "500!important",
  fontSize: "2rem",
  color: "#555",
  textAlign: "center"
};
export const singaporeTextStyle = {
  color: "#555",
  fontSize: "3rem"
};

export const nameTextStyle = {
  fontSize: "3rem",
  textAlign: "center"
};

export const titleTextStyle = {
  color: "rgb(30,93,200)",
  fontSize: "3rem",
  textAlign: "center"
};

export const imageStyle = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  width: "100%",
  height: "auto"
};

export const supportSUSSTextStyle = {
  display: "block",
  fontSize: "1rem",
  textAlign: "center"
};

export const supportJPTextStyle = {
  fontFamily: "Times New Roman",
  display: "block",
  fontSize: "1.5rem",
  fontWeight: "900",
  textAlign: "center"
};
export const supportJPTextStyle24 = {
  fontFamily: "Arial",
  display: "block",
  fontSize: "1.5rem",
  fontWeight: "900",
  textAlign: "center"
};
export const renderHeaderImage = () => (
  <div className="col-12">
    <br />
    <br />
    <img
      src={IMG_LOGO_HEADER}
      style={{ position: "absolute", top: 0, left: 0 }}
      alt="RP Logo Header"
    />
  </div>
);

export const renderFooterImage = () => (
  <div className="col-12">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <img
      src={IMG_LOGO_FOOTER}
      style={{ position: "absolute", bottom: 0, right: 0 }}
      alt="certificate Footer"
    />
  </div>
);

export const renderSingapore = () => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "2rem" }}
  >
    <p style={singaporeTextStyle} />
  </div>
);
export const renderLogoRPNYP = nYear => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img
        style={{ width: "1050px" }}
        src={nYear === 2024 ? IMG_LOGO_NYP24 : IMG_LOGO_NYP}
        alt="RP NYP Logo"
      />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoRPNP = nYear => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img
        style={{ width: "1050px" }}
        src={nYear === 2024 ? IMG_LOGO_NP24 : IMG_LOGO_NP}
        alt="RP NP Logo"
      />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoNPRP = nYear => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img
        style={{ width: "1050px" }}
        src={nYear === 2024 ? IMG_LOGO_NP24RP : IMG_LOGO_NPRP}
        alt="RP NP RP Logo"
      />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoRPTP = nYear => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img
        style={{ width: "1050px" }}
        src={nYear === 2024 ? IMG_LOGO_RP24TP : IMG_LOGO_RPTP}
        alt="RP TP Logo"
      />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoRP = nYear => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img
        style={{ width: "1050px" }}
        src={nYear === 2024 ? IMG_LOGO_RP24L : IMG_LOGO_RP}
        alt="RP Logo"
      />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoRPSP = nYear => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img
        style={{ width: "1050px" }}
        src={nYear === 2024 ? IMG_LOGO_RP24SP : IMG_LOGO_RPSP}
        alt="RP SP Logo"
      />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoRPLeft = nYear => {
  const IAWARD_LOGO_RP =
    nYear === 2024 ? IMG_AWARD_LOGO_RP24 : IMG_AWARD_LOGO_RP;
  const RPlogoAwardStyle =
    nYear === 2024
      ? "row d-flex justify-content-center"
      : "row d-flex justify-content-left";
  return (
    <div className={RPlogoAwardStyle} style={{ marginTop: "6rem" }}>
      <div className="col-10">
        <div className={RPlogoAwardStyle}>
          <img src={IAWARD_LOGO_RP} alt="RP logo" />
        </div>
      </div>
    </div>
  );
};
export const renderLogoRPLeftText = (title1, title2, nYear) => {
  const IAWARD_LOGO_RP =
    nYear === 2024 ? IMG_AWARD_LOGO_RP24 : IMG_AWARD_LOGO_RP;
  const RPlogoAwardStyle =
    nYear === 2024
      ? "row d-flex justify-content-center"
      : "row d-flex justify-content-left";
  const pPrintAwardTitleStyle =
    nYear === 2024 ? printAwardTitleStyle24 : printAwardTitleStyle;
  return (
    <div className={RPlogoAwardStyle}>
      <div className="col2">
        <img src={IAWARD_LOGO_RP} alt="RP logo" />
      </div>
      <div className="col-2" />
      <div className="col-6">
        <div style={pPrintAwardTitleStyle}>
          {title1}
          <br />
          {title2}
        </div>
      </div>
    </div>
  );
};

///
// Render the logo for RP Partner
// type = 0 (SUSS), 1 (Joint Poly)
///
export const renderLogoRPPartner = (type, nYear) => {
  let logo = IMG_LOGO_SUSS;
  if (type === 1) logo = nYear === 2024 ? IMG_LOGO_ALLPOLY24 : IMG_LOGO_ALLPOLY;
  const logoST = type === 0 ? "col-4 mx-auto" : "mx-auto";
  return (
    <div
      className="row d-flex justify-content-center align-items-center"
      style={{ marginTop: "3rem" }}
    >
      <div className="col-1" />
      <div className="col-10">
        <span style={supportSUSSTextStyle}>
          {type === 0 ? "This programme is supported by" : null}{" "}
        </span>
        <span
          style={nYear === 2024 ? supportJPTextStyle24 : supportJPTextStyle}
        >
          {type === 1 ? "In collaboration with:" : null}{" "}
        </span>
        <div className={logoST}>
          <img style={imageStyle} src={logo} alt="RP Partner Logo" />
        </div>
      </div>
      <div className="col-1" />
    </div>
  );
};
///
// signature for short courses
///
export const renderCOAOneSignature = certificate => {
  return (
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "0rem", marginBottom: "1rem" }}
    >
      <div className="col-6">
        <div className="px-6">
          <img
            style={{ width: "100%", borderBottom: "1px solid black" }}
            src={get(certificate, "signature.signature")}
            alt="Signature"
          />
        </div>
        <div className="text-center">
          <span style={SCsignatureTextStyle}>
            {get(certificate, "signature.name")}
            <br />
            {get(certificate, "signature.position")}
            <br />
            {get(certificate, "signature.organisation")}
            <br />
          </span>
          {renderFooterImage()}
          <br />
          <br />
          <p>{formatDDMMMYYYY(get(certificate, "issuedOn"))}</p>
        </div>
      </div>
    </div>
  );
};

// render one signature for awards with 1 signatory
//
export const renderOneSignature = (certificate, nYear) => {
  const certSign = formatSignatoriesPosition(
    get(certificate, "additionalData.certSignatories[0].position")
  );
  return (
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "0rem", marginBottom: "1rem" }}
    >
      <div className="col-6">
        <div className="px-6">
          <img
            style={{ width: "100%", borderBottom: "1px solid black" }}
            src={get(
              certificate,
              "additionalData.certSignatories[0].signature"
            )}
            alt="Signature"
          />
        </div>
        <div className="text-center">
          <span style={PAsignatureTextStyle}>
            {get(certificate, "additionalData.certSignatories[0].name")}
            <br />
            {certSign[0]}
            <br />
            {get(certificate, "additionalData.certSignatories[0].organisation")}
            <br />
          </span>
          <br />
          <br />
          <p style={PAsignatureDateTextStyle}>
            {formatDDMMMYYYY(get(certificate, "issuedOn"))}
          </p>
        </div>
      </div>
      {nYear === 2024 ? renderFooterImage() : null}
    </div>
  );
};

//
// render two signatures for awards with 2 signatories
//
export const renderTwoSignaturesAwards = (certificate, nYear) => {
  return (
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "8rem", marginBottom: "1rem" }}
    >
      <div className="col-4">
        <div className="px-4">
          <img
            style={{ width: "100%", borderBottom: "1px solid black" }}
            src={get(
              certificate,
              "additionalData.certSignatories[0].signature"
            )}
            alt="Signature"
          />
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {get(certificate, "additionalData.certSignatories[0].name")}
          </span>
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {get(certificate, "additionalData.certSignatories[0].position")}
          </span>
        </div>
      </div>
      <div className="col-4">
        <div className="px-4"></div>
      </div>
      <div className="col-4">
        <div className="px-4">
          <img
            style={{ width: "100%", borderBottom: "1px solid black" }}
            src={get(
              certificate,
              "additionalData.certSignatories[1].signature"
            )}
            alt="Signature"
          />
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {get(certificate, "additionalData.certSignatories[1].name")}
          </span>
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {get(certificate, "additionalData.certSignatories[1].position")}
          </span>
        </div>
      </div>
      {nYear < 2024 ? null : null}
    </div>
  );
};

//
// Render the signature block for the certificate
///
export const renderBlock = () => (
  <div className="text-center">
    <span style={signatureTextStyle}>
      <br />
      <br />
    </span>
  </div>
);

///
// displayname  = 0 - others, 1 - SD for BIA, 2 - MC, 3 - SD for CMW, 4- PFP
// for 0, 1&2 and isBIA22 = false -  display position only,
// for 1&2 and isBIA22 = true, display position in 2 lines - "Principle & CEO" | "Republic poly"
//
export const renderTwoSignatures = (certificate, displayName) => {
  const certSign = formatSignatoriesPosition(
    get(certificate, "additionalData.certSignatories[0].position")
  );
  const certSign2 = formatSignatoriesPosition(
    get(certificate, "additionalData.certSignatories[1].position")
  );

  // get the length of the signatures ARRAY
  const certSignLength = certSign === null ? 0 : certSign.length;
  const certSign2Length = certSign2 === null ? 0 : certSign2.length;

  // check if the signature has additional line
  const sigAdd0 = certSign2Length > certSignLength ? 1 : 0;
  const sigAdd1 = certSignLength > certSign2Length ? 1 : 0;

  // RP_2022_C_MCBIA    RP_2022_C_DCSD
  // 012 3456 789 012
  const tpName = get(certificate, "$template.name");

  const isBIA22 =
    tpName.substr(3, 4) === "2020"
      ? false
      : tpName.substr(12, 3) === "BIA"
      ? true
      : tpName.substr(12, 2) === "SD"
      ? true
      : tpName.substr(12, 2) === "SE"
      ? true
      : false;

  // RP_2022_P_PFP
  const isPFP = displayName === 4 ? true : false;

  const sYear = tpName.substr(3, 4); // extract year from template name
  const bf2025 =
    sYear === "2010" ||
    sYear === "2020" ||
    sYear === "2021" ||
    sYear === "2022" ||
    sYear === "2023" ||
    sYear === "2024"
      ? true
      : false; //check year
  /* only these template names will print the organisation name
01234567890
RP_2025_C_DCN
RP_2025_C_DCJP
RP_2025_C_DCSU
RP_2024_C_DCSD
RP_2020_C_MC
RP_2025_C_MCSU
RP_2025_C_MCJP */

  const printORG =
    tpName.substr(10, 3) === "DCN" ||
    tpName.substr(10, 4) === "DCJP" ||
    tpName.substr(10, 4) === "DCSU" ||
    tpName.substr(10, 2) === "MC" ||
    tpName.substr(10, 4) === "MCSU" ||
    tpName.substr(10, 4) === "MCJP"
      ? bf2025
        ? false
        : true
      : false; // check if the template is DCN, DCJP, DCSU, MC, MCSU, MCJP

  return (
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "8rem", marginBottom: "1rem" }}
    >
      <div className="col-4">
        <div className="px-4">
          <img
            style={logoLStyle}
            src={get(
              certificate,
              "additionalData.certSignatories[0].signature"
            )}
            alt="Signature"
          />
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {displayName === 1 // SD for BIA, display P name for 2020, otherwise do not display
              ? isBIA22
                ? null
                : get(certificate, "additionalData.certSignatories[0].name")
              : null}
          </span>
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {displayName < 3
              ? certSign[0] // display Position
              : displayName === 3
              ? null
              : certSign[0]}
          </span>
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {displayName === 3 // CMW - do not display.  title in image
              ? null
              : displayName < 3 // MC/DTC  -display position
              ? certSign.length > 1
                ? certSign[1]
                : null
              : null}
          </span>
        </div>
        <div className="text-center">
          <span style={compSignatureTextStyle}>
            {displayName === 0 && !bf2025 && sigAdd0 ? ( // check if BOE signature has additional line, add line break
              <span>
                <br />
                <br />
              </span>
            ) : null}
          </span>
        </div>
      </div>
      <div className="col-4">
        <div className="px-4">
          {displayName === 3 && (
            <span>
              <img
                style={sealWidthStyle2}
                src={bf2025 ? IMG_LOGO_NYP_SEAL : IMG_LOGO_NYP_SEAL25}
                alt="NYP Seal"
              />
              <br /> <br />
            </span>
          )}
          {displayName === 3 ? (
            <img
              style={sealWidthStyle2}
              src={bf2025 ? IMG_CERTIFICATE_SEAL : IMG_CERTIFICATE_SEAL_25}
              alt="RP Seal"
            />
          ) : isPFP ? (
            <img
              style={sealWidthStyle}
              src={
                bf2025 ? IMG_CERTIFICATE_SEAL_PFP : IMG_CERTIFICATE_SEAL_PFP_25
              }
              alt="RP PFP Seal"
            />
          ) : (
            <img
              style={sealWidthStyle}
              src={bf2025 ? IMG_CERTIFICATE_SEAL : IMG_CERTIFICATE_SEAL_25}
              alt="RP Seal"
            />
          )}
        </div>
      </div>
      <div className="col-4">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(
              certificate,
              "additionalData.certSignatories[1].signature"
            )}
            alt="Signature"
          />
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {displayName === 1 // SD for BIA, display P name for 2020, otherwise do not display
              ? isBIA22
                ? null
                : get(certificate, "additionalData.certSignatories[1].name")
              : null}
          </span>
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {displayName < 3
              ? certSign2[0] // display Position
              : displayName === 3
              ? null
              : certSign2[0]}
          </span>
          {printORG ? (
            <span style={compSignatureTextStyle}>
              <br />
              {get(
                certificate,
                "additionalData.certSignatories[1].organisation"
              )}
            </span>
          ) : null}
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {displayName === 3 // CMW - do not display.  title in image
              ? null
              : displayName < 3 // MC/DTC  -display position
              ? certSign2.length > 1
                ? certSign2[1]
                : certSign.length > 1 && (
                    <span>
                      <br />
                      <br />
                    </span>
                  )
              : null}
            {displayName === 2
              ? isBIA22
                ? certSign2.length > 1 && <span></span>
                : certSign.length > 1 && <span></span>
              : null}
          </span>
        </div>
        <div className="text-center">
          <span style={compSignatureTextStyle}>
            {displayName === 0 && !bf2025 && sigAdd1 ? ( // check if RP signature has additional line, add line break
              <span>
                <br />
                <br />
              </span>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
};
///
// Remnder Issue Date

export const renderIssuingDate = certificate => (
  <span>
    {formatDatePrefix(get(certificate, "issuedOn"))}{" "}
    {formatDate(get(certificate, "issuedOn"))}
  </span>
);
///
// this is for MC certificate,  type = 0 - DPLUS, 1 - Modular Cert, 2 - PTD/SD
///
export const renderAwardTextCET = (certificate, type) => {
  const tpName = get(certificate, "$template.name");
  const sYear = tpName.substr(3, 4); // extract year from template name
  const bf2025 =
    sYear === "2010" ||
    sYear === "2020" ||
    sYear === "2021" ||
    sYear === "2022" ||
    sYear === "2023" ||
    sYear === "2024"
      ? true
      : false; //check year
  const awardPrintTextStyle = bf2025 ? printTextStyle : printTextStyle24;
  return (
    <div>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "3rem" }}
      />

      <div style={awardPrintTextStyle}>&nbsp;</div>

      <div style={awardPrintTextStyle}>&nbsp;</div>

      <div style={awardPrintTextStyle}>It is hereby certified that</div>

      <div className="row d-flex justify-content-center">
        <p style={bf2025 ? printRecipientStyle : printRecipientStyle24}>
          {get(certificate, "recipient.name")}
        </p>
      </div>

      <div style={awardPrintTextStyle}>
        having satisfied all course requirements
      </div>

      <div style={awardPrintTextStyle}>was awarded the</div>

      <div className="row d-flex justify-content-center">
        <div style={awardPrintTextStyle}>
          <p style={bf2025 ? printCertStyle : printAwardTextStyle24}>
            {get(certificate, "name")}
          </p>
        </div>
      </div>

      <div style={awardPrintTextStyle}>
        {type === 1 ? "leading to the " : null}
      </div>

      <div className="row d-flex justify-content-center">
        <div style={awardPrintTextStyle}>
          <p style={bf2025 ? printCertStyle : printAwardTextStyle24}>
            {type === 1 ? get(certificate, "description") : null}
          </p>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <p style={awardPrintTextStyle}>
          {formatDDMMMYYYY(get(certificate, "issuedOn"))}
        </p>
      </div>
    </div>
  );
};
///
// Render the main text for Short Course Cert
//
export const renderAwardTextSH = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />
    <p style={printSCCertStyle}>Certificate of Attendance</p>
    <br /> <br />
    <p style={printSCTextStyle1}>This is to certify that</p>
    <p style={printSCRecipentStyle}>{get(certificate, "recipient.name")}</p>
    <p style={printSCTextStyle1}>has successfully completed the course</p>
    <br />
    <br />
    <p style={printSCRecipentStyle}>{get(certificate, "name")}</p>
    <p style={printSCTextStyle}>{get(certificate, "description")}</p>
    <br />
    <br />
    <p style={printSCTextStyle}>Republic Polytechnic, Singapore</p>
  </div>
);
// Render the main text for DROH
export const renderAwardTextDROH = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />
    <p style={printPAwardCertTitleStyle}>Academic Awards</p>
    <br />
    <p style={printPATextStyle}>This is to certify that</p>
    <br />
    <p style={printRecipientStyle}>{get(certificate, "recipient.name")}</p>
    <p style={printTextStyle}>has been inducted into the</p>
    <p style={printPAwardCertTitleStyle}>Director&apos;s Roll of Honour</p>
    <p style={printTextStyle}>for excellent academic performance in</p>
    <p style={printTextStyle}>
      Academic Year {get(certificate, "description").substr(0, 4)} Semester{" "}
      {get(certificate, "description").substr(5, 1)} for the
    </p>
    <br />
    <p style={printAwardDipTitleStyle}>{get(certificate, "name")}</p>
    <br />
    <br />
  </div>
);
///
// Render the main text for DROH
//RP_2021_P_AWARD
//RP_2022_P_BOG
//RP_2022_P_BPRZ
//RP_2022_P_EAE
//RP_2022_P_SCHS
//RP_2022_P_NAK
//01234567890
export const renderPETAwardText = certificate => {
  const tpName = get(certificate, "$template.name");
  const sYear = tpName.substr(3, 4); // extract year from template name
  const bf2024 =
    tpName.substr(3, 4) === "2022" || tpName.substr(3, 4) === "2021"
      ? true
      : false;
  const bf2025 =
    sYear === "2010" ||
    sYear === "2020" ||
    sYear === "2021" ||
    sYear === "2022" ||
    sYear === "2023" ||
    sYear === "2024"
      ? true
      : false;
  const tpCode = tpName.substr(10, 3);
  const isDROH = tpCode === "AWA" ? true : false;
  const isBOG = tpCode === "BOG" ? true : false;
  const isBPR = tpCode === "BPR" ? true : false;
  const isEAE = tpCode === "EAE" ? true : false;
  const isSCH = tpCode === "SCH" ? true : false;
  const isNAK = tpCode === "NAK" ? true : false;
  const sDesc = get(certificate, "description");
  const awardPrintTextStyle = bf2025 ? printTextStyle : printTextStyle24;
  const pPAwardCertTitleStyle = bf2025
    ? printPAwardCertTitleStyle
    : printPAwardCertTitleStyle24;
  const pAwardCertTitleStyle = bf2025
    ? printAwardCertTitleStyle
    : printAwardCertTitleStyle24;
  const pPATextStyle = bf2025 ? printPATextStyle : printPATextStyle24;
  const pTextStyle = bf2025 ? printTextStyle : printTextStyle24;
  const pRecipientStyle = bf2025 ? printRecipientStyle : printRecipientStyle24;
  const pPAwardCertRecipentStyle = bf2025
    ? printPAwardCertRecipentStyle
    : printPAwardCertRecipentStyle24;
  const pPrintAwardDipTitleStyle = bf2025
    ? printAwardDipTitleStyle
    : printAwardDipTitleStyle24;
  return (
    <div>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "3rem" }}
      />
      {isDROH ? (
        <p style={pPAwardCertTitleStyle}>Academic Award{bf2024 ? "s" : null}</p>
      ) : null}
      {isEAE ? <p style={pAwardCertTitleStyle}>Republic Polytechnic</p> : null}
      {isEAE ? <p style={pAwardCertTitleStyle}>EAE Award</p> : null}
      <br />
      {isEAE ? (
        <p style={awardPrintTextStyle}>is presented to</p>
      ) : (
        <p style={pPATextStyle}>This is to certify that</p>
      )}
      <p style={pRecipientStyle}>{get(certificate, "recipient.name")}</p>
      <br />
      {isDROH ? (
        <div>
          <p style={pPATextStyle}>has been inducted into the</p>
          <p style={pAwardCertTitleStyle}>Director&apos;s Roll of Honour</p>
          {bf2024 ? (
            <p style={pPATextStyle}>for excellent academic performance in</p>
          ) : null}
          <p style={pPATextStyle}>
            {bf2024 ? null : "for "}Academic Year{" "}
            {get(certificate, "description").substr(0, 4)} Semester{" "}
            {get(certificate, "description").substr(5, 1)}{" "}
            {bf2024 ? "for the" : "in the"}
          </p>
          <p style={pPAwardCertRecipentStyle}>{get(certificate, "name")}</p>
        </div>
      ) : null}
      {isBOG ? (
        <div>
          <p style={pTextStyle}>is a recipient of the</p>
          <p style={pAwardCertTitleStyle}>Board of Governors Award</p>
          <p style={pAwardCertTitleStyle}>
            Most Outstanding Graduate of the Year
          </p>
          <p style={pTextStyle}>for academic and all-round excellence</p>
          <p style={pTextStyle}>throughout the course of study.</p>
        </div>
      ) : null}
      {isEAE ? (
        <div>
          <p style={pTextStyle}>for achieving outstanding</p>
          <p style={pTextStyle}>EAE assessment performance</p>
        </div>
      ) : null}
      {isNAK ? (
        <div>
          <p style={pTextStyle}>is a recipient of the</p>
          <p style={pAwardCertTitleStyle}>Ngee Ann Kongsi Award</p>
          <p style={pAwardCertTitleStyle}>
            Most Distinguished Graduate of the Year
          </p>
          <p style={pAwardCertTitleStyle}>
            {tpName === "RP_2022_P_NAK" ? "(Academic)" : null}
          </p>
          <p style={pAwardCertTitleStyle}></p>
        </div>
      ) : null}
      {isBPR ? (
        <div>
          <p style={pTextStyle}>is a recipient of the</p>
          <p style={pAwardCertTitleStyle}>
            {sDesc.substr(0, sDesc.length - 4)}
          </p>
          <p style={pTextStyle}>for outstanding academic performance in</p>
          <p style={pTextStyle}>
            Academic Year {sDesc.substr(sDesc.length - 4, 4)} for
          </p>
          <p style={pPrintAwardDipTitleStyle}>{get(certificate, "name")}</p>
        </div>
      ) : null}
      {isSCH ? (
        <div>
          <p style={pTextStyle}>is a recipient of the</p>
          <p style={pAwardCertTitleStyle}>{sDesc}</p>
        </div>
      ) : null}
      <br />
      <p style={pTextStyle}>
        {isDROH ? null : formatDDMMMYYYY(get(certificate, "issuedOn"))}
      </p>
    </div>
  );
};
///
// Render the main text for COA Award for Excellence in Mentoring Programme
///
export const renderCOAAwardTextEMP = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />
    <p style={printAwardCertTitleStyle}>{get(certificate, "name")}</p>
    <br />
    <p style={printTextStyle}>This certificate is awarded to</p>
    <br />
    <p style={printRecipientStyle}>{get(certificate, "recipient.name")}</p>
    <p style={printTextStyle}>
      in recognition and appreciation of contribution made to
    </p>
    <p style={printAwardCertTitleStyle}></p>
    <p style={printTextStyle}>{get(certificate, "award.achievementArea")}</p>
    <p style={printTextStyle}>
      Year {get(certificate, "award.achivementYear")}
    </p>
    <br />
  </div>
);
///
// Render the main text for COA Award for Director's Roll of Honour
///
export const renderCOAAwardTextDROH = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />
    <p style={printAwardCertTitleStyle}>Academic Awards</p>
    <br />
    <p style={printTextStyle}>This is to certify that</p>
    <br />
    <p style={printRecipientStyle}>{get(certificate, "recipient.name")}</p>
    <p style={printTextStyle}>has been inducted into the</p>
    <p style={printAwardCertTitleStyle}>Director&apos;s Roll of Honour</p>
    <p style={printTextStyle}>for excellent academic performance in</p>
    <p style={printTextStyle}>
      Academic Year {get(certificate, "description").substr(0, 4)} Semester{" "}
      {get(certificate, "description").substr(5, 1)} for the
    </p>
    <br />
    <p style={printAwardDipTitleStyle}>{get(certificate, "name")}</p>
    <br />
    <br />
  </div>
);

////
// This is for diploma cert
//RP_2024_P_MAIN
//01234567890
////
export const renderAwardText = certificate => {
  const tpName = get(certificate, "$template.name");
  const sYear = tpName.substr(3, 4); // extract year from template name
  const bf2025 =
    sYear === "2010" ||
    sYear === "2020" ||
    sYear === "2021" ||
    sYear === "2022" ||
    sYear === "2023" ||
    sYear === "2024"
      ? true
      : false; //check year
  const awardPrintTextStyle = bf2025 ? printTextStyle : printTextStyle24;
  return (
    <div>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "3rem" }}
      />
      <div style={awardPrintTextStyle}>
        The Board of Governors of{" "}
        {get(certificate, "$template.name").substr(8, 7) === "C_DCCMW"
          ? null
          : "the"}
      </div>

      <div style={awardPrintTextStyle}>
        {get(certificate, "$template.name").substr(8, 7) === "C_DCCMW"
          ? "Nanyang Polytechnic and Republic Polytechnic on"
          : "Republic Polytechnic"}
      </div>

      <div style={awardPrintTextStyle}>
        {get(certificate, "$template.name").substr(8, 7) === "C_DCCMW"
          ? "the recommendation of the respective Senates have"
          : //: get(certificate, "$template.name").substr(8, 6) === "C_DCSE"
            //? null
            "On the recommendation of the Senate has"}
      </div>

      <div style={awardPrintTextStyle}>
        {get(certificate, "$template.name") === "RP_2010_P_MAIN"
          ? "awarded"
          : get(certificate, "$template.name") === "RP_2024_P_NMAIN"
          ? "conferred"
          : get(certificate, "$template.name") === "RP_2024_P_MINOR"
          ? "conferred"
          : get(certificate, "$template.name").substr(8, 6) === "C_DCSE"
          ? "has conferred"
          : "conferred"}
      </div>

      <div className="row d-flex justify-content-center">
        <p style={bf2025 ? printRecipientStyle : printRecipientStyle24}>
          {get(certificate, "recipient.name")}
        </p>
      </div>

      <div style={awardPrintTextStyle}>the</div>

      <div className="row d-flex justify-content-center">
        <div style={awardPrintTextStyle}>
          <p>
            {get(certificate, "$template.name").substr(8, 7) === "P_MINOR" ? (
              bf2025 ? (
                <span style={bf2025 ? printCertStyle : printAwardTextStyle24}>
                  {get(certificate, "name")} in the
                  <br />
                  {get(certificate, "description")}
                </span>
              ) : (
                <span style={bf2025 ? printCertStyle : printAwardTextStyle24}>
                  {get(certificate, "name")}
                </span>
              )
            ) : (
              <span style={bf2025 ? printCertStyle : printAwardTextStyle24}>
                {get(certificate, "description")}
              </span>
            )}
          </p>
          {get(certificate, "$template.name").substr(8, 7) === "P_MINOR" &&
          !bf2025
            ? null
            : formatCertName(get(certificate, "additionalData.merit"))}
          {get(certificate, "$template.name").substr(8, 7) === "P_NMAIN" ? (
            <span style={bf2025 ? printCertStyle : printAwardTextStyle24}>
              with {get(certificate, "name")}
            </span>
          ) : null}
        </div>
      </div>
      <div style={awardPrintTextStyle}>
        {get(certificate, "$template.name").substr(8, 6) === "C_DCSE" ? (
          <p style={awardPrintTextStyle}>
            Under the joint-collaboration between
            <br />
            Republic Polytechnic and Singapore Polytechnic
          </p>
        ) : null}
      </div>
      <div style={awardPrintTextStyle}>
        with all of its privileges and obligations
      </div>

      <div className="row d-flex justify-content-center">
        <p style={awardPrintTextStyle}>
          Given this {renderIssuingDate(certificate)}.
        </p>
      </div>
    </div>
  );
};

///
// Render the main text for PFP Award Certificate
///
export const renderAwardTextPFP = certificate => {
  const tpName = get(certificate, "$template.name");
  const sYear = tpName.substr(3, 4); // extract year from template name
  const bf2025 =
    sYear === "2010" ||
    sYear === "2020" ||
    sYear === "2021" ||
    sYear === "2022" ||
    sYear === "2023" ||
    sYear === "2024"
      ? true
      : false; //check year
  const awardPrintTextStyle = bf2025 ? printTextStyle : printTextStyle24;
  return (
    <div>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "3rem" }}
      />
      <div style={awardPrintTextStyle}>
        <br />
        <br />
        <br />
        It is hereby certified that{" "}
      </div>
      <div className="row d-flex justify-content-center">
        <p style={bf2025 ? printRecipientStyle : printRecipientStyle24}>
          {get(certificate, "recipient.name")}
        </p>
      </div>
      <div style={awardPrintTextStyle}>has successfully completed the</div>
      <div className="row d-flex justify-content-center">
        <div style={bf2025 ? printTextStyle : printAwardTextStyle24}>
          {get(certificate, "description")}
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <p style={awardPrintTextStyle}>
          Academic Year {get(certificate, "issuedOn").substr(0, 4)}
        </p>
      </div>
    </div>
  );
};

///
// Render the footer for all certificates
///
export const renderFooter = certificate => (
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-6 text-left">&nbsp;</div>
      <div className="col-6 text-right">
        {get(certificate, "additionalData.additionalCertId")}
      </div>
    </div>
  </div>
);

import { get } from "lodash";
import React from "react";
import {
  IMG_LOGO_RP,
  IMG_CERTIFICATE_SEAL_PFP,
  IMG_CERTIFICATE_SEAL,
  IMG_LOGO_ALLPOLY,
  IMG_LOGO_SUSS,
  IMG_LOGO_NP,
  IMG_LOGO_NPRP,
  IMG_LOGO_NYP,
  IMG_LOGO_NYP_SEAL,
  IMG_LOGO_RPTP
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
export const printCertStyle = {
  fontFamily: "Old English Text MT",
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

export const printPAwardCertTitleStyle = {
  fontFamily: "Californian FB",
  fontSize: "3.5rem",
  color: "#008000",
  textAlign: "center"
};

export const printAwardDipTitleStyle = {
  fontFamily: "Times New Roman",
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
export const printAwardTitleStyle = {
  fontFamily: "Lucida Calligraphy",
  fontWeight: "500!important",
  fontSize: "3.5rem",
  color: "#008000",
  textAlign: "right"
};
export const printTextStyle = {
  fontFamily: "Times New Roman",
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

export const renderSingapore = () => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "2rem" }}
  >
    <p style={singaporeTextStyle} />
  </div>
);
export const renderLogoRPNYP = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img style={{ width: "1050px" }} src={IMG_LOGO_NYP} />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoRPNP = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img style={{ width: "1050px" }} src={IMG_LOGO_NP} />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoNPRP = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img style={{ width: "1050px" }} src={IMG_LOGO_NPRP} />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoRPTP = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img style={{ width: "1050px" }} src={IMG_LOGO_RPTP} />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoRP = () => (
  <div className="row d-flex justify-content-center">
    <div className="col-2" />
    <div className="row d-flex justify-content-center">
      <img src={IMG_LOGO_RP} />
    </div>
    <div className="col-2" />
  </div>
);
export const renderLogoRPLeft = () => (
  <div className="row d-flex justify-content-left">
    <div className="row d-flex justify-content-left">
      <img src={IMG_LOGO_RP} />
    </div>
    <div className="col-2" />
    <div className="col-2" />
  </div>
);
export const renderLogoRPLeftText = (title1, title2) => (
  <div className="row d-flex justify-content-left">
    <div className="col2">
      <img style={RPlogoAwardStyle} src={IMG_LOGO_RP} />
    </div>
    <div className="col-2" />
    <div className="col-6">
      <div style={printAwardTitleStyle}>
        {title1}
        <br />
        {title2}
      </div>
    </div>
  </div>
);
// type = 0 (SUSS), 1 (Joint Poly)
export const renderLogoRPPartner = type => {
  let logo = IMG_LOGO_SUSS;
  if (type === 1) logo = IMG_LOGO_ALLPOLY;
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
        <span style={supportJPTextStyle}>
          {type === 1 ? "In collaboration with:" : null}{" "}
        </span>
        <div className={logoST}>
          <img style={imageStyle} src={logo} />
        </div>
      </div>
      <div className="col-1" />
    </div>
  );
};
// signature for short courses
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

          <br />
          <br />
          <p>{formatDDMMMYYYY(get(certificate, "issuedOn"))}</p>
        </div>
      </div>
    </div>
  );
};
export const renderOneSignature = certificate => {
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
    </div>
  );
};
export const renderTwoSignaturesAwards = certificate => {
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
    </div>
  );
};

export const renderBlock = () => (
  <div className="text-center">
    <span style={signatureTextStyle}>
      <br />
      <br />
    </span>
  </div>
);

// displayname  = 0 - others, 1 - SD for BIA, 2 - MC, 3 - SD for CMW, 4- PFP
// for 0, 1&2 and isBIA22 = false -  display position only,
// for 1&2 and isBIA22 = true, display position in 2 lines - "Principle & CEO" | "Republic poly"
export const renderTwoSignatures = (certificate, displayName) => {
  const certSign = formatSignatoriesPosition(
    get(certificate, "additionalData.certSignatories[0].position")
  );
  const certSign2 = formatSignatoriesPosition(
    get(certificate, "additionalData.certSignatories[1].position")
  );
  // RP_2022_C_MCBIA    RP_2022_C_DCSD
  const tpName = get(certificate, "$template.name");

  const isBIA22 =
    tpName.substr(3, 4) === "2020"
      ? false
      : tpName.substr(12, 3) === "BIA"
      ? true
      : tpName.substr(12, 3) === "SD"
      ? true
      : false;
  // RP_2022_P_PFP
  const isPFP = displayName === 4 ? true : false;
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
              : displayName > 0 // MC/DTC  -display position
              ? certSign.length > 1
                ? certSign[1]
                : null
              : null}
          </span>
        </div>
      </div>
      <div className="col-4">
        <div className="px-4">
          {displayName === 3 && (
            <span>
              <img style={sealWidthStyle2} src={IMG_LOGO_NYP_SEAL} />
              <br /> <br />
            </span>
          )}
          {displayName === 3 ? (
            <img style={sealWidthStyle2} src={IMG_CERTIFICATE_SEAL} />
          ) : isPFP ? (
            <img style={sealWidthStyle} src={IMG_CERTIFICATE_SEAL_PFP} />
          ) : (
            <img style={sealWidthStyle} src={IMG_CERTIFICATE_SEAL} />
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
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>
            {displayName === 3 // CMW - do not display.  title in image
              ? null
              : displayName > 0 // MC/DTC  -display position
              ? isBIA22
                ? certSign2.length > 1
                  ? certSign2[1]
                  : null
                : certSign.length > 1 && (
                    <span>
                      <br />
                      <br />
                    </span>
                  )
              : null}
            {displayName === 2
              ? isBIA22 && (
                  <span>
                    <br />
                    <br />
                  </span>
                )
              : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export const renderIssuingDate = certificate => (
  <span>
    {formatDatePrefix(get(certificate, "issuedOn"))}{" "}
    {formatDate(get(certificate, "issuedOn"))}
  </span>
);

// type = 0 - DPLUS, 1 - Modular Cert, 2 - PTD/SD
export const renderAwardTextCET = (certificate, type) => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />

    <div style={printTextStyle}>&nbsp;</div>

    <div style={printTextStyle}>&nbsp;</div>

    <div style={printTextStyle}>It is hereby certified that</div>

    <div className="row d-flex justify-content-center">
      <p style={printRecipientStyle}>{get(certificate, "recipient.name")}</p>
    </div>

    <div style={printTextStyle}>having satisfied all course requirements</div>

    <div style={printTextStyle}>was awarded the</div>

    <div className="row d-flex justify-content-center">
      <div style={printTextStyle}>
        <p style={printCertStyle}>{get(certificate, "name")}</p>
      </div>
    </div>

    <div style={printTextStyle}>{type === 1 ? "leading to the " : null}</div>

    <div className="row d-flex justify-content-center">
      <div style={printTextStyle}>
        <p style={printCertStyle}>
          {type === 1 ? get(certificate, "description") : null}
        </p>
      </div>
    </div>

    <div className="row d-flex justify-content-center">
      <p style={printTextStyle}>
        {formatDDMMMYYYY(get(certificate, "issuedOn"))}
      </p>
    </div>
  </div>
);

// Render the main text for Short Course Cert
export const renderAwardTextSH = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />
    <p style={printSCCertStyle}>Certificate of Attendance</p>
    <br /> <br />
    <p style={printSCTextStyle1}>This is to certify that</p>
    <br />
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
  const tpCode = tpName.substr(10, 3);
  const isDROH = tpCode === "AWA" ? true : false;
  const isBOG = tpCode === "BOG" ? true : false;
  const isBPR = tpCode === "BPR" ? true : false;
  const isEAE = tpCode === "EAE" ? true : false;
  const isSCH = tpCode === "SCH" ? true : false;
  const isNAK = tpCode === "NAK" ? true : false;
  const sDesc = get(certificate, "description");
  return (
    <div>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "3rem" }}
      />
      {isDROH ? <p style={printPAwardCertTitleStyle}>Academic Awards</p> : null}
      {isEAE ? (
        <p style={printAwardCertTitleStyle}>Republic Polytechnic</p>
      ) : null}
      {isEAE ? <p style={printAwardCertTitleStyle}>EAE Award</p> : null}
      <br />
      {isEAE ? (
        <p style={printTextStyle}>is presented to</p>
      ) : (
        <p style={printPATextStyle}>This is to certify that</p>
      )}
      <br />
      <br />
      <p style={printRecipientStyle}>{get(certificate, "recipient.name")}</p>
      <br />
      {isDROH ? (
        <div>
          <p style={printPATextStyle}>has been inducted into the</p>
          <p style={printPAwardCertTitleStyle}>
            Director&apos;s Roll of Honour
          </p>
          <p style={printPATextStyle}>for excellent academic performance in</p>
          <p style={printPATextStyle}>
            Academic Year {get(certificate, "description").substr(0, 4)}{" "}
            Semester {get(certificate, "description").substr(5, 1)} for the
          </p>
          <p style={printPAAwardDipTitleStyle}>{get(certificate, "name")}</p>
          <br />
          <br />
        </div>
      ) : null}
      {isBOG ? (
        <div>
          <p style={printTextStyle}>is a recipient of the</p>
          <p style={printAwardCertTitleStyle}>Board of Governors Award</p>
          <p style={printAwardCertTitleStyle}>
            Most Outstanding Graduate of the Year
          </p>
          <p style={printTextStyle}>for academic and all-round excellence</p>
          <p style={printTextStyle}>throughout the course of study</p>
        </div>
      ) : null}
      {isEAE ? (
        <div>
          <p style={printTextStyle}>for achieving outstanding</p>
          <p style={printTextStyle}>EAE assessment performance</p>
        </div>
      ) : null}
      {isNAK ? (
        <div>
          <p style={printTextStyle}>is a recipient of the</p>
          <p style={printAwardCertTitleStyle}>Ngee Ann Kongsi Award</p>
          <p style={printAwardCertTitleStyle}>
            Most Distinguished Graduate of the Year
          </p>
          <p style={printAwardCertTitleStyle}>(Academic)</p>
        </div>
      ) : null}
      {isBPR ? (
        <div>
          <p style={printTextStyle}>is a recipient of the</p>
          <p style={printAwardCertTitleStyle}>
            {sDesc.substr(0, sDesc.length - 4)}
          </p>
          <p style={printTextStyle}>for outstanding academic performance in</p>
          <p style={printTextStyle}>
            Academic Year {sDesc.substr(sDesc.length - 4, 4)} for
          </p>
          <p style={printAwardDipTitleStyle}>{get(certificate, "name")}</p>
        </div>
      ) : null}
      {isSCH ? (
        <div>
          <p style={printTextStyle}>is a recipient of the</p>
          <p style={printAwardCertTitleStyle}>{sDesc}</p>
        </div>
      ) : null}
      <br />
      <p style={printTextStyle}>
        {isDROH ? null : formatDDMMMYYYY(get(certificate, "issuedOn"))}
      </p>
    </div>
  );
};
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
export const renderAwardText = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />
    <div style={printTextStyle}>
      The Board of Governors of{" "}
      {get(certificate, "$template.name").substr(8, 7) === "C_DCCMW"
        ? null
        : "the"}
    </div>

    <div style={printTextStyle}>
      {get(certificate, "$template.name").substr(8, 7) === "C_DCCMW"
        ? "Nanyang Polytechnic and Republic Polytechnic on"
        : "Republic Polytechnic"}
    </div>

    <div style={printTextStyle}>
      {get(certificate, "$template.name").substr(8, 7) === "C_DCCMW"
        ? "the recommendation of the respective Senates have"
        : "On the recommendation of the Senate has"}
    </div>

    <div style={printTextStyle}>conferred</div>

    <div className="row d-flex justify-content-center">
      <p style={printRecipientStyle}>{get(certificate, "recipient.name")}</p>
    </div>

    <div style={printTextStyle}>the</div>

    <div className="row d-flex justify-content-center">
      <div style={printTextStyle}>
        <p style={printCertStyle}>{get(certificate, "description")}</p>
        {formatCertName(get(certificate, "additionalData.merit"))}
      </div>
    </div>
    <div style={printTextStyle}>with all of its privileges and obligations</div>

    <div className="row d-flex justify-content-center">
      <p style={printTextStyle}>Given this {renderIssuingDate(certificate)}.</p>
    </div>
  </div>
);

export const renderAwardTextPFP = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center"
      style={{ marginTop: "3rem" }}
    />
    <div style={printTextStyle}>It is hereby certified that </div>
    <div className="row d-flex justify-content-center">
      <p style={printRecipientStyle}>{get(certificate, "recipient.name")}</p>
    </div>
    <div style={printTextStyle}>has successfully completed the</div>
    <div className="row d-flex justify-content-center">
      <div style={printTextStyle}>{get(certificate, "description")}</div>
    </div>
    <div className="row d-flex justify-content-center">
      <p style={printTextStyle}>
        Academic Year {get(certificate, "graduationDate").substr(0, 4)}
      </p>
    </div>
  </div>
);

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

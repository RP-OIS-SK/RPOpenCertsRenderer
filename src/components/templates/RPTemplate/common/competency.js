import { get, groupBy } from "lodash";
import React from "react";
import { IMG_LOGO_RP_HORIZONTAL } from "./images";
import { formatSignatoriesPosition } from "./functions";
export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};
export const signatureTextStyle = {
  color: "#090",
  fontWeight: "bold",
  fontSize: "1.1rem"
};
export const printCertStyle = {
  fontFamily: "Times New Roman",
  fontWeight: "bold",
  fontSize: "1.4rem",
  color: "#555",
  textAlign: "left"
};
export const SignatureTextStyle = {
  fontFamily: "Arial",
  fontSize: "1.4rem"
};
export const SignatureDateTextStyle = {
  fontFamily: "Arial",
  fontSize: "1.0rem"
};
export const printTextStyle = {
  fontFamily: "Times New Roman",
  fontWeight: "500!important",
  fontSize: "1.4rem",
  color: "#555",
  textAlign: "left"
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
export const fullTableWidthStyle = {
  width: "100%",
  border: "1px solid black",
  height: "auto"
};
export const thStyle = {
  padding: "2px 5px",
  border: "1px solid black",
  textAlign: "left"
};
export const renderHeader = () => (
  <div className="row">
    <div className="col-7">
      9 Woodlands Avenue 9, Sinagpore 738964
      <br />
      tel: (65) 6510 3000
      <br />
      <a href="https://www.rp.edu.sg">www.rp.edu.sg</a>
    </div>
    <div className="col" />
    <div className="col-4">
      <img style={fullWidthStyle} src={IMG_LOGO_RP_HORIZONTAL} />
    </div>
  </div>
);
//
export const renderSkill = (skill, skillId, varDType, remarks) => {
  const sem = get(skill, "[0].competencyLevel");
  const sType = sem.substring(0, 1);
  const sem1 = sem.substring(1);
  const isArchivement = sType === "A" ? true : false;

  if (sType !== varDType.t) {
    varDType.t = sType;
  }
  const skillRows = skill.map((s, i) => {
    const compNo = s.competencyDescription.substring(0, 1);
    return (
      <tr key={i} style={thStyle}>
        <td style={thStyle}>
          {s.competencyDescription}
          {compNo === "1" && isArchivement ? (
            <ul>
              <li>Process ten prescriptions of low complexity</li>
              <li>Handle at least five simple intervention</li>
            </ul>
          ) : null}
          {compNo === "2" && isArchivement ? (
            <ul>
              <li>Dispense ten prescription</li>
              <li>Handle at five simple intervention with documentation</li>
            </ul>
          ) : null}
          {compNo === "3" && isArchivement ? (
            <ul>
              <li>Counsel patients</li>
            </ul>
          ) : null}
          {compNo === "4" && isArchivement ? (
            <ul>
              <li>Process and dispense ten</li>
            </ul>
          ) : null}
          {compNo === "5" && isArchivement ? (
            <p>
              On three separate occasions:
              <ul>
                <li>Obtains individual patients</li>
                <li>Perform physical count</li>
              </ul>
            </p>
          ) : null}
          {compNo === "6" && isArchivement ? (
            <ul>
              <li>Handle at least five unique</li>
            </ul>
          ) : null}
        </td>
        <td style={thStyle}>{s.competencyLevelDescription}</td>
        {!isArchivement && i === 0 ? (
          <td
            style={{
              width: "30%",
              textAlign: "left",
              padding: "2px 5px",
              border: "1px solid black"
            }}
          >
            {remarks}
          </td>
        ) : null}
      </tr>
    );
  });

  return (
    <div className="col-12" key={skillId}>
      <div className="text-center">
        <p
          style={{
            textAlign: "left",
            fontSize: "1.2rem"
          }}
        >
          {!isArchivement ? (
            <p style={{ printTextStyle }}>
              Based on the student&apos;s performance, areas to be strengthened
              are listed in <strong>Table 2</strong>
              <br />
              <strong>
                Table 2: Areas to be reinforced for student upon on-boarding
              </strong>
            </p>
          ) : null}
        </p>
        <p style={{ textAlign: "left", fontWeight: "bold" }}>{sem1} </p>
        <table style={fullTableWidthStyle}>
          <tbody>
            <tr>
              <th
                style={{
                  textAlign: "left",
                  padding: "2px 5px",
                  border: "1px solid black"
                }}
              >
                <u>Key Tasks</u>
              </th>
              <th
                style={{
                  textAlign: "left",
                  padding: "2px 5px",
                  border: "1px solid black"
                }}
              >
                <u>Achievement</u>
              </th>
              {!isArchivement ? (
                <th
                  style={{
                    width: "30%",
                    textAlign: "left",
                    padding: "2px 5px",
                    border: "1px solid black"
                  }}
                >
                  <u>Remarks</u>
                </th>
              ) : null}
            </tr>
            {skillRows}
          </tbody>
        </table>
      </div>
      <br />
    </div>
  );
};

export const renderLCA = (document, skills) => {
  // Get student info and course description
  const recipientName = get(document, "recipient.name");
  const sText = get(document, "additionalData.performancerange").split("|");
  const Venue = sText[0];
  const DateRange = sText[1];
  const Remarks = sText[2];
  const groupedSkill = groupBy(skills, "competencyLevel");
  let varDType = { t: 0 };

  const renderedSkill = Object.keys(groupedSkill).map(skill =>
    renderSkill(groupedSkill[skill], skill, varDType, Remarks)
  );

  return (
    <div>
      <div
        className="row d-flex justify-content-center"
        style={{ marginTop: "3rem" }}
      />
      <div style={printTextStyle}>Letter of Competency Attainment</div>
      <div style={printTextStyle}>
        This is to inform that {recipientName} {recipientName} was trained and
        assessed based on the National Competency Standards for Pharmacy
        Technicians (Entry Level) in school (and through structured internship
        training at <strong>{Venue}</strong> from <strong>{DateRange}</strong>).
        <p>
          His performance based on the Keys Tasks of Pharmcy Technicial
          Entry-to-Practice (EPT) Competency Assessment is indicated in{" "}
          <strong>Table 1 </strong>{" "}
        </p>
        <p>
          <strong>
            Table 1: Achievements based on Key Tasks of Pharmacy Technician ETP
            Competency Assessment
          </strong>{" "}
        </p>
      </div>
      <div className="row">{renderedSkill}</div>
      <div className="row d-flex justify-content-center">
        <p style={printTextStyle}>.</p>
      </div>
    </div>
  );
};
// This is to display the content of letter of competency attainment
export const renderCompetency = document => {
  // Group all modules by courses
  const skills = get(document, "skills");
  const renderedCompetency = renderLCA(document, skills);
  return <div>{renderedCompetency}</div>;
};
// This is to display the SAS HOD signature
export const renderOneSignature = certificate => {
  const certSign = formatSignatoriesPosition(
    get(certificate, "additionalData.certSignatories[0].position")
  );
  return (
    <div
      className="row d-flex justify-content-left align-items-end"
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
        <div className="text-left">
          <span style={SignatureTextStyle}>
            {get(certificate, "additionalData.certSignatories[0].name")}
            <br />
            {certSign[0]}
            <br />
            {get(certificate, "additionalData.certSignatories[0].organisation")}
            <br />
          </span>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

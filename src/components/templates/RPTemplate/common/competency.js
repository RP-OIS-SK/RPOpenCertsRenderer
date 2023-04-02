import { get, groupBy } from "lodash";
import React from "react";
import { IMG_LOGO_RP_HORIZONTAL } from "./images";
import { formatDDMMMYYYY } from "./functions";
export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};
export const SignatureTextStyle = {
  fontFamily: "Arial",
  fontSize: "1.2rem"
};
export const printTextStyle = {
  fontWeight: "500!important",
  fontSize: "1.2rem",
  textDecoration: "none",
  color: "#555",
  textAlign: "left"
};
export const titleTextStyle = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  textDecoration: "underline",
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
  fontSize: "1.2rem",
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
export const renderElementList = listEvent => {
  const strList = listEvent.map((s, i) => <p key={i}>{s}</p>);
  return strList;
};
//
export const renderSkill = (skill, skillId, varDType, remarks) => {
  const sem = get(skill, "[0].competencyLevel");
  const sType = sem.substring(0, 1);
  const sem1 = sem.substring(1);
  const isArchievement = sType === "A" ? true : false;
  if (sType !== varDType.t) {
    varDType.t = sType;
  }
  let isChangeCompetency = false;
  let oldCompetency = "-";
  let oldCompetencyDesc = [];
  let competency = "-";
  let iCnt = 0;
  let iTotal = -1;
  let isRemarks = false; // addition remarks at the end of the table 1 for asterisk

  // initialize a list of competencyLevelDescription;
  let listCompetencyLevelDescription = [];

  // map
  skill.forEach(() => {
    iTotal++;
  });
  console.log(iTotal); //iTotal will be count - 1
  const skillRows = skill.map((s, i) => {
    // i will start from 0 to n-1
    console.log(i);
    const compNo = s.competencyCode; //s.competencyDescription.substring(0, 1);
    isChangeCompetency = competency === s.competencyDescription ? false : true;

    // this for table 2
    if (!isArchievement) {
      // console.log("Not archievement");
      if (isChangeCompetency) {
        //console.log("change compentency");
        oldCompetency = competency;
        oldCompetencyDesc = [];
        oldCompetencyDesc = [].concat(listCompetencyLevelDescription); // copy the array
        competency = s.competencyDescription;
        listCompetencyLevelDescription = [];
        listCompetencyLevelDescription.push(s.competencyLevelDescription);
        iCnt = iCnt + 1;
      } else {
        // insert into listCompetencyLevelDescription
        listCompetencyLevelDescription.push(s.competencyLevelDescription);
      }
      // handle the last category and row.
      if (iTotal === i) {
        console.log("last row");
        console.log(i);
        oldCompetency = competency;
        oldCompetencyDesc = [];
        oldCompetencyDesc = [].concat(listCompetencyLevelDescription); // copy the array
        isChangeCompetency = true;
        iCnt = iCnt === 1 ? 2 : iCnt; // if only one item in the list, display the remarks
      }
    } else {
      // for table 1 - check s.competencyLevelDescription
      if (s.competencyLevelDescription === "Completed*") {
        isRemarks = true;
      }
    }
    return isArchievement ? (
      <tr key={i} style={thStyle}>
        <td style={thStyle}>
          {s.competencyCode}. {s.competencyDescription}
          {compNo === "1" && isArchievement ? (
            <ul>
              <li>
                Process ten prescriptions of low complexity, with not more than
                6 items
              </li>
              <li>
                Handle at least five simple intervention with documentation:
                Able to explain clearly the purpose of the call, read back and
                document the intervention
              </li>
            </ul>
          ) : null}
          {compNo === "2" && isArchievement ? (
            <ul>
              <li>
                Dispense ten prescriptions of low complexity, with not more than
                6 items
              </li>
              <li>
                Handle at least five simple intervention with documentation:
                Able to explain clearly the purpose of the call, read back and
                document the intervention
              </li>
            </ul>
          ) : null}
          {compNo === "3" && isArchievement ? (
            <ul>
              <li>
                Counsel patients/caregivers on ten drug or product enquiries
                with minimum of three acute medications and three chronic
                medications
              </li>
            </ul>
          ) : null}
          {compNo === "4" && isArchievement ? (
            <ul>
              <li>
                Process and dispense ten prescriptions of low complexity, with
                not more than 6 items, to demonstrate compliance to medication
                safety practices
              </li>
            </ul>
          ) : null}
          {compNo === "5" && isArchievement ? (
            <span>
              On three separate occasions:
              <ul>
                <li>
                  Obtain individual patient demographic and medication use
                  record
                </li>
                <li>
                  Perform physical count of medications and match against
                  medication records
                </li>
                <li>
                  Perform up-to-date documentation of patient&apos;s medication
                  information in patient records
                </li>
              </ul>
            </span>
          ) : null}
          {compNo === "6" && isArchievement ? (
            <ul>
              <li>
                Handle at least five unique simple enquiries related to sale of
                General Sales List or Pharmacy-only item and be able to address
                all enquiries
              </li>
            </ul>
          ) : null}
        </td>
        <td style={thStyle}>{s.competencyLevelDescription}</td>
      </tr>
    ) : i > -1 ? (
      (isChangeCompetency && i > 0) || i === iTotal ? (
        <tr key={i} style={thStyle}>
          <td style={thStyle}>{oldCompetency}</td>
          <td style={thStyle}>{renderElementList(oldCompetencyDesc)}</td>
          {iCnt === 2 ? (
            <td
              rowSpan="0"
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
      ) : null
    ) : null;
  });
  return (
    <div className="col-12" key={skillId}>
      <div className="text-center">
        <p style={{ textAlign: "left", fontSize: "1.2rem" }}>
          {!isArchievement ? (
            <span style={{ printTextStyle }}>
              Based on the student&apos;s performance, areas to be strengthened
              are listed in <strong>Table 2</strong>
              <br />
              <strong>
                Table 2: Areas to be reinforced for student upon on-boarding
              </strong>
            </span>
          ) : null}
        </p>
        <p style={{ textAlign: "left", fontWeight: "bold" }}>{sem1} </p>
        <table style={fullTableWidthStyle}>
          <tbody>
            <tr>
              <th style={thStyle}>Key Tasks</th>
              {isArchievement ? (
                <th style={thStyle}>Achievement</th>
              ) : (
                <th style={thStyle}>Elements</th>
              )}
              {!isArchievement ? <th style={thStyle}>Remarks</th> : null}
            </tr>
            {skillRows}
          </tbody>
        </table>
        {isRemarks ? (
          <p style={printTextStyle}>*Assessment was completed in school.</p>
        ) : null}
      </div>
      <br />
    </div>
  );
};

export const renderLCA = (document, skills) => {
  // Get student info and course description
  const recipientName = get(document, "recipient.name");
  const recipientID = get(document, "recipient.studentId");
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
      <div style={printTextStyle}>
        {formatDDMMMYYYY(get(document, "issuedOn"))}
      </div>
      <br />
      <div style={titleTextStyle}>Letter of Competency Attainment</div>
      <br />
      <br />
      <div style={printTextStyle}>
        <p>
          This is to inform that{" "}
          <strong>
            {recipientName} (Student ID: {recipientID})
          </strong>{" "}
          was trained and assessed based on the National Competency Standards
          for Pharmacy Technicians (Entry Level) in school and through
          structured internship training at <strong>{Venue}</strong> from{" "}
          <strong>{DateRange}</strong>.
        </p>
        <p>
          The student{"'"}s performance based on the Keys Tasks of Pharmacy
          Technician Entry-to-Practice (ETP) Competency Assessment is indicated
          in <strong>Table 1 </strong>
        </p>
        <p>
          <strong>
            Table 1: Achievements based on Key Tasks of Pharmacy Technician ETP
            Competency Assessment
          </strong>
        </p>
      </div>
      <div className="row">{renderedSkill}</div>
      <div className="row d-flex justify-content-center">
        <p style={printTextStyle}></p>
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
  return (
    <div
      className="row d-flex justify-content-left align-items-end"
      style={{ marginTop: "0rem", marginBottom: "1rem" }}
    >
      <div className="col-6">
        <div className="px-6">
          <p>Sincerely,</p>
          <img
            style={{ borderBottom: "1px solid black" }}
            src={get(
              certificate,
              "additionalData.skillSignatories[0].signature"
            )}
          />
        </div>
        <div className="text-left">
          <span style={SignatureTextStyle}>
            {get(certificate, "additionalData.skillSignatories[0].name")}
            <br />
            {get(certificate, "additionalData.skillSignatories[0].position")}
            <br />
          </span>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

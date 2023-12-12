import PropTypes from "prop-types";
import { get, groupBy } from "lodash";
import React from "react";
import {
  formatDDMMMYYYY,
  formatBold,
  formatSignatoriesPosition
} from "./functions";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};

export const fullTableWidthStyle = {
  width: "100%",
  border: "1px solid black",
  height: "auto"
};

export const thWidth60Left = {
  width: "60%",
  textAlign: "left"
};

export const signatureTextStyle = {
  color: "#050",
  fontSize: "1.0rem"
};

export const titleTextStyle = {
  fontSize: "2.0rem",
  textAlign: "center",
  fontWeight: "bold"
};

export const boxStyle = {
  border: 2,
  borderColor: "#AAA",
  borderStyle: "solid",
  textAlign: "center"
};

export const renderHeader = () => (
  <div className="row">
    <div className="col-12">
      <div style={titleTextStyle}>Transcript of Academic Record</div>
    </div>
  </div>
);

export const renderTableHeader = () => (
  <tr>
    <th style={{ width: "25%", paddingLeft: "10px" }}>Grade</th>
    <th style={{ width: "25%", textDecoration: "underline" }}>Point</th>
    <th style={{ width: "50%", textDecoration: "underline" }}>&nbsp;</th>
  </tr>
);

export const renderBlankLine = () => (
  <tr>
    <td style={{ paddingLeft: "10px" }}>
      &nbsp;
      <br />
    </td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
);

export const renderGradeList = listGrade => {
  const strList = listGrade.map((obj, i) => (
    <tr key={i}>
      <td style={{ paddingLeft: "10px" }}>{obj.grade}</td>
      <td>{obj.score}</td>
      <td>{obj.desc}</td>
    </tr>
  ));
  return strList;
};

export const renderGradingSystem = () => {
  const listGradeText1L = [
    { grade: "A", score: "4.0", desc: "Excellent" },
    { grade: "B+", score: "3.5", desc: "Very Good" },
    { grade: "B", score: "3.0", desc: "Good" },
    { grade: "C+", score: "2.5", desc: "Satisfactory" }
  ];
  const listGradeText1C = [
    { grade: "C", score: "2.0", desc: "Acceptable" },
    { grade: "P", score: "2.0", desc: "Pass" },
    { grade: "D+", score: "1.5", desc: "Conditional Pass" },
    { grade: "D", score: "1.0", desc: "Conditional Pass" }
  ];
  const listGradeText1R = [
    { grade: "E", score: "0.5", desc: "Fail" },
    { grade: "F", score: "0.0", desc: "Fail" },
    { grade: "N", score: "-", desc: "Null(Defaulted)" }
  ];
  //
  return (
    <div className="row">
      <div className="col-12" />
      <div className="col-12" style={{ fontSize: "0.9rem" }}>
        <div className="row">
          <div className="col-4">
            <table style={fullTableWidthStyle}>
              <tbody>
                {renderTableHeader()}
                {renderGradeList(listGradeText1L)}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <table style={fullTableWidthStyle}>
              <tbody>
                {renderTableHeader()}
                {renderGradeList(listGradeText1C)}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <table style={fullTableWidthStyle}>
              <tbody>
                {renderTableHeader()}
                {renderGradeList(listGradeText1R)}
                {renderBlankLine()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export const renderCourse = (document, course) => {
  // Get student info and course description
  const recipientName = get(document, "recipient.name");
  const recipientNric = get(document, "recipient.nric");
  const recipientFin = get(document, "recipient.fin");
  const recipientNricFin = !recipientNric ? recipientFin : recipientNric;
  const studentId = get(document, "recipient.studentId");
  const admissionDate = get(document, "admissionDate");
  const graduationDate = get(document, "graduationDate");
  const strTemplate = get(document, "$template.name");
  const isCET = strTemplate.substr(8, 6) === "P_MAIN" ? 0 : 1;
  const isPFP = strTemplate.substr(8, 5) === "P_PFP" ? 1 : 0;
  const is2010 = strTemplate === "RP_2010_P_MAIN" ? 1 : 0;
  const courseText = isPFP ? "Polytechnic Foundation Programme for " : null;
  const moduleCodeTitle = isPFP ? "MODULE CODE" : "MODULE";
  const moduleTitle = isPFP ? "MODULE NAME" : "";
  // Group all modules by semesters
  const groupedSubjects = groupBy(course, "semester");

  const renderedSemesters = Object.keys(groupedSubjects).map(semester =>
    groupedSubjects[semester].map((s, i) => (
      <tr key={i}>
        {isPFP ? null : (
          <td style={{ textAlign: "left" }}>
            {i || s.semester === "-" ? null : formatBold(s.semester.toString())}
          </td>
        )}
        <td style={{ textAlign: "left" }}>
          {s.courseCode !== "ZZZ" ? s.courseCode : ""}
        </td>
        <td style={{ textAlign: "left" }}>
          {s.courseCode !== "ZZZ" || s.semester === "-"
            ? s.name
            : formatBold(s.name)}
        </td>
        <td>
          {isCET > 0 || s.courseCredit === 0 || s.courseCredit === "0"
            ? ""
            : s.courseCredit}
        </td>
        <td>{s.courseCode !== "ZZZ" ? s.grade.padEnd(2, " ") : ""}&nbsp;</td>
      </tr>
    ))
  );

  return (
    <div>
      <br />

      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-2">Name</div>
            <div className="col-10">
              :&nbsp;&nbsp;
              {recipientName}
            </div>
          </div>
          <div className="row">
            <div className="col-2">Course</div>
            <div className="col-10">
              :&nbsp;&nbsp;
              {courseText}
              {document.name}
            </div>
          </div>
          <div className="row">
            <div className="col-2">NRIC/FIN</div>
            <div className="col-4">
              :&nbsp;&nbsp;
              {recipientNricFin}
            </div>
            <div
              className="col-4 justify-content-right"
              style={{ textAlign: "right" }}
            >
              Date of Admission:
            </div>
            <div
              className="col-2 justify-content-right"
              style={{ textAlign: "right" }}
            >
              {formatDDMMMYYYY(admissionDate)}
            </div>
          </div>
          <div className="row">
            <div className="col-2">Student ID</div>
            <div className="col-4">
              :&nbsp;&nbsp;
              {studentId || document.additionalData.studentId}
            </div>
            <div
              className="col-4 justify-content-right"
              style={{ textAlign: "right" }}
            >
              Date of {is2010 ? "Graduation" : "Endorsement"}:
            </div>
            <div
              className="col-2 justify-content-right"
              style={{ textAlign: "right" }}
            >
              {formatDDMMMYYYY(graduationDate)}
            </div>
          </div>
        </div>
      </div>
      <hr style={{ borderWidths: "2rem" }} />
      <div className="row">
        <div className="col text-center">
          <table style={fullWidthStyle}>
            <tbody>
              <tr>
                {isPFP ? null : (
                  <th style={{ textAlign: "left" }}>
                    <u>{isCET ? "TERM" : "SEMESTER"}</u>
                  </th>
                )}
                <th style={{ textAlign: "left" }}>
                  <u>{moduleCodeTitle}</u>
                </th>
                <th style={{ textAlign: "left" }}>
                  <u>{moduleTitle}</u>
                </th>
                <th>
                  <u>
                    {isCET > 0 ? "" : is2010 ? "CREDITS" : "MODULAR CREDITS"}
                  </u>
                </th>
                <th>
                  <u>GRADE</u>
                </th>
              </tr>
              {renderedSemesters}
            </tbody>
          </table>
        </div>
      </div>
      <br />
    </div>
  );
};

export const renderTranscript = document => {
  // Group all modules by courses
  const transcript = get(document, "transcript");
  // const groupedCourses = groupBy(transcript, "semester");
  const renderedCourses = renderCourse(document, transcript);

  return <div>{renderedCourses}</div>;
};

// display GPA for PET and DPLUS
export const renderPETGPA = GPA => (
  <span>
    Grade Point Average (GPA): {GPA.toFixed(2)} /4.00
    <br />
  </span>
);

export const renderGPA = document => {
  const GPA = get(document, "cumulativeScore", undefined);
  const WithMerit = get(document, "additionalData.merit");
  const WithMeritTag = WithMerit === "Y" ? "with Merit" : "";
  const strTemplate = get(document, "$template.name");
  const isCET = strTemplate.substr(8, 6) === "P_MAIN" ? 0 : 1;
  const isNOTDPLUS = strTemplate.substr(8, 4) === "C_DP" ? 0 : 1;
  const isNOTDCN = strTemplate.substr(8, 4) === "C_DC" ? 0 : 1;
  const isPFP = strTemplate.substr(8, 5) === "P_PFP" ? 1 : 0;
  // const AwardText = isPFP ? "Completed the Polytechnic Foundation Programme for <br />" + document.name : "Awarded the " + formatBold(document.name) + formatBold(WithMeritTag);
  return GPA ? (
    <div className="row">
      <div className="col-3"> </div>
      <div className="col-6" style={boxStyle}>
        {isNOTDPLUS && isCET && isNOTDCN ? null : renderPETGPA(GPA)}
        {isPFP ? (
          <span>
            Completed the Polytechnic Foundation Programme for <br />{" "}
            {document.name}
          </span>
        ) : (
          <span>
            Awarded the {formatBold(document.name)} {formatBold(WithMeritTag)}
          </span>
        )}
        <br />
      </div>
      <div className="col-3"> </div>

      <div className="col-12 text-center">
        <br />
        ----------------------------------------------------{" "}
        <strong>End of Transcript</strong>
        ----------------------------------------------------{" "}
      </div>
    </div>
  ) : null;
};

export const renderSignature = document => {
  const certSign = formatSignatoriesPosition(
    document.additionalData.transcriptSignatories[0].position
  );
  return (
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "8rem", marginBottom: "2rem" }}
    >
      <div className="col-6" />

      <div className="col-4">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={document.additionalData.transcriptSignatories[0].signature}
          />
          <hr />
        </div>
        <div className="text-center">
          <span style={signatureTextStyle}>{certSign[0]}</span>
          <br />
          <span style={signatureTextStyle}>
            {certSign.length > 0 ? certSign[1] : null}
          </span>
          <br />
          <br />
          <br />
          {document.additionalData.transcriptId}
        </div>
      </div>

      <div className="col-2" />
    </div>
  );
};

const Template = ({ document }) => (
  <div className="container" style={{ fontSize: "0.9rem" }}>
    {renderHeader()}
    {renderTranscript(document)}
    {renderGPA(document)}
    {renderSignature(document)}
    {renderGradingSystem()}
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

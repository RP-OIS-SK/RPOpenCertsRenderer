import PropTypes from "prop-types";
import { get, groupBy } from "lodash";
import React from "react";
import { IMG_LOGO_RP_HORIZONTAL, IMG_LOGO_RP_HORIZONTAL24 } from "./images";
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

// additional remarks for PET only
// 2025 added changes for second line.
export const renderRemarksGradingSystem = (
  is2020,
  isDisplayOldCETLegend,
  isBf2025
) => (
  <span>
    <br />
    {isDisplayOldCETLegend
      ? null
      : isBf2025
      ? "Incomplete Grade is implemented from Academic Year 2012 Semester 2 onwards.\n"
      : "Incomplete Grade is implemented for full-time diplomas from Academic Year 2012 Semester 2 onwards.\n"}
    {!isDisplayOldCETLegend && <br />}
    {isDisplayOldCETLegend
      ? "Non-Graded Pass Grade is implemented from March 2022 onwards."
      : "Non-Graded Pass Grade is implemented from Academic Year 2020 onwards."}
    <br />
    {isDisplayOldCETLegend
      ? null
      : "A module for which grade point or modular credit is not accorded will not be considered in the computation of the cGPA.\n"}
  </span>
);

export const renderTableHeader = isPFP => (
  <tr>
    <th
      style={{
        width: "25%",
        textDecoration: "underline",
        paddingLeft: "10px"
      }}
    >
      Grade
    </th>
    {isPFP ? (
      <th style={{ width: "25%", textDecoration: "underline" }}></th>
    ) : (
      <th style={{ width: "25%", textDecoration: "underline" }}>Point</th>
    )}
    <th style={{ width: "50%", textDecoration: "underline" }}>Description</th>
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
export const renderHeader = document => {
  const strTemplate = get(document, "$template.name");
  // check it is PET template  - position 16 for scheme 1.4, position 9 for scheme 2.0
  //const isCET = strTemplate.substr(8, 6) === "P_MAIN" ? 0 : 1;
  const isCET = strTemplate.substr(8, 2) === "C_" ? 1 : 0;
  const isPET = !isCET;
  //const isPFP = strTemplate.substr(8, 5) === "P_PFP" ? 1 : 0;
  /* const isBefore2023 =
    strTemplate.substr(3, 4) === "2020" ||
    strTemplate.substr(3, 4) === "2021" ||
    strTemplate.substr(3, 4) === "2022"
      ? 1
      : 0;
    */

  const isBefore2024 =
    strTemplate.substr(3, 4) === "2006" ||
    strTemplate.substr(3, 4) === "2010" ||
    strTemplate.substr(3, 4) === "2020" ||
    strTemplate.substr(3, 4) === "2021" ||
    strTemplate.substr(3, 4) === "2022" ||
    strTemplate.substr(3, 4) === "2023"
      ? 1
      : 0;
  const isBefore2025 =
    isBefore2024 || strTemplate.substr(3, 4) === "2024" ? 1 : 0;
  const isDisplayNewLogo =
    (isCET && isBefore2024) || (isPET && isBefore2025) ? 0 : 1;
  return (
    <div className="row">
      <div className="col-4">
        <img
          style={fullWidthStyle}
          src={
            isDisplayNewLogo ? IMG_LOGO_RP_HORIZONTAL24 : IMG_LOGO_RP_HORIZONTAL
          }
          alt="RP Logo"
        />
      </div>
      <div className="col" />
      <div className="col-7">
        <div style={titleTextStyle}>TRANSCRIPT OF ACADEMIC RECORD</div>
      </div>
    </div>
  );
};

export const renderGradingSystem = document => {
  // get the template name
  const strTemplate = get(document, "$template.name");
  // check it is PET template  - position 16 for scheme 1.4, position 9 for scheme 2.0
  //const isCET = strTemplate.substr(8, 6) === "P_MAIN" ? 0 : 1;
  const isCET = strTemplate.substr(8, 2) === "C_" ? 1 : 0;
  const isPFP = strTemplate.substr(8, 5) === "P_PFP" ? 1 : 0;
  // RP_ 2022_P_ PFP
  // 0 12 3456789 01234

  // check whether it is DPLUS template
  // const isNOTDPLUS = strTemplate.substr(8, 4) === "C_DP" ? 0 : 1;
  // RP_2020_P_MAIN
  // const is2020 = strTemplate.substr(3, 4) === "2020" ? 1 : 0;

  //const is2021or22 =strTemplate.substr(3, 4) === "2021" || strTemplate.substr(3, 4) === "2022" ? 1 : 0;
  const sYear = strTemplate.substr(3, 4);
  const isBefore2023 =
    sYear === "2020" || sYear === "2021" || sYear === "2022" ? 1 : 0;
  const isBf2025 =
    sYear === "2010" ||
    sYear === "2020" ||
    sYear === "2021" ||
    sYear === "2022" ||
    sYear === "2023" ||
    sYear === "2024"
      ? true
      : false; //check year
  const isDisplayOldCETLegend = isCET && isBefore2023 ? 1 : 0;

  const listGradeText1L = [
    { grade: "A", score: "4.0", desc: "Excellent" },
    { grade: "B+", score: "3.5", desc: "Very Good" },
    { grade: "B", score: "3.0", desc: "Good" },
    { grade: "C+", score: "2.5", desc: "Satisfactory" },
    { grade: "C", score: "2.0", desc: "Acceptable" },
    { grade: "D+", score: "1.5", desc: "Conditional Pass" },
    { grade: "D", score: "1.0", desc: "Conditional Pass" }
  ];
  const listGradeText1RP = [
    { grade: "P", score: "2.0", desc: "Pass" },
    { grade: "E", score: "0.5", desc: "Fail" },
    { grade: "F", score: "0.0", desc: "Fail" },
    { grade: "N", score: "-", desc: "Null(Defaulted)" },
    { grade: "Pass*", score: "-", desc: "Pass with Commendation" },
    { grade: "Pass", score: "-", desc: "Pass" },
    { grade: "Fail", score: "-", desc: "Fail" }
  ];
  const listGradeText1R = [
    { grade: "P", score: "2.0", desc: "Pass" },
    { grade: "E", score: "0.5", desc: "Fail" },
    { grade: "F", score: "0.0", desc: "Fail" },
    { grade: "N", score: "-", desc: "Null(Defaulted)" },
    { grade: "Pass*", score: "-", desc: "Pass with Commendation" },
    { grade: "Pass", score: "-", desc: "Pass" },
    { grade: "Fail", score: "-", desc: "Fail" }
  ];

  const listGradeText2LP = [
    { grade: "DIST", score: "4.0", desc: "Distinction^" },
    { grade: "A", score: "4.0", desc: "Excellent" },
    { grade: "B+", score: "3.5", desc: "Very Good" },
    { grade: "B", score: "3.0", desc: "Very Good" },
    { grade: "C+", score: "2.5", desc: "Good" },
    { grade: "C", score: "2.0", desc: "Good" },
    { grade: "D+", score: "1.5", desc: "Pass" },
    { grade: "D", score: "1.0", desc: "Pass" }
  ];

  const listGradeText2RP = [
    { grade: "NGP", score: "1.0", desc: "Non-Graded Pass" },
    { grade: "F", score: "0.0", desc: "Fail" },
    { grade: "Pass*", score: "-", desc: "Pass with Commendation" },
    { grade: "Pass", score: "-", desc: "Pass" },
    { grade: "Fail", score: "-", desc: "Fail" },
    { grade: "Exempted", score: "-", desc: "Exempted from taking the module" },
    { grade: "Incomplete", score: "-", desc: "Incomplete" }
  ];
  const listGradeText2LC = [
    { grade: "DIST", score: "4.0", desc: "Distinction^" },
    { grade: "A", score: "4.0", desc: "Excellent" },
    { grade: "B+", score: "3.5", desc: "Very Good" },
    { grade: "B", score: "3.0", desc: "Very Good" },
    { grade: "C+", score: "2.5", desc: "Good" },
    { grade: "C", score: "2.0", desc: "Good" },
    { grade: "D+", score: "1.5", desc: "Pass" }
  ];
  const listGradeText2RC = [
    { grade: "D", score: "1.0", desc: "Pass" },
    { grade: "NGP", score: "1.0", desc: "Non-Graded Pass" },
    { grade: "F", score: "0.0", desc: "Fail" },
    { grade: "Pass*", score: "-", desc: "Pass with Commendation" },
    { grade: "Pass", score: "-", desc: "Pass" },
    { grade: "Fail", score: "-", desc: "Fail" },
    { grade: "Exempted", score: "-", desc: "Exempted from taking the module" }
  ];
  const listGradeText2LC23 = [
    { grade: "DIST", score: "4.0", desc: "Distinction^" },
    { grade: "A", score: "4.0", desc: "Excellent" },
    { grade: "B+", score: "3.5", desc: "Very Good" },
    { grade: "B", score: "3.0", desc: "Very Good" },
    { grade: "C+", score: "2.5", desc: "Good" },
    { grade: "C", score: "2.0", desc: "Good" },
    { grade: "D+", score: "1.5", desc: "Pass" },
    { grade: "D", score: "1.0", desc: "Pass" }
  ];
  const listGradeText2RC23 = [
    { grade: "NGP", score: "1.0", desc: "Non-Graded Pass" },
    { grade: "F", score: "0.0", desc: "Fail" },
    { grade: "Pass*", score: "-", desc: "Pass with Commendation" },
    { grade: "Pass", score: "-", desc: "Pass" },
    { grade: "Fail", score: "-", desc: "Fail" },
    {
      grade: "Exempted/EX",
      score: "-",
      desc: "Exempted from taking the module"
    },
    { grade: "Incomplete", score: "-", desc: "Incomplete" },
    { grade: "TRF()", score: "-", desc: "Credit transfer" }
  ];
  const listGradeTextPFPL = [
    { grade: "DIST", score: "", desc: "Distinction" },
    { grade: "A", score: "", desc: "Excellent" },
    { grade: "B+", score: "", desc: "Very Good" },
    { grade: "B", score: "", desc: "Very Good" },
    { grade: "C+", score: "", desc: "Good" }
  ];

  const listGradeTextPFPR = [
    { grade: "C", score: "", desc: "Good" },
    { grade: "D+", score: "", desc: "Pass" },
    { grade: "D", score: "", desc: "Pass" },
    { grade: "P", score: "", desc: "Pass" },
    { grade: "F", score: "", desc: "Fail" }
  ];

  /*
  const listGradeTextO2R = [
    { grade: "F", score: "0.0", desc: "Fail" },
    { grade: "Pass*", score: "-", desc: "Pass with Commendation" },
    { grade: "Pass", score: "-", desc: "Pass" },
    { grade: "Fail", score: "-", desc: "Fail" },
    { grade: "Exempted", score: "-", desc: "Exempted from taking the module" }
  ];
*/
  // if PET or DPLUS, display grading system otherwise do not display
  return (
    <div className="row">
      <div className="col-12" />
      <div className="col-12" style={{ fontSize: "0.9rem" }}>
        <p style={{ fontWeight: "bold" }}>
          <br />
          {isPFP > 0 ? "Grading System" : "Academic Year 2003 to 2010"}
        </p>
        <div className="row">
          <div className="col-6">
            <table style={fullTableWidthStyle}>
              <tbody>
                {renderTableHeader(isPFP)}
                {isPFP
                  ? renderGradeList(listGradeTextPFPL)
                  : renderGradeList(listGradeText1L)}
              </tbody>
            </table>
          </div>
          <div className="col-6">
            <table style={fullTableWidthStyle}>
              <tbody>
                {renderTableHeader(isPFP)}
                {isPFP
                  ? renderGradeList(listGradeTextPFPR)
                  : isCET
                  ? renderGradeList(listGradeText1R)
                  : renderGradeList(listGradeText1RP)}
              </tbody>
            </table>
          </div>
        </div>
        {isPFP ? null : (
          <p style={{ fontWeight: "bold" }}>
            <br />
            Academic Year 2011 onwards
          </p>
        )}
        {isPFP ? null : (
          <div className="row">
            <div className="col-6">
              <table style={fullTableWidthStyle}>
                <tbody>
                  {renderTableHeader(isPFP)}
                  {isCET
                    ? isBefore2023
                      ? renderGradeList(listGradeText2LC)
                      : renderGradeList(listGradeText2LC23)
                    : renderGradeList(listGradeText2LP)}
                </tbody>
              </table>
            </div>
            <div className="col-6">
              <table style={fullTableWidthStyle}>
                <tbody>
                  {renderTableHeader(isPFP)}
                  {isPFP
                    ? null
                    : isCET
                    ? isBefore2023
                      ? renderGradeList(listGradeText2RC)
                      : renderGradeList(listGradeText2RC23)
                    : isBf2025
                    ? renderGradeList(listGradeText2RP)
                    : renderGradeList(listGradeText2RC23)}
                  {isBefore2023 > 3 && (
                    <tr>
                      <td style={{ paddingLeft: "10px" }}>
                        {isCET ? " " : "Incomplete"} &nbsp;
                      </td>
                      <td>{isCET ? null : "-"}</td>
                      <td>{isCET ? null : "Incomplete"}</td>
                    </tr>
                  )}
                  {isBefore2023 > 3 && (
                    <tr>
                      <td style={{ paddingLeft: "10px" }}>
                        {isCET ? " " : "NGP"} &nbsp;
                      </td>
                      <td>{isCET ? null : "1.0"}</td>
                      <td>{isCET ? null : "Non-Graded Pass"}</td>
                    </tr>
                  )}
                  {isCET ? null : isBf2025 ? renderBlankLine() : null}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {isPFP ? null : (
          <p>
            ^Distinction is awarded from Academic Year 2012 onwards.
            {renderRemarksGradingSystem(isCET, isDisplayOldCETLegend, isBf2025)}
          </p>
        )}
        {isPFP ? null : (
          <div
            className="row"
            style={{ padding: "5px 5px 5px 5px", border: "1px solid black" }}
          >
            <p>
              <span style={{ fontWeight: "bold" }}>
                {" "}
                Advanced Placement Credits{" "}
              </span>{" "}
              <br />
              Advanced Placement Credits are granted by Republic Polytechnic for
              modules taken and awarded a passed grade prior to admission to the
              Polytechnic. In this regard, Republic Polytechnic recognises these
              modules that are completed either at another educational
              institution or based on performance placement tests set by the
              Polytechnic.
            </p>
          </div>
        )}
        {isPFP ? null : (
          <p style={{ fontWeight: "bold" }}>
            <br />
            The medium of instruction used in this Polytechnic is English.
          </p>
        )}
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
  //const isCET = strTemplate.substr(8, 2) === "P_" ? 0 : 1;
  const isCET = strTemplate.substr(8, 2) === "C_" ? 1 : 0;
  //const isPET = strTemplate.substr(8, 6) === "P_MAIN" ? 1 : 0;
  const isPFP = strTemplate.substr(8, 5) === "P_PFP" ? 1 : 0;
  const is2010 = strTemplate === "RP_2010_P_MAIN" ? 1 : 0;
  const isBefore2024 =
    strTemplate.substr(3, 4) === "2021" ||
    strTemplate.substr(3, 4) === "2022" ||
    strTemplate.substr(3, 4) === "2023"
      ? 1
      : 0;
  const isCETBefore2024 = isCET && isBefore2024 ? 1 : 0;
  const isMinCert = strTemplate.substr(8, 7) === "P_MINOR" ? 1 : 0;
  const isPETMinor = strTemplate.substr(8, 7) === "P_NMAIN" ? 1 : 0;
  const courseText = isPFP ? "Polytechnic Foundation Programme for " : null;
  const moduleCodeTitle = isPFP ? "MODULE CODE" : "MODULE";
  const moduleTitle = isPFP ? "MODULE NAME" : "";
  const minorTitle = isMinCert ? document.name + " in the " : "";
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
          {isPFP ||
          isCETBefore2024 ||
          s.courseCredit === 0 ||
          s.courseCredit === "0"
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
              {isMinCert ? minorTitle : ""}
              {isMinCert || isPETMinor ? document.description : document.name}
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
              {isMinCert ? "" : "Date of Admission:"}
            </div>
            <div
              className="col-2 justify-content-right"
              style={{ textAlign: "right" }}
            >
              {isMinCert ? "" : formatDDMMMYYYY(admissionDate)}
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
              Date of{" "}
              {isMinCert
                ? "Endorsement"
                : is2010
                ? "Graduation"
                : "Endorsement"}
              :
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
                    {isCET
                      ? isBefore2024
                        ? ""
                        : "CREDITS"
                      : is2010
                      ? "CREDITS"
                      : isPFP
                      ? ""
                      : "MODULAR CREDITS"}
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
  const isCET = strTemplate.substr(8, 6) === "P_MAIN" || "P_NMAI" ? 0 : 1;
  const isNOTDPLUS = strTemplate.substr(8, 4) === "C_DP" ? 0 : 1;
  const isNOTDCN = strTemplate.substr(8, 4) === "C_DC" ? 0 : 1;
  const isPFP = strTemplate.substr(8, 5) === "P_PFP" ? 1 : 0;
  const isMinCert = strTemplate.substr(8, 7) === "P_MINOR" ? 1 : 0;
  const isPETMinor = strTemplate.substr(8, 7) === "P_NMAIN" ? 1 : 0;
  const minorTitle = isMinCert ? document.name + " in the " : "";
  const withMinorText = isPETMinor ? " with " + document.name : "";
  // const AwardText = isPFP ? "Completed the Polytechnic Foundation Programme for <br />" + document.name : "Awarded the " + formatBold(document.name) + formatBold(WithMeritTag);
  // return GPA ? (

  // PFP - do not render the GPA if it is PFP
  return (
    <div className="row">
      <div className="col-3"> </div>
      <div className="col-6" style={boxStyle}>
        {isNOTDPLUS && isCET && isNOTDCN
          ? null
          : isMinCert
          ? null
          : isPFP
          ? null
          : renderPETGPA(GPA)}
        {isPFP ? (
          <div style={{ textAlign: "left", display: "inline-block" }}>
            Completed the Polytechnic Foundation Programme for <br />{" "}
            {document.name}
          </div>
        ) : (
          <span>
            Awarded the {formatBold(minorTitle)}
            {isMinCert || isPETMinor
              ? formatBold(document.description)
              : formatBold(document.name)}{" "}
            {formatBold(WithMeritTag)}
            {isPETMinor ? <br /> : null}
            {formatBold(withMinorText)}
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
  );
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
            alt="Signature"
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
    {renderHeader(document)}
    {renderTranscript(document)}
    {renderGPA(document)}
    {renderSignature(document)}
    {renderGradingSystem(document)}
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

import PropTypes from "prop-types";
import { get, groupBy, orderBy } from "lodash";
import React from "react";
import { IMG_LOGO_RP_HORIZONTAL } from "../common/images";
import { formatDDMMMYYYY } from "../common/functions";

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
  textAlign: "right",
  fontWeight: "bold"
};

export const boxStyle = {
  border: 2,
  borderColor: "#AAA",
  borderStyle: "solid",
  textAlign: "center"
};

export const renderHeader = () => (
  <div>
    <div className="row">
      <div className="row d-flex justify-content-left">
        <img
          style={fullWidthStyle}
          src={IMG_LOGO_RP_HORIZONTAL}
          alt="RP Logo"
        />
      </div>
      <div className="col-4" />
    </div>
    <div className="row">
      <div className="col-5" />
      <div className="col-7" style={{ textAlign: "right" }}>
        <div style={titleTextStyle}>CO-CURRICULAR ACTIVITIES TRANSCRIPT</div>
      </div>
    </div>
  </div>
);

export const renderSemester = (semester, semesterId, varDType) => {
  const sortSemester = orderBy(semester, ["name"]);
  const subjectRows = sortSemester.map((s, i) => {
    const gradeDetails = s.name.split("|");
    return (
      <tr key={i}>
        <td style={{ textAlign: "left" }}>{gradeDetails[0]}</td>
        <td style={{ textAlign: "left" }}>{gradeDetails[1]}</td>
        <td style={{ textAlign: "left" }}>{gradeDetails[2]}&nbsp;</td>
      </tr>
    );
  });
  const sem = get(sortSemester, "[0].semester");
  const sType = sem.substring(0, 1);
  let sSubTitle = "";
  const sem1 = sem.substring(1);
  if (sType !== varDType.t) {
    varDType.t = sType;
    sSubTitle = sType < 2 ? "EVENTS" : "MEMBERSHIP";
  }
  return (
    <div className="col-12" key={semesterId}>
      <div className="text-center">
        <p
          style={{
            textAlign: "left",
            fontSize: "1.2rem",
            fontWeight: "bold",
            textDecoration: "underline"
          }}
        >
          {sSubTitle}{" "}
        </p>
        <p style={{ textAlign: "left", fontWeight: "bold" }}>{sem1} </p>
        <table style={fullWidthStyle}>
          <tbody>
            <tr>
              <th style={{ width: "40%", textAlign: "left" }}>
                <u>{sType < 2 ? "TITLE OF ACTIVITY" : "CLUB"}</u>
              </th>
              <th style={{ width: "30%", textAlign: "left" }}>
                <u>{sType < 2 ? "ROLE" : "INTEREST GROUP"}</u>
              </th>
              <th style={{ width: "30%", textAlign: "left" }}>
                <u>{sType < 2 ? "ACHIEVEMENT" : "APPOINTMENT"}</u>
              </th>
            </tr>
            {subjectRows}
          </tbody>
        </table>
      </div>
      <br />
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
  const graduationDate = get(document, "issuedOn"); // graduationDate

  // Group all modules by semesters
  const sSemester = orderBy(course, ["semester"]).reverse();
  const groupedSubjects = groupBy(sSemester, "semester");
  let varDType = { t: 0 };

  const renderedSemesters = Object.keys(groupedSubjects).map(semester =>
    renderSemester(groupedSubjects[semester], semester, varDType)
  );

  return (
    <div>
      <br />
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-2">Name</div>
            <div className="col-4">
              :&nbsp;&nbsp;
              {recipientName}
            </div>
            <div
              className="col-4 justify-content-right"
              style={{ textAlign: "right" }}
            >
              Page:
            </div>
            <div
              className="col-2 justify-content-right"
              style={{ textAlign: "right" }}
            >
              1 of 1
            </div>
          </div>
          <div className="row">
            <div className="col-2">Course</div>
            <div className="col-10">
              :&nbsp;&nbsp;
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
              Date of Endorsement:
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
      <hr style={{ borderWidths: "2rem", border: "1px solid black" }} />
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row">{renderedSemesters}</div>
      <div className="row justify-content-center">
        <p style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          ___________________________________________END OF
          TRANSCRIPT___________________________________________
        </p>
      </div>
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

const Template = ({ document }) => (
  <div className="container" style={{ fontSize: "0.9rem" }}>
    {renderHeader()}
    {renderTranscript(document)}
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;

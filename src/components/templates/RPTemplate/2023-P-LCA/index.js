import RPCert from "./certificate";
import RPTranscript from "../common/transcript";
import RPCompetency from "./competency";

const templates = [
  {
    id: "certificate",
    label: "Certificate",
    template: RPCert
  },
  {
    id: "transcript",
    label: "Transcript",
    template: RPTranscript
  },
  {
    id: "competency",
    label: "Competency",
    template: RPCompetency
  }
];

export default templates;

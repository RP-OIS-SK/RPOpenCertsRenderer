import { Selector } from "testcafe";
import { readFileSync } from "fs";
import { join } from "path";
import { getData } from "@govtechsg/open-attestation";

fixture("Republic Polytechnic").page`http://localhost:3000`;

const Certificate = "./RP_PET_104070.opencert";

const RenderedCertificate = Selector("#rendered-certificate");

const validateTextContent = async (t, component, texts) =>
  texts.reduce(
    async (prev, curr) => t.expect(component.textContent).contains(curr),
    Promise.resolve()
  );

test("PET certificate is rendered correctly", async t => {
  // Inject javascript and execute window.opencerts.renderDocument
  const certificateContent = getData(
    JSON.parse(readFileSync(join(__dirname, Certificate)).toString())
  );
  await t.eval(() => window.opencerts.renderDocument(certificateContent), {
    dependencies: { certificateContent }
  });

  // Check content of window.opencerts.templates
  const container = Selector("#rendered-certificate .container");
  await container(); // wait for document to be rendered
  const templates = await t.eval(() => window.opencerts.getTemplates());
  await t.expect(templates).eql([
    { id: "certificate", label: "Certificate", template: undefined },
    { id: "transcript", label: "Transcript", template: undefined }
  ]);

  // Certificate tab content
  await validateTextContent(t, RenderedCertificate, [
    "Vincent Goh",
    "Diploma in Biotechnology",
    "WITH MERIT",
    "PRINCIPAL OF THE POLYTECHIC",
    "CHAIRMAN OF THE BOARD"
  ]);

  // Navigate to Transcript tab
  await t.eval(() => window.opencerts.selectTemplateTab(1));

  // Transcript tab content
  await validateTextContent(t, RenderedCertificate, [
    "TRANSCRIPT OF ACADEMIC",
    "Vincent Goh",
    "G0002434A",
    "Diploma in Biotechnology with Merit",
    "Registrar"
  ]);
});

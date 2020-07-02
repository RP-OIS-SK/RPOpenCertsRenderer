import { Selector } from "testcafe";
import { readFileSync } from "fs";
import { join } from "path";

fixture("Frameless Viewer").page`http://localhost:3000/`;

const Certificate = "./Ropsten-Demo-unwrapped.json";
const RenderedCertificate = Selector("#rendered-certificate");

const Media = Selector("#youtube-vid");

const validateTextContent = async (t, component, texts) =>
  texts.reduce(
    async (_prev, curr) => t.expect(component.textContent).contains(curr),
    Promise.resolve()
  );

test("Govtech Demo certificate is rendered correctly", async t => {
  // Inject javascript and execute window.openAttestation.renderDocument
  const certificateContent = JSON.parse(
    readFileSync(join(__dirname, Certificate)).toString()
  );
  await t.eval(
    () => window.openAttestation.renderDocument(certificateContent),
    {
      dependencies: { certificateContent }
    }
  );

  // Check content of window.openAttestation.templates
  await t.wait(500);
  const templates = await t.eval(() => window.openAttestation.getTemplates());
  await t
    .expect(templates)
    .eql([
      { id: "certificate", label: "Certificate" },
      { id: "transcript", label: "Transcript" },
      { id: "media", label: "Media" }
    ]);

  // Validate content of first tab
  await validateTextContent(t, RenderedCertificate, [
    "This is to certify that",
    "Your Name",
    "has successfully completed the",
    "OpenCerts Demo",
    "certification through training administered by"
  ]);

  // Navigate to next tab using window.openAttestation.selectTemplateTab
  await t.eval(() => window.openAttestation.selectTemplateTab(1));

  // Validate content of second tab
  await validateTextContent(t, RenderedCertificate, [
    "CS 1110",
    "Introduction to Programming",
    "SXXXXXXXY",
    "53b75bbe"
  ]);

  // Navigate to next tab using window.openAttestation.selectTemplateTab
  await t.eval(() => window.openAttestation.selectTemplateTab(2));

  // Validate content of third tab
  await t.wait(1000);
  await t.expect(Media.visible).ok();
});

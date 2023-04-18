import config from "../../mailing.config.json";
import sendMail from "../../emails";
sendMail.config = config;

// template imports
import welcome from "../../emails/Welcome";

// preview imports
import * as welcomePreview from "../../emails/previews/Welcome";

const previews = { "Welcome": welcomePreview };
const templates = { "Welcome": welcome };
const moduleManifest = { sendMail, templates, previews };

export { sendMail, config, templates, previews };
export default moduleManifest;

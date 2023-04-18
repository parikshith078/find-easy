// mailing.config.json
var mailing_config_default = {
  typescript: true,
  emailsDir: "./emails",
  outDir: "./previews_html",
  anonymousId: "45a15e58-549e-40ff-8dd9-a58ea729782e"
};

// .mailing/src/feManifest.ts
var feManifest = { config: mailing_config_default };
var feManifest_default = feManifest;
export {
  mailing_config_default as config,
  feManifest_default as default
};

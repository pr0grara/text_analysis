"use strict";
require("dotenv/config");
const piiRecognition = require("./src/pii_recognition.js")
const keyPhraseExtraction = require("./src/key_phrase_extractor.js")
const linkedEntityRecognition = require("./src/linked_entity_recognition.js")
const entityRecognition = require("./src/entity_recognition.js")
const sentimentAnalysis = require("./src/sentiment_analysis.js")

const {
  TextAnalyticsClient,
  AzureKeyCredential,
} = require("@azure/ai-text-analytics");

const key = process.env.TEXT_ANALYSIS_KEY_1;
const endpoint = process.env.ENDPOINT;

const textAnalyticsClient = new TextAnalyticsClient(
  endpoint,
  new AzureKeyCredential(key)
);

async function run() {
  // await sentimentAnalysis(textAnalyticsClient);
  // await entityRecognition(textAnalyticsClient);
  // await linkedEntityRecognition(textAnalyticsClient);
  // await keyPhraseExtraction(textAnalyticsClient);
  await piiRecognition(textAnalyticsClient);
}
run()


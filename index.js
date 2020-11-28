"use strict";
require("dotenv/config");

const textToAnalyze = [
  "i would prefer to have a variety of different featuress",
]

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

async function sentimentAnalysis(client) {
  const sentimentInput = textToAnalyze;
  const sentimentResult = await client.analyzeSentiment(sentimentInput);

  sentimentResult.forEach((document) => {
    console.log(`ID: ${document.id}`);
    console.log(`\tDocument Sentiment: ${document.sentiment}`);
    console.log(`\tDocument Scores:`);
    console.log(
      `\t\tPositive: ${document.confidenceScores.positive.toFixed(
        2
      )} \tNegative: ${document.confidenceScores.negative.toFixed(
        2
      )} \tNeutral: ${document.confidenceScores.neutral.toFixed(2)}`
    );
    console.log(`\tSentences Sentiment(${document.sentences.length}):`);
    document.sentences.forEach((sentence) => {
      console.log(`\t\tSentence sentiment: ${sentence.sentiment}`);
      console.log(`\t\tSentences Scores:`);
      console.log(
        `\t\tPositive: ${sentence.confidenceScores.positive.toFixed(
          2
        )} \tNegative: ${sentence.confidenceScores.negative.toFixed(
          2
        )} \tNeutral: ${sentence.confidenceScores.neutral.toFixed(2)}`
      );
    });
  });
}

async function entityRecognition(client) {
  const entityInputs = [
    "i like to write code and work on crm, seo and oh did I mention I am the CEO of",
  ];
  const entityResults = await client.recognizeEntities(entityInputs);

  entityResults.forEach((document) => {
    console.log(`Document ID: ${document.id}`);
    document.entities.forEach((entity) => {
      console.log(
        `\tName: ${entity.text} \tCategory: ${entity.category} \tSubcategory: ${
          entity.subCategory ? entity.subCategory : "N/A"
        }`
      );
      console.log(`\tScore: ${entity.confidenceScore}`);
    });
  });
}

entityRecognition(textAnalyticsClient);

// sentimentAnalysis(textAnalyticsClient);
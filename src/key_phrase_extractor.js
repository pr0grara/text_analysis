const textToAnalyze = require("../data");

async function keyPhraseExtraction(client) {
  const keyPhrasesInput = textToAnalyze;
  const keyPhraseResult = await client.extractKeyPhrases(keyPhrasesInput);

  keyPhraseResult.forEach((document) => {
    console.log(`ID: ${document.id}`);
    console.log(`\tDocument Key Phrases: ${document.keyPhrases}`);
  });
}

module.exports = keyPhraseExtraction
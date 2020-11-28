async function keyPhraseExtraction(client) {
  const keyPhrasesInput = [
    "CRM is a great tool that I would like to expand upon",
  ];
  const keyPhraseResult = await client.extractKeyPhrases(keyPhrasesInput);

  keyPhraseResult.forEach((document) => {
    console.log(`ID: ${document.id}`);
    console.log(`\tDocument Key Phrases: ${document.keyPhrases}`);
  });
}

module.exports = keyPhraseExtraction
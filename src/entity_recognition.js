async function entityRecognition(client) {
  const entityInputs = ["crm is a great tool that I would like to expand upon"];
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

module.exports = entityRecognition;
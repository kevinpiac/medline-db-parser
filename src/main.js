var bigXml = require('big-xml');

var reader = bigXml.createReader('sample.xml', /^(PubmedArticle)$/, { gzip: false });

reader.on('record', function(record) {
  let medlineCitation = record.children[0];
  let pubmedData = record.children[1];
  let pmid = medlineCitation.children[0].text;

  /*init project*/
});

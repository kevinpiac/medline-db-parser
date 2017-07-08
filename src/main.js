let bigXml = require('big-xml');
let reader = bigXml.createReader('sample.xml.gz', /^(PubmedArticle)$/, { gzip: true });
let ArticleParser = require('./classes/articleParser.js');

reader.on('record', function(record) {
  let articleParser = new ArticleParser(record);
  console.log(articleParser.node);
});

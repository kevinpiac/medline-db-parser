let bigXml = require('big-xml');
let ArticleParser = require('./classes/articleParser.js');

const mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://admin:yoyoyo2017@ec2-34-201-18-184.compute-1.amazonaws.com:27017/pubmed?authSource=admin');
const db = mongoose.connection;
const Schema = mongoose.Schema;
const ArticleSchema = mongoose.Schema({
  title: String,
  abstact: Array,
  pmid: Object,
  dateCreated: Object,
  journal: Object,
  authors: Array,
}, {collection: 'article'});

const Article = mongoose.model('article', ArticleSchema);

let reader = bigXml.createReader('sample.xml.gz', /^(PubmedArticle)$/, { gzip: true });
reader.on('record', function(record) {
  let articleParser = new ArticleParser(record);
  console.log(articleParser.obj);
  /*
  let article = new Article(articleParser.obj);
  article.save((err) => {
    if (!err) {
      console.log('Success');
    } else {
      console.log(err);
    }
  })
  */
});

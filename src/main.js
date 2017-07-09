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


const testFolder = './sampleDir/';
const fs = require('fs');

function parseFiles(files, index) {
  let fileName = files[index];
  let file = fileName;
  console.log('file', fileName, 'index', index);
  let fileUrl = `${__dirname}/sampleDir/${file}`;
  let splits = file.split('.');
  let ext = splits[splits.length - 1];
  if (ext === 'gz') {
    let reader = bigXml.createReader(fileUrl, /^(PubmedArticle)$/, { gzip: true });

    reader.on('record', function(record) {
      let articleParser = new ArticleParser(record);
      //console.log(articleParser.obj);
      let article = new Article(articleParser.obj);
      article.save((err) => {
        if (!err) {
          //process.stdout.write('.');
        } else {
          process.stdout.write('E');
        }
      });
    });
    reader.on('end', function() {
      index += 1;
      if (index < files.length - 1) {
        return parseFiles(files, index);
      } else {
        console.log('END');
        return ;
      }
    });
  }
}

fs.readdir(testFolder, (err, files) => {
  parseFiles(files, 0);
})

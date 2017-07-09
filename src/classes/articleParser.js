const Node = require('./node.js');
const ArticlePmid = require('./articlePmid.js');
const ArticleDate = require('./articleDate.js');
const ArticleJournal = require('./ArticleJournal.js');
const AuthorList = require('./AuthorList.js');
const ArticleAbstract = require('./ArticleAbstract.js');

module.exports = class ArticleParser {
  constructor(article) {
    this._root = new Node(article);
    this._nodes = {
      pmid: new ArticlePmid(this._root),
      dateCreated: new ArticleDate(this._root),
      journal: new ArticleJournal(this._root),
      //authorList: new AuthorList(this._root),
      title: this._root.findNode('MedlineCitation > Article > ArticleTitle').text,
      abstact: new ArticleAbstract(this._root),
    };
  }

  get root() {
    return this._root;
  }

  get nodes() {
    return this._nodes;
  }

  get obj() {
    return {
      pmid: this.nodes.pmid.obj,
      dateCreated: this.nodes.dateCreated.obj,
      journal: this.nodes.journal.obj,
      title: this.nodes.title,
      abstact: this.nodes.abstact.list,
      //authors: this.nodes.authorList.list,
    }
  }
}

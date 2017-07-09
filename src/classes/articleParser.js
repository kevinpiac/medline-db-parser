const Node = require('./node.js');
const ArticlePmid = require('./articlePmid.js');
const ArticleDate = require('./articleDate.js');

module.exports = class ArticleParser {
  constructor(article) {
    this._root = new Node(article);
    this._nodes = {
      pmid: new ArticlePmid(this._root),
      dateCreated: new ArticleDate(this._root),
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
      dateCreated: this.nodes.pmid.obj,
    }
  }
}

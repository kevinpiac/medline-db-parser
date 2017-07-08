let Node = require('./node.js');

module.exports = class ArticleParser {
  constructor(article) {
    this._root = new Node(article);
    this._nodes = {
      pmid: this.findNode('MedlineCitation > PMID'),
      dateCreated: this.findNode('MedlineCitation > DateCreated'),
      article: this.findNode('MedlineCitation > Article'),
    };
  }

  findNode(path) {
    let nodes = this._pathToArray(path);
    let next = null;
    nodes.forEach((nodeTag) => {
      if (!next) {
        next = this._root.findChild(nodeTag);
      } else {
        let curr = next;
        next = curr.findChild(nodeTag);
      }
    });
    return next;
  }

  _pathToArray(path) {
    return path.split(' > ');
  }

  get root() {
    return this._root;
  }

  get node() {
    return this._nodes;
  }

}
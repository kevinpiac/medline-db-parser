let Node = require('./node.js');

module.exports = class ArticleParser {
  constructor(article) {
    this.root = new Node(article);
    this.json = {
      pmid: this.parsePmid(),
      dateCreated: {
        year: '',
        month: '',
        day: '',
        utc: '',
      },
      dateCompleted: {
        year: '',
        month: '',
        day: '',
        utc: '',
      },
      article: {
        title: '',
        abstract: [
          {
            label: '',
            content: '',
          },
        ],
        summary: '',
        journal: {
          issn: '',
          issue: {
            volume: '',
            issue: '',
            pubDate: '',
            type: '',
          },
        }
      },
    };
  }

  findNode(path) {
    let nodes = this._pathToArray(path);
    let next = null;
    nodes.forEach((nodeTag) => {
      if (!next) {
        next = this.root.findChild(nodeTag);
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

  parsePmid() {
    let pmid = {
      value: '',
      version: '',
    };
    console.log(this.findNode('MedlineCitation > DateCompleted > Year').text);
  }
}

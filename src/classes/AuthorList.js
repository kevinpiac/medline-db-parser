const Node = require('./node.js');

module.exports = class AuthorList {
  constructor(root) {
    this._root = root.findNode('MedlineCitation > Article > AuthorList');
    this._authors = [];
    this._root.eachChildNode((author) => {
      this._authors.push({
        lastName: author.findChild('LastName').text,
        foreName: author.findChild('ForeName').text,
        initials: author.findChild('Initials').text,
      });
    });
  }

  get authors() {
    return this._authors;
  }

  get list() {
    return this.authors;
  }
}

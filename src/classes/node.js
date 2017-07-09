module.exports = class Node {
  constructor(node) {
    this.node = node;
  }

  _pathToArray(path) {
    return path.split(' > ');
  }

  findChild(tagName) {
    return new Node(this.node.children.find((x => x.tag === tagName)));
  }

  findNode(path) {
    let nodes = this._pathToArray(path);
    let next = null;
    nodes.forEach((nodeTag) => {
      if (!next) {
        next = this.findChild(nodeTag);
      } else {
        let curr = next;
        next = curr.findChild(nodeTag);
      }
    });
    return next;
  }

  get text() {
    return this.node.text;
  }

  get tag() {
    return this.node.tag;
  }

  get attrs() {
    return this.node.attrs;
  }

  get children() {
    return this.node.children;
  }
}

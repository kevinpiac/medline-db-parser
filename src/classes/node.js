module.exports = class Node {
  constructor(node) {
    this.node = node;
  }

  findChild(tagName) {
    return new Node(this.node.children.find((x => x.tag === tagName)));
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

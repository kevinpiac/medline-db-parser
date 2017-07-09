module.exports = class Node {
  constructor(node) {
    this.node = node;
  }

  _pathToArray(path) {
    return path.split(' > ');
  }


  /**
   * Take a tagName (string) and returns the corresponding element located in
   * direct children. To apply a deep search, use findNode method instead.
   */
  findChild(tagName) {
    return new Node(this.node.children.find((x => x.tag === tagName)));
  }

  /**
   * Take a path (string) in following format: "elem1 > elem 2 > elem 3"
   *
   * Returns a new Node instance if path is found
   */
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

  /**
   * Transforms each child in Node instance and apply function func on it.
   */
  eachChildNode(func) {
    this.node.children.forEach((child) => {
      let childNode = new Node(child);
      func(childNode);
    });
  }

  getAttr(attrName) {
    if (this.attrs && this.attrs[attrName]) {
      return this.attrs[attrName]
    }
    return null;
  }

  get text() {
    if (this.node && this.node.text) {
      return this.node.text;
    }
    return null;
  }

  get tag() {
    if (this.node && this.node.tag) {
      return this.node.tag;
    }
    return null;
  }

  get attrs() {
    if (this.node && this.node.attrs) {
      return this.node.attrs;
    }
    return null;
  }

  get children() {
    if (this.node && this.node.children) {
      return this.node.children;
    }
    return null;
  }
}

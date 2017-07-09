module.exports = class ArticlePmid {
  constructor(root) {
    this._node = root.findNode('MedlineCitation > PMID');
    this._version = this._node.attrs.Version;
    this._value = this._node.text;
  }

  get version() {
    return this._version;
  }

  get value() {
    return this._value;
  }

  get obj() {
    return {
      value: this.value,
      version: this.version,
    };
  }
}

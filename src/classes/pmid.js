module.exports = class Pmid {
  constructor(node) {
    this._node = node;
    this._version = node.attrs.Version;
    this._value = node.text;
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

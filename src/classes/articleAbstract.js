module.exports = class ArticleAbstract {
  constructor(root) {
    this._root = root.findNode('MedlineCitation > Article > Abstract');
    this._abstract = [];
    if (this._root) {
      this._root.eachChildNode((abstractText) => {
        this._abstract.push({
          label: abstractText.getAttr('Label'),
          content: abstractText.text,
        });
      })
    }
  }

  get abstract() {
    return this._abstract;
  }

  get list() {
    return this.abstract;
  }
}

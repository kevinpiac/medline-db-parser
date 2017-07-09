module.exports = class ArticleJournal {
  constructor(root) {
    this._root = root.findNode('MedlineCitation > Article > Journal');
    let issn = this._root.findChild('ISSN');
    let journalIssue = this._root.findChild('JournalIssue');

    this._issn = {
      value: issn.text,
      type: issn.getAttr('IssnType'),
    };
    this._journalIssue = {
      volume: journalIssue.findChild('Volume').text,
      issue: journalIssue.findChild('Issue').text,
      citedMedium: journalIssue.getAttr('CitedMedium'),
    };
    this._title = this._root.findChild('Title').text;
    this._isoAbbreviation = this._root.findChild('ISOAbbreviation').text;
  }

  get issn() {
    return this._issn;
  }

  get journalIssue() {
    return this._journalIssue;
  }

  get title() {
    return this._title;
  }

  get isoAbbreviation() {
    return this._isoAbbreviation;
  }

  get obj() {
    return {
      issn: this.issn,
      journalIssue: this.journalIssue,
      title: this.title,
      isoAbbreviation: this.isoAbbreviation,
    };
  }
}

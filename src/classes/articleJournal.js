module.exports = class ArticleJournal {
  constructor(root) {
    this._root = root.findNode('MedlineCitation > Article > Journal');
    let issn = this._root.findChild('ISSN');
    let journalIssue = this._root.findChild('JournalIssue');

    this._issn = {
      value: issn.text,
      type: issn.attrs.IssnType,
    };
    this._journalIssue = {
      volume: journalIssue.findChild('Volume').text,
      issue: journalIssue.findChild('Issue').text,
    };
  }

  get issn() {
    return this._issn;
  }

  get journalIssue() {
    return this._journalIssue
  }

  get obj() {
    return {
      issn: this.issn,
      journalIssue: this.journalIssue,
    };
  }
}

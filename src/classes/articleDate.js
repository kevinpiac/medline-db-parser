module.exports = class ArticleDate {
  constructor(node) {
    this._node = node;
    this._year = node.findChild('Year').text;
    this._month = node.findChild('Month').text;
    this._day = node.findChild('Day').text;
  }

  get year() {
    return this._year;
  }

  get month() {
    return this._month;
  }

  get day() {
    return this._day;
  }

  get date() {
    return new Date(this.year, this.month, this.day);
  }

  get obj() {
    return {
      year: this.year,
      month: this.month,
      day: this.year,
      date: this.date,
    };
  }
}

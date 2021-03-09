class User {
  constructor(data) {
    this.data = data;
  }

  processData() {
    const title = this._title();

    const info = {
      title,
    };

    return info;
  }

  _title() {
    return `<p> Hello, ${this.data.name} </p>`;
  }
}

module.exports = {
  User,
};

const puppeter = require("puppeter");

class PDFCreate {
  constructor(data) {
    this.data = data;
  }

  // public method
  async createForUser() {
    // private method
    const result = await this._createForUser();

    return result;
  }

  async _createForUser() {
    /**
    puppeter.someMethod()
    SOME VERY HARD LOGIC WITH MANY LINES OF CODE
    
    */
  }
}

module.exports = {
  PDFCreate,
};

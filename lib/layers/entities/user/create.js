const http = require("http");

const { User } = require("../../../models/index");
const { User: UserDomain } = require("../../../domainModel/index");
const { PDFCreate } = require("../../PDF/PdfCreator");
const { CustomError } = require("../../../utils/errors/ApiError");
const { userCreate } = require("../../apiRequest");

class UserCreate {
  constructor(params) {
    this.data = params;
  }

  async createUser() {
    // START TRANSACTION
    const result = await this._createHelper();

    /// END TRANSACTION

    return result;
  }

  async _createHelper() {
    await this._validate();
    // imagine that we need aggregate data before insert in db or make other action
    // or we need to create http request and aggregate ALL date
    const userDomain = new UserDomain(this.data);

    // no http request
    // no any other async request
    // ONLY data processing
    // so function is sync
    const aggregatedUserData = userDomain.processData();

    const pdfCreatorHelper = new PDFCreate(aggregatedUserData);
    const pathToPDF = await pdfCreatorHelper.createForUser();

    // WE HAVE FINISHED ALL PREPARATION. NOW WE CAN SAVE DATA TO DB;

    await this._saveUser({pathToPDF, aggregatedUserData});
  }

  async _validate() {
    const emailPromise = this._checkEmailUniq();

    await Promise.all([emailPromise]);
  }

  async _checkEmailUniq() {
    const isExist = await User.findByEmail(this.data.email);

    if (isExist) {
      throw new CustomError("SOME_TEXT");
    }
  }

  _saveUser({pathToPDF, aggregatedUserData}) {
      const user = await User.saveUser({
        pathToPDF,
        aggregatedUserData
      })

      return user
  }
}

module.exports = { UserCreate };

const { User } = require("../db/models");
class UserService {
  static async getUsers() {
    try {
      return await User.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }
//создание юзера (рега)
  static async createUser(data) {
    try {
      return await User.create(data);
    } catch (error) {
      throw new Error(error);
    }
  }

  //поиск юзера (лога)
  static async getUserByEmail(email) {
    try {
      return await User.findOne({ where: { email } });
    } catch (error) {
      throw new Error(error);
    }
  }
}

module.exports = UserService;

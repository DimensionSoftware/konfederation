/**
   This is a driver for saving users to the filesystem.
   It's used mostly for testing.
 */
import Promise from 'bluebird';
let fs = Promise.promisifyAll(require('fs'));

module.exports = class UserFS {

  constructor(opts={}) {
    this.base = opts.base || '/tmp';
  }

  /**
   * Find a user by name and password.
   *
   * @param {String} name
   * @param {String} password
   * @return {Promise}
   */
  async find(name, password) {
    let path = this.base + "/" + name;
    let json = await fs.readFileAsync(path, { encoding: 'utf8' });
    let user = JSON.parse(json);
    if (user.password == password) {
      return user;
    }
    else {
      return null;
    }
  }

  /**
   * Create a user
   *
   * @param {Object} user
   * @return {Promise}
   */
  async create(user) {
    let path = this.base + "/" + user.name;
    let json = JSON.stringify(user);
    await fs.writeFileAsync(path, json, { encoding: 'utf8' });
  }

};

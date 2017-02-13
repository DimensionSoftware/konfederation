/**
   This is a driver for saving users to the filesystem.
   It's used mostly for testing.
 */
import Promise from 'bluebird';
let fs = Promise.promisifyAll(require('fs'));

module.exports = class UserFS {

  constructor(opts={}) {
    this.base = opts.base || '/tmp';
    this.validName = opts.validName || function(name) {
      if (typeof name === 'string') {
        if (name.length > 0) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    };
  }

  async _findByName(name) {
    let path = this.base + "/" + name;
    let json = await fs.readFileAsync(path, { encoding: 'utf8' });
    let user = JSON.parse(json);
    return user;
  }

  /**
   * Find a user by name and password.
   *
   * @param {String} name
   * @param {String} password
   * @return {Promise}
   */
  async find(name, password) {
    let user = await this._findByName(name);
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

  /**
   * Link a user to a 3rd party authenticator
   * @param {Object} username
   * @param {Object} thirdParty
   * @return {Promise}
   */
  async link(name, thirdParty) {
    let path = this.base + "/" + user.name;
    let user = await this._findByName(name);
    let key  = thirdParty.name;
    if (!user.auths) {
      user.auths = {};
    }
    user.auths[key] = thirdParty;
    let json = JSON.stringify(user);
    await fs.writeFileAsync(path, json, { encoding: 'utf8' });
    return user;
  }

};

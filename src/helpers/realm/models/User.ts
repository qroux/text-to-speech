export default class User {
  /**
   * Getter for the class name
   * @return {String} Class name
   */
  static get() {
    return User.schema.name;
  }

  /**
   * Gets the model primary key
   * @return {String} Primary key of the session model
   */
  static primaryKey() {
    return User.schema.primaryKey;
  }

  /**
   * Class (Realm) schema
   * @type {Object}
   */
  static schema = {
    name: "User",
    primaryKey: "id",

    properties: {
      id: "int",
      username: "string",
    },
  };
}

import User from "../models/User";
// import type Realm from 'realm'

const defId = 1;
export default (realmInstance: any): any => {
  return {
    getData: (): any => {
      return realmInstance.objects(User.get());
    },
    update: (data: any): Promise<void> => {
      return new Promise((resolve, reject) => {
        try {
          realmInstance.write(() => {
            realmInstance.create(User.get(), data, true);
          });
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },
    add: (user: any): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Auto increment ID logic
        const lastUser = realmInstance
          .objects(User.get())
          .sorted("id", true)[0];
        const highestId = lastUser == null ? 0 : lastUser.id;
        user.id = highestId == null ? 1 : highestId + 1;

        try {
          realmInstance.write(() => {
            realmInstance.create(User.get(), user, true);
          });
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },
    delete: (user: any): Promise<void> => {
      return new Promise((resolve, reject) => {
        try {
          realmInstance.write(() => {
            realmInstance.delete(user);
          });
          resolve();
        } catch (err) {
          reject(err);
        }
      });
    },
  };
};

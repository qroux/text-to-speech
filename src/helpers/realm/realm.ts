import Realm from "realm";
import User from "./models/User";

const realmInstance = new Realm({ schema: [User.schema] });

export { realmInstance };

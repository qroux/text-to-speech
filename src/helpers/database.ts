import Realm, { Configuration, ConfigurationWithoutSync } from "realm";

export const WORD_SCHEMA = "Word";
export const WORDLIST_SCHEMA = "WordList";

export const WordSchema = {
  name: WORD_SCHEMA,
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    count: "int",
  },
};

export const WordList = {
  name: WORDLIST_SCHEMA,
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    words: { type: "list", objectType: WORDLIST_SCHEMA },
  },
};

type WordType = {
  id: number;
  name: string;
  count: number;
};

type WordListType = {
  id: number;
  name: string;
  words: WordType[];
};

const databaseOptions = {
  path: "texttospeech.realm",
  schema: [WORDLIST_SCHEMA, WORD_SCHEMA],
  //   schemaVersion: 0,
};

export const insertNewWordList = (newWordList: WordListType) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(WORDLIST_SCHEMA, newWordList);
          resolve(newWordList);
        });
      })
      .catch((error) => reject(error));
  });

export const updateWordList = (wordList: WordListType) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions).then((realm) => {
      realm.write(() => {
        let updatingWordList: WordListType | undefined =
          realm.objectForPrimaryKey(WORDLIST_SCHEMA, wordList.id);
        if (updatingWordList) {
          updatingWordList.words = wordList.words;
          resolve(updatingWordList);
        }
        resolve(updatingWordList);
      });
    });
  });

export const deleteWordList = (wordListId: number) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const deletingWordList = realm.objectForPrimaryKey(
            WORDLIST_SCHEMA,
            wordListId
          );
          realm.delete(deletingWordList);
          resolve(deletingWordList);
        });
      })
      .catch((error) => reject(error));
  });

export const deleteAllWordList = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const allWordList = realm.objects(WORDLIST_SCHEMA);
          realm.delete(allWordList);
          resolve(allWordList);
        });
      })
      .catch((error) => reject(error));
  });

export const getAllWordList = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          const allWordList = realm.objects(WORDLIST_SCHEMA);
          resolve(allWordList);
        });
      })
      .catch((error) => reject(error));
  });

export default new Realm(databaseOptions);

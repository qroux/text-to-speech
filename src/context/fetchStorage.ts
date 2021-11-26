import AsyncStorage from "@react-native-async-storage/async-storage";
import { WordsObject } from "./AppContext";

export const fetchStorage = async () => {
  const keys = await AsyncStorage.getAllKeys();
  const kv: any = await AsyncStorage.multiGet(keys);

  const wordObj: WordsObject = {};

  kv.forEach((pair: [string, string]) => {
    wordObj[pair[0]] = parseInt(pair[1], 10);
  });

  return [wordObj, keys];
};

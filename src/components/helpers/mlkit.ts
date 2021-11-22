import { NativeModules } from "react-native";

const { TextRecognitionModule } = NativeModules;

type Rect = {
  width: number;
  height: number;
  left: number;
  top: number;
};

type Line = {
  text: string;
  rect: Rect;
};

type block = {
  text: string;
  rect: Rect;
  lines: Line[];
};

export type response = {
  width: number;
  height: number;
  blocks: block[];
};

export const recognizeImage = (url: string): Promise<Response> => {
  return TextRecognitionModule.recognizeImage(url);
};

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

type Block = {
  text: string;
  rect: Rect;
  lines: Line[];
};

export type Response = {
  blocks: Block[];
};

export type BlockContent = {
  text: string;
};

export type Blocks = BlockContent[];

export const recognizeImage = (url: string): Promise<Response> => {
  return TextRecognitionModule.recognizeImage(url);
};

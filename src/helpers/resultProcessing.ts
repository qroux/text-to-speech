import { BlockContent, Blocks } from "./mlkit";

export function sanitizeString(str: string) {
  str = str.replace(/[^a-z0-9áéíóúñü '_-]/gim, "");
  return str.trim().toLowerCase();
}

export function concatTextBlocks(result: Blocks) {
  const humanizedBlocks = result.map((block: BlockContent) =>
    block.text.replace(/(\r\n|\n|\r)/gm, " ")
  );
  return humanizedBlocks.join(" ");
}

import I18n from "i18n-js";

export function internationalize(ressource: string) {
  return I18n.t(ressource);
}

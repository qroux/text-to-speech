import { useEffect } from "react";
import i18n from "i18n-js";
import { useNavigation } from "@react-navigation/core";

type HookProps = {
  lang: string;
  ressource: string;
};

export function useHeaderTitle({ lang, ressource }: HookProps) {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: i18n.t(ressource) });
  }, [lang]);
}

import React from "react";
import Translator from "../translations/Translator";

const defaultLocale = "en";
const LocaleContext = React.createContext();

function useLocale() {
  const context = React.useContext(LocaleContext);

  return context;
}

const LocaleProvider = props => {
  const [locale, setState] = React.useState(defaultLocale);

  const toggleLocale = React.useCallback(() => {
    const newVal = locale === "en" ? "es" : "en";
    setLocale(newVal);
  }, [locale]);

  const setLocale = newVal => {
    Translator.loadLanguageFile(newVal).then(() => setState(newVal));
  };

  const value = React.useMemo(() => [locale, setLocale, toggleLocale], [
    locale,
    toggleLocale
  ]);

  return <LocaleContext.Provider value={value} {...props} />;
};

export { useLocale, LocaleProvider, LocaleContext };

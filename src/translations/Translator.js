import React from "react";
import { useLocale, LocaleContext } from "../context/LocaleContext";
import * as enTranslations from "./en.json";

const translations = {
  en: enTranslations,
  es: {}
};

let currentLocale = "en";

const get = (key) => {
  const locale = currentLocale;
  // const [locale] = "en"; //useLocale();

  if (typeof translations[locale][key] !== undefined) {
    return translations[locale][key];
  } else {
    console.log(`No translation found for ${key} in ${locale} locale`);
    return `${key}-${locale}`;
  }
};

const loadLanguageFile = (lang = "en") => {
  const isLoaded = Object.keys(translations[lang]).length > 0;
  if (isLoaded) {
    currentLocale = lang;
    return Promise.resolve();
  }

  const path = `/${lang}.json`;
  console.log("fetching ", path);
  return fetch(path)
    .then((response) => response.json())
    .then((json) => {
      console.log("fetched translations ", json);
      translations[lang] = json;
      currentLocale = lang;
    })
    .catch((err) => console.log(err));
};

export default {
  get,
  loadLanguageFile
};

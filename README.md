# Language_Switching_Context_API

## Overview
 - utilze [ReactJS Context API](https://reactjs.org/docs/context.html) & hooks to build a Language Switching feature
 - translations are kept inside json file (eg: `en.json`, `es.json`)
 - english language is used by default & once translations are loaded then they are cached to prevent unnecessary Http request
 - build custom hook `useLocale`, `LocaleProvider` & `LocaleContext`

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../context/LocaleContext";
import Translator from "../translations/Translator";

export default function Nav(props) {
  const [locale, , toggleLocale] = useLocale();

  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">{Translator.get("home")}</Link>
        </li>
        <li>
          <Link to="/blog">{Translator.get("blog")}</Link>
        </li>
        <li>
          <Link to="/about">{Translator.get("about")}</Link>
        </li>
      </ul>
      <button onClick={toggleLocale}>{locale}</button>
    </nav>
  );
}

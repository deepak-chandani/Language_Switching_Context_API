import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import { LocaleProvider } from "./context/LocaleContext";
import Nav from "./components/Nav";
import Translator from "./translations/Translator";

export default function App() {
  return (
    <Router>
      <LocaleProvider>
        <div className="App">
          <Nav />
          <h1>{Translator.get("hello")} CodeSandbox</h1>
        </div>
      </LocaleProvider>
    </Router>
  );
}

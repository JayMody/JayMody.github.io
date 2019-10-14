import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'particles.js/particles';
const particlesJS = window.particlesJS;

ReactDOM.render(<App />, document.getElementById("root"));
particlesJS('root', require('./particles.json'));


import "./style.css";
import { buildHomePage } from "./home.js";
import { buildMenuPage } from "./menu.js";
import { buildEventsPage } from "./events.js";
import { buildContactPage } from "./contact.js";

document.getElementById("btnLogo").addEventListener("click", buildHomePage);
document.getElementById("btnHome").addEventListener("click", buildHomePage);
document.getElementById("btnMenu").addEventListener("click", buildMenuPage);
document.getElementById("btnEvents").addEventListener("click", buildEventsPage);
document
  .getElementById("btnContact")
  .addEventListener("click", buildContactPage);

buildHomePage();

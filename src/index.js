import "./style.css";
import { buildHomePage } from "./home.js";
import { buildMenuPage } from "./menu.js";
import { buildLocationsPage } from "./locations.js";
import { buildContactPage } from "./contact.js";

document.getElementById("btnHome").addEventListener("click", buildHomePage);
document.getElementById("btnMenu").addEventListener("click", buildMenuPage);
document
  .getElementById("btnLocations")
  .addEventListener("click", buildLocationsPage);
document
  .getElementById("btnContact")
  .addEventListener("click", buildContactPage);

buildHomePage();

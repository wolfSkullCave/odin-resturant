// index.js
// Entry point for the odin-resturant website.
// Sets up page builders and wires the main navigation buttons.
// Assumes the DOM contains buttons with IDs: btnLogo, btnHome, btnMenu, btnEvents, btnContact.

import "./style.css";
import { buildHomePage } from "./home.js";
import { buildMenuPage } from "./menu.js";
import { buildEventsPage } from "./events.js";
import { buildContactPage } from "./contact.js";

/**
 * Helper: attach a click handler to an element by ID.
 * Logs a warning if the element is missing so missing DOM nodes are easier to debug.
 * @param {string} id - element id
 * @param {Function} handler - click handler
 */
const bindClick = (id, handler) => {
  const el = document.getElementById(id);
  if (!el) {
    // Keep this short and actionable for debugging
    console.warn(`bindClick: element not found: ${id}`);
    return;
  }
  el.addEventListener("click", handler);
};

// Wire up navigation buttons to thier page builder functions.
// Each builder replaces the main content area; handler are lightweight.
bindClick("btnLogo", buildHomePage);
bindClick("btnHome", buildHomePage);
bindClick("btnMenu", buildMenuPage);
bindClick("btnEvents", buildEventsPage);
bindClick("btnContact", buildContactPage);

// Initial page load: render home page on startup.
// Calling the builder directly keeps startup behaviour explicit and testible.
buildHomePage();

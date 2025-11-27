import { pageLoad } from "./page-load.js";

function buildMenuPage() {
  const h1 = document.createElement("h1");

  h1.textContent = "Menu";

  pageLoad(h1);

  // ToDo: Fill page with content.
}

export { buildMenuPage };

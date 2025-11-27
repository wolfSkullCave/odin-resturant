import { pageLoad } from "./page-load.js";

function buildHomePage() {
  const h1 = document.createElement("h1");
  h1.textContent = "Home";

  pageLoad(h1);

  // ToDo: Fill page with content.
}

export { buildHomePage };

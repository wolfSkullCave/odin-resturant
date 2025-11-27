import { pageLoad } from "./page-load.js";

function buildContactPage() {
  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";

  pageLoad(h1);
}

export { buildContactPage };

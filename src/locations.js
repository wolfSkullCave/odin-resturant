import { pageLoad, clearContents } from "./page-load.js";

function buildLocationsPage() {
  clearContents();
  const h1 = document.createElement("h1");
  h1.textContent = "Locations";

  pageLoad(h1);
  // ToDo: Fill page with content.
}

export { buildLocationsPage };

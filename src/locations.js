import { pageLoad } from "./page-load.js";

function buildLocationsPage() {
  const h1 = document.createElement("h1");
  h1.textContent = "Locations";

  pageLoad(h1);
}

export { buildLocationsPage };

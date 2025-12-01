import { pageLoad } from "./page-load";

function buildEventsPage() {
  const eventsPage = pageLoad();
  eventsPage.clear();
  eventsPage.addClass("eventsPage");

  const content = document.createElement("div");
  content.innerHTML = `
  <h1>Events</h1>
  <h2>Celebrate in Valhalla!</h2>
  <p>Host your next event in our grand banquet hall. Available for weddings, corporate gatherings, and special celebrations. Experience a feast worthy of the gods, complete with customized menus and entertainment options.</p>

  `;

  eventsPage.add(content);
}

export { buildEventsPage };

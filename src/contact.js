// contact.js
// Build the contact page along with its contents.

import { pageLoad, clearContents } from "./page-load.js";

function buildContactPage() {
  const contactPage = pageLoad();
  contactPage.clear();
  contactPage.addClass("contactPage");

  const content = document.createElement("div");
  content.innerHTML = `
  <h1>Contact Us</h1>
  <h2>Visit Us</h2>
  <p><strong>Address: </strong>123 Mythical Road, Valhalla City, XC1234</p>
  <p><strong>Phone: </strong>+123 456 7890</p>
  <p><strong>Email:</strong> info@hallsofvalhalla.com</p>

  <h2>Hours of Operation</h2>

  <p><strong>Monday to Friday: </strong>11:00 AM - 10:00 PM</p>
  <p><strong>Saturday: </strong>10:00 AM - 11:00 PM</p>
  <p><strong>Sunday: </strong>Closed</p>
  `;

  contactPage.add(content);
}

export { buildContactPage };

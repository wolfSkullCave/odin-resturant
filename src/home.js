import { pageLoad } from "./page-load.js";

function buildHomePage() {
  const homePage = pageLoad();
  homePage.clear();
  homePage.addClass("homePage");

  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to The Halls of Valhalla";

  const text = document.createElement("p");
  text.textContent =
    "Welcome to Valhalla, where legends and flavors unite. Nestled in the heart of the city, our restaurant offers an unforgettable dining experience inspired by the rich heritage of Nordic cuisine. Prepare your taste buds for a culinary adventure that will transport you straight to the feasting halls of the gods.";

  const aboutHeading = document.createElement("h2");
  const aboutText = document.createElement("p");

  const aboutSection = document.createElement("div");
  aboutSection.innerHTML = `
  <h2>About Us</h2>
  <p>At The Halls of Valhalla, we strive to create an unforgettable dining experience that honors the robust and hearty meals reflective of Norse mythology. Nestled in the heart of the city, our restaurant pays homage to the legendary tales of Odin, Thor, and the Valkyries.</p>
`;

  const mission = document.createElement("div");
  mission.innerHTML = `
  <h2>Our Mission</h2>
  <p>To celebrate the spirit of Norse mythology through food that nourishes the body and soul. Each dish is crafted with fresh ingredients, bringing traditional recipes to modern dining.</p>
`;

  homePage.add(h1);
  homePage.add(text);
  homePage.add(aboutSection);
  homePage.add(mission);
}

export { buildHomePage };

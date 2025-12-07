// menu.js
// Build the menu page along with its contents.

import { pageLoad } from "./page-load.js";

function buildMenuPage() {
  // Prepping the content div
  const menuPage = pageLoad();
  menuPage.clear();
  menuPage.addClass("menuPage");

  // Creating elememts
  function h1(text) {
    const h1 = document.createElement("h1");
    h1.textContent = text;
    return h1;
  }

  function h2(text) {
    const h2 = document.createElement("h2");
    h2.textContent = text;
    return h2;
  }

  function h3(text) {
    const h3 = document.createElement("h3");
    h3.textContent = text;
    return h3;
  }

  function div() {
    const div = document.createElement("div");
    return div;
  }

  function card(img, title, text) {
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const divImg = document.createElement("div");
    divImg.classList.add("cardImg");

    const divTxt = document.createElement("div");
    divTxt.classList.add("cardTxt");

    divImg.appendChild(img);
    divTxt.innerHTML = `<h3>${title}</h3> <p>${text}</p>`;

    divCard.appendChild(divImg);
    divCard.appendChild(divTxt);

    return divCard;
  }

  function imgPlaceholder() {
    const img = div();
    img.innerHTML = "placeholder";
    img.classList.add("imgPlaceholder");

    return img;
  }

  const starter1 = card(
    imgPlaceholder(),
    "Oding's Feast Platter",
    "A selection of smoked meats, cheeses, and pickled vegetables, perfect for sharing.",
  );

  const starter2 = card(
    imgPlaceholder(),
    "Nordic Soup",
    "Rustic broth with root vegetables and herbs, served with warm bread.",
  );

  const main1 = card(
    imgPlaceholder(),
    "Odin’s Roast",
    "Slow-roasted beef with juniper glaze, accompanied by roasted potatoes and seasonal greens.",
  );

  const main2 = card(
    imgPlaceholder(),
    "Freya’s Catch",
    "Grilled salmon with dill butter, served with barley pilaf and lemon wedges.",
  );

  const main3 = card(
    imgPlaceholder(),
    "Veggie Hall",
    "Charred root vegetables, wild mushrooms, and spiced lentils in a rich tomato base.",
  );

  const dessert1 = card(
    imgPlaceholder(),
    "Honey Mead Cake",
    "Moist sponge infused with honey and mead, topped with cream.",
  );

  const dessert2 = card(
    imgPlaceholder(),
    "Rune Cookies",
    "Shortbread biscuits stamped with ancient runes, served with hot chocolate.",
  );

  const drink1 = card(
    imgPlaceholder(),
    "Mead",
    "Traditional honey wine, sweet and aromatic.",
  );

  const drink2 = card(
    imgPlaceholder(),
    "Herbal Tea",
    "A calming blend of Nordic herbs and flowers.",
  );

  menuPage.add(h1("Menu"));

  menuPage.add(h2("Starters"));
  const divGrid = div();
  divGrid.classList.add("menuGrid");
  divGrid.appendChild(starter1);
  divGrid.appendChild(starter2);
  menuPage.add(divGrid);

  menuPage.add(h2("Main Courses"));
  const divMains = div();
  divMains.classList.add("menuGrid");
  divMains.appendChild(main1);
  divMains.appendChild(main2);
  divMains.appendChild(main3);
  menuPage.add(divMains);

  menuPage.add(h2("Desserts"));
  const divDesserts = div();
  divDesserts.classList.add("menuGrid");
  divDesserts.appendChild(dessert1);
  divDesserts.appendChild(dessert2);
  menuPage.add(divDesserts);

  menuPage.add(h2("Drinks"));
  const divDrinks = div();
  divDrinks.classList.add("menuGrid");
  divDrinks.appendChild(drink1);
  divDrinks.appendChild(drink2);
  menuPage.add(divDrinks);
}

export { buildMenuPage };

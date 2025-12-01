import { pageLoad } from "./page-load.js";

function buildMenuPage() {
  const menuPage = pageLoad();
  menuPage.clear();

  const h1 = document.createElement("h1");
  h1.textContent = "Menu";

  menuPage.add(h1);
  // ToDo: Fill page with content.
  const content = document.createElement("div");
  content.innerHTML = `
  <h3>Starters</h3>
  <ul>
    <li> <strong>Odin's Feast Platter:</strong> A selection of smoked meats, cheeses, and pickled vegetables, perfect for sharing.</li>
    <li><strong>Valkyrie’s Bounty Salad:</strong> A refreshing mix of seasonal greens, nuts, and berries, drizzled with honey-mustard dressing.</li>
  </ul>
  <h3>Main Courses</h3>
  <ul>
    <li> <strong>Thor’s Hammer steak:</strong> Juicy grilled ribeye served with roasted garlic and seasonal vegetables.</li>
    <li><strong>Frey’s Fish:</strong> Herb-crusted salmon with a side of barley risotto and asparagus.</li>
   </ul>
  <h3>Desserts</h3>
  <ul>
    <li><strong>Heavenly Nectar Cake: </strong>A rich honey cake topped with whipped cream and berries.</li>
    <li><strong>Valhalla Chocolate Mousse:</strong> Decadent dark chocolate mousse served with a dusting of cocoa.</li>
   </ul>
  <h3>Drinks</h3>
  <ul>
Mjölnir Wine: A selection of wines from the finest vineyards of Midgard.
Nordic Sodas: Refreshing sodas inspired by ancient recipes, made with natural ingredients.
   </ul>
`;

  menuPage.add(content);
}

export { buildMenuPage };

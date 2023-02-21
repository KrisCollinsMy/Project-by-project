import "./App.scss";
import { useState } from "react";
import MenuItems from "./components/MenuItems";
import MenuFilterButtons from "./components/MenuFilterButtons";
import menuItemsList from "./data/menu-items.json";

function App() {
  const [menuItems, setMenuItems] = useState(menuItemsList);

  return (
    <div className="App">
      {/*title*/}
      <div className="menu-title">
        <h1>Our Menu</h1>
        <hr />
      </div>
      {/*menu button filters section*/}
      <div id="menu-category-container">
        <button
          onClick={() => setMenuItems(menuItemsList)}
          className="menu-food-category"
          data-id="all"
          type="button"
        >
          All
        </button>
        <MenuFilterButtons setMenuItems={setMenuItems} />
      </div>
      {/*menu items section*/}
      <section id="menu-items">
        <MenuItems menuItems={menuItems} />
      </section>
    </div>
  );
}

export default App;

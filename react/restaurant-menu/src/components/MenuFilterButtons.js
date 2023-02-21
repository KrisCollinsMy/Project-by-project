import { v4 } from 'uuid'
import menuItems from "../data/menu-items.json";

const MenuFilterButtons = ({ setMenuItems }) => {
  let menuCategories = menuItems.map(function (item) {
    return item.category;
  });

  menuCategories = [...new Set(menuCategories)];

  let menuCategoryButtons = menuCategories.map(function (category) {
    return (
      <button key={v4()}
        onClick={() =>
          setMenuItems(
            menuItems.filter(function (item) {
              return item.category === category;
            })
          )
        }
        className="menu-food-category"
        data-id={category}
        type="button"
      >
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    );
  });

  return menuCategoryButtons;
};

export default MenuFilterButtons;

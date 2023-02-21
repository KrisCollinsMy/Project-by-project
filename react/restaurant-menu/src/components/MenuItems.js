

const MenuItems = ({ foodCategory = "all", menuItems }) => {
  let menuItemsArray = menuItems
    .filter(function (item) {
      return foodCategory !== "all" ? item.category === foodCategory : item;
    })
    .map((item) => {
      return (
        <article key={item.id} className="menu-item">
          <img src={`./images/${item.photo}`} alt={item.name} />
          <div className="menu-item-description">
            <div className="menu-item-header">
              <h4>{item.name}</h4>
              <h4 className="menu-item-price">${item.price}</h4>
            </div>
            <p>{item.description}</p>
          </div>
        </article>
      );
    });

  return menuItemsArray;
};

export default MenuItems;

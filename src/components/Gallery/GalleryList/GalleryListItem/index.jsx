import React from "react";

const GalleryListItem = ({ item, setActiveItem, activeItem }) => {
  return (
    <div
      className={`gallery__list__item ${
        activeItem === item.id ? "active" : ""
      }`}
      onClick={() => setActiveItem(item.id)}
    >
      <div className="banner">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="content">
        <div className="category">
          <span>{item.category}</span>
        </div>
        <div className="title">
          <span>{item.title}</span>
        </div>
      </div>
    </div>
  );
};

export default GalleryListItem;

import React, { useState } from "react";

//componets
import GalleryListItem from "./GalleryListItem/";

const GalleryList = ({ gallery }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className="gallerylist__container">
      <div className="gallery__list">
        {gallery?.map((item) => (
          <GalleryListItem
            item={item}
            key={item.id}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryList;

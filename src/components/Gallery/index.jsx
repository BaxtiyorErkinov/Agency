import React, { useState } from "react";
import { data } from "../../data";

//images
import Img6 from "../../assets/images/img6.png";
import Img7 from "../../assets/images/img7.png";
import Img8 from "../../assets/images/img8.png";

//components
import Filters from "../Filters/";
import GalleryList from "./GalleryList/";

//styles
import "./gallery.scss";

const forLoadData = [
  {
    id: 1,
    img: Img6,
    category: "Branding",
    title: "HandP",
  },
  {
    id: 2,
    img: Img7,
    category: "Motion",
    title: "Architect",
  },
  {
    id: 3,
    img: Img8,
    category: "Design",
    title: "CalC",
  },
];

const Gallery = () => {
  const [gallery, setGallery] = useState(data);
  const [filter, setFilter] = useState("");

  function getFilteredGallery() {
    if (filter) {
      return [...gallery].filter((item) => item.category === filter);
    }
    return gallery;
  }
  const filteredGallery = getFilteredGallery();

  const handleLoad = () => {
    setGallery((prev) => {
      if (!filter) {
        return [...prev, ...forLoadData];
      } else {
        const filteredData = forLoadData.filter(
          (item) => item.category === filter
        );
        return [...prev, ...filteredData];
      }
    });
  };

  return (
    <section>
      <div className="filters">
        <Filters setFilter={setFilter} filter={filter} />
      </div>
      <div className="gallery">
        <GalleryList gallery={filteredGallery} />
      </div>
      <div className="action">
        <button className="action-btn" onClick={handleLoad}>
          LOAD MORE
        </button>
      </div>
    </section>
  );
};

export default Gallery;

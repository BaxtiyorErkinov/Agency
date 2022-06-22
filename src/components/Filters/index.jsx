import React, { useState } from "react";
import { filters } from "../../data";

//icons
import { RiArrowDropDownLine } from "react-icons/ri";

//styles
import "./filters.scss";

const Filters = ({ setFilter, filter }) => {
  const [activeFilter, setActiveFilter] = useState(1);

  return (
    <div className="filters__container">
      <ul className="filters__list">
        {filters.map((item) => (
          <li
            className={`filters__list-item ${
              item.category === filter ? "active" : ""
            }`}
            key={item.id}
            onClick={() => setFilter(item.category)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="select" tabIndex="1">
        <div className="dropdown">
          <RiArrowDropDownLine />
        </div>
        <input
          className="selectopt"
          name="test"
          type="radio"
          id="opt1"
          defaultChecked
        />
        <label htmlFor="opt1" className="option" onClick={() => setFilter("")}>
          Show All
        </label>
        <input className="selectopt" name="test" type="radio" id="opt2" />
        <label
          htmlFor="opt2"
          className="option"
          onClick={() => setFilter("Design")}
        >
          Design
        </label>
        <input className="selectopt" name="test" type="radio" id="opt3" />
        <label
          htmlFor="opt3"
          className="option"
          onClick={() => setFilter("Branding")}
        >
          Branding
        </label>
        <input className="selectopt" name="test" type="radio" id="opt4" />
        <label
          htmlFor="opt4"
          className="option"
          onClick={() => setFilter("Illustration")}
        >
          Illustration
        </label>
        <input className="selectopt" name="test" type="radio" id="opt5" />
        <label
          htmlFor="opt5"
          className="option"
          onClick={() => setFilter("Motion")}
        >
          Motion
        </label>
      </div>
    </div>
  );
};

export default Filters;

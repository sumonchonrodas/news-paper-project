import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Qzone from "../Qzone/Qzone";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h4>All Catagories</h4>
      <div className="ps-4 mt-4">
        {categories.map(category =>
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className=" text-black text-decoration-none"
            >
              {category.name}
            </Link>
          </p>
        )}
      </div>
      <Qzone></Qzone>
    </div>
  );
};

export default LeftNav;

import React, { useContext } from "react";
import "./addNewProject.scss";
import { categoryContext } from "./AddProject";
export default function Category({ category }) {
  const context = useContext(categoryContext);

  const addCategory = () => {
    context.setProjectCategory(category.id);
  };
  return (
    <>
      <div className="manager d-flex-row">
        <div>{category.id}</div>
        <div>{category.name}</div>
        <input type="checkbox" onChange={addCategory} />
      </div>
    </>
  );
}

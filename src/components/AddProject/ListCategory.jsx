import React from "react";
import Category from "./Category";

export default function ListCategory({ listCategory }) {
  return (
    <>
      <ul>
        {listCategory.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </ul>
    </>
  );
}

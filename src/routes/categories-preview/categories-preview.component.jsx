import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title, id) => {
        const products = categoriesMap[title];

        return <CategoryPreview title={title} products={products} key={id} />;
      })}
    </>
  );
};

export default CategoriesPreview;

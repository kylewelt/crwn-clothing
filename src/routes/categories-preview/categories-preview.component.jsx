import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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

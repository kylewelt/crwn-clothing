import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsCategoriesLoading,
} from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isCategoriesLoading = useSelector(selectIsCategoriesLoading);

  return (
    <>
      {isCategoriesLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title, id) => {
          const products = categoriesMap[title];

          return <CategoryPreview title={title} products={products} key={id} />;
        })
      )}
    </>
  );
};

export default CategoriesPreview;

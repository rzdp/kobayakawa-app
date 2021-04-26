import Category from "./Category/Category"
import categoriesStyles from "./Categories.module.scss";
import CategoryModel from "../../models/CategoryModel";

interface CategoriesProps {
    categories: CategoryModel[];
}

const categories = (props: CategoriesProps) => {

    let categories = null;
    if (props.categories) {
        categories = props.categories.map(category => {
            return (
                <Category key={category.id} category={category}/>
            )
        })
    }

    return (
        <div className={categoriesStyles.Categories}>
            <h2 className={categoriesStyles.header}>
                Components
            </h2>
            <div>
                {categories}
            </div>
        </div>
    )
}

export default categories;
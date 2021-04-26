import categoryStyles from "./Category.module.scss";
import CategoryModel from "../../../models/CategoryModel";
import {useRouter} from "next/router";
import {SyntheticEvent} from "react";

interface CategoryProps {
    category: CategoryModel;
}

const category = (props: CategoryProps) => {

    const router = useRouter()

    const handleClick = (e: SyntheticEvent) => {
        e.preventDefault();
        if (router.query['category'] !== props.category.name) {
            router.push({
                pathname: '/',
                query: {
                    category: props.category.name
                }
            });
        }
    }


    const styles = [categoryStyles.Category];
    if (router.query['category'] == props.category.name) {
        styles.push(categoryStyles.Active)
    }

    return (
        <a className={styles.join(' ')}
           onClick={handleClick}>
            {props.category.name}
        </a>
    )
}

export default category;
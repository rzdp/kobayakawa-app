import {HTTP_BASE_URL} from "../globals/HttpConfiguration";

class CategoryService {

    async getCategories() {
        const categories = await fetch(`${HTTP_BASE_URL}/v1/categories`);
        return await categories.json();
    }

}

export default CategoryService;
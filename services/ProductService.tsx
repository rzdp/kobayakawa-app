import {HTTP_BASE_URL} from "../globals/HttpConfiguration";

class ProductService {

    async getProducts() {
        const products = await fetch(`${HTTP_BASE_URL}/v1/products`);
        return await products.json();
    }

    async getProductsByCategory(category: string) {
        const products = await fetch(`${HTTP_BASE_URL}/v1/products/${category}`);
        return await products.json();
    }

}

export default ProductService;
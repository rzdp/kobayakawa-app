import productsStyles from "./Products.module.scss";
import Product from "./Product/Product";
import ProductModel from "../../models/ProductModel";
import CartModel from "../../models/CartModel";

interface ProductProps {
    products: ProductModel[],
    controlQuantityHandler: Function,
    cart: CartModel
}

const products = (props: ProductProps) => {

    const products = props.products.map(product => {
        return (
            <Product key={product.id}
                     product={product}
                     controlQuantityHandler={props.controlQuantityHandler}
                     cart={props.cart}
            />
        )
    })

    return (
        <div className={productsStyles.Products}>
            {products}
        </div>
    )
}

export default products;
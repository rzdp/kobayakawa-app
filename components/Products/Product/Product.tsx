import productStyles from "./Product.module.scss"
import QuantityControl from "../../QuantityControl/QuantityControl"
import ProductModel from "../../../models/ProductModel";
import CartModel from "../../../models/CartModel";

interface ProductProps {
    product: ProductModel,
    controlQuantityHandler: Function,
    cart: CartModel
}

const product = (props: ProductProps) => {

    const product = props.product;

    let quantity = 0;
    const cart = props.cart;
    if (cart) {
        const cartItems = cart.items;
        if (cartItems) {
            const cartItem = cartItems.find(item => item.productId === product.id);
            if (cartItem) {
                quantity = cartItem.quantity;
            }
        }
    }

    return (
        <div className={productStyles.Product}>
            <div className={productStyles.imageWrapper}>
                <img className={productStyles.image}
                     src={product.imageUrl}
                     alt={product.name}/>
            </div>
            <div className={productStyles.details}>
                <h2 className={productStyles.title}>{product.name}</h2>
                <h3 className={productStyles.subtitle}>{
                    new Intl.NumberFormat('en-US', {currency: 'PHP', style: 'currency'})
                        .format(product.price)
                }</h3>
                <p>{product.description}</p>
            </div>
            <div className={productStyles.action}>
                <QuantityControl quantity={quantity}
                                 productId={product.id}
                                 controlQuantityHandler={props.controlQuantityHandler}/>
            </div>
        </div>
    )
}

export default product;
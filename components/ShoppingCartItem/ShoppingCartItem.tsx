import shoppingCartItemStyles from "./ShoppingCartItem.module.scss";
import QuantityControl from "../QuantityControl/QuantityControl";
const shoppingCartItem = () => {
    return(
        <div className={shoppingCartItemStyles.ShoppingCartItem}>
            <img className={shoppingCartItemStyles.image}
                 src="https://m.media-amazon.com/images/I/61xmbD1BNiL._AC_.jpg"
                 alt="core i5" />
            <p className={shoppingCartItemStyles.title}>AMD Ryzen 5 3600</p>
            <QuantityControl quantity={1} />
            <p className={shoppingCartItemStyles.price}>&#8369; 10,600.00</p>
        </div>
    )
}

export default shoppingCartItem;
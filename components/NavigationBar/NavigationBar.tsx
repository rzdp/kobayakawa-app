import navigationBarStyles from "./NavigationBar.module.scss";
import Link from "next/link";
import CartModel from "../../models/CartModel";

interface NavigationBarProps {
    cart: CartModel
}

const navigationBar = (props: NavigationBarProps) => {



    return (
        <nav className={navigationBarStyles.NavigationBar}>
            <ul className={navigationBarStyles.list}>
                <li className={navigationBarStyles.listItem}>
                    <Link href="/">
                        <img className={navigationBarStyles.logo} src="static/images/logo.png" alt="logo"/>
                    </Link>
                </li>
                <li className={navigationBarStyles.listItem}>
                    <Link href="/shopping-cart">
                        <svg className={navigationBarStyles.icon}>
                            <use xlinkHref="static/images/sprite.svg#icon-cart"/>
                        </svg>
                    </Link>
                    <span className={navigationBarStyles.cartItem}>{props.cart && props.cart.items ? props.cart.items.length : 0}</span>
                </li>
            </ul>
            <div>
                <ul className={navigationBarStyles.list}>
                    <li className={navigationBarStyles.listItem}>
                        <a className={navigationBarStyles.listLink}>
                            <span className={navigationBarStyles.accountText}>Kobayakawa Sena</span>
                            <svg className={navigationBarStyles.accountCaret}>
                                <use xlinkHref="static/images/sprite.svg#icon-caret-right"/>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navigationBar;
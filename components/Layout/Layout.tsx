import {ReactNode} from "react";
import NavigationBar from "../NavigationBar/NavigationBar"

import layoutStyles from "./Layout.module.scss";
import CartModel from "../../models/CartModel";

interface LayoutProps {
    children: ReactNode,
    cart: CartModel
}

const layout = (props: LayoutProps) => {
    return (
        <div className={layoutStyles.Layout}>
            <NavigationBar cart={props.cart}/>
            {props.children}
        </div>
    )
}

export default layout;
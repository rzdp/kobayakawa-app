import Layout from "../../components/Layout/Layout";
import Head from "next/head";
import ShoppingCartItem from "../../components/ShoppingCartItem/ShoppingCartItem"
import shoppingCartStyles from "../../styles/ShoppingCart.module.scss";

const shoppingCart = () => {
    return (
        <>
            <Head>
                <title>Kobayakawa</title>
            </Head>
            <Layout>
                <div className={shoppingCartStyles.ShoppingCart}>
                    <h2 className={shoppingCartStyles.header}>Shopping Cart</h2>
                    <div className={shoppingCartStyles.head}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        <button className="button button-primary">Clear Shopping Cart</button>
                    </div>
                    <div className={shoppingCartStyles.body}>
                        <div className={shoppingCartStyles.menu}>
                            <p/>
                            <p>Product</p>
                            <p className="text-center">Quantity</p>
                            <p className="text-right">Price</p>
                        </div>
                        <ShoppingCartItem />
                        <ShoppingCartItem />
                        <ShoppingCartItem />
                        <ShoppingCartItem />
                    </div>
                    <div className={shoppingCartStyles.foot}>
                        <button className="button button-primary">Checkout</button>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default shoppingCart;
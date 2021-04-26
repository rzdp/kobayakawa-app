import Layout from "../components/Layout/Layout";
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import Head from "next/head";
import homeStyles from "../styles/Home.module.scss";
import {GetServerSidePropsContext} from "next";
import CategoryService from "../services/CategoryService";
import ProductService from "../services/ProductService";
import CategoryModel from "../models/CategoryModel";
import ProductModel from "../models/ProductModel";
import {useEffect, useState} from "react";
import CartModel from "../models/CartModel";
import CartItemModel from "../models/CartItemModel";

interface HomeProps {
    categories: CategoryModel[],
    products: ProductModel[],
}

const home = (props: HomeProps) => {

    const [cart, setCart] = useState<CartModel>({});

    const handleControlQuantity = (productId: number, quantity: number, type: string) => {
        const updatedCart: CartModel = {...cart};
        if (!updatedCart.items) {
            if (type !== 'INCREASE') {
                return;
            }
            const cartItems: CartItemModel[] = [];
            const cartItem: CartItemModel = {
                productId: productId,
                quantity: quantity + 1
            };
            cartItems.push(cartItem);
            updatedCart.items = cartItems;
        } else {
            const cartItems: CartItemModel[] = [...updatedCart.items];
            let cartItem: CartItemModel | undefined =
                cartItems.find(item => item.productId === productId);

            if (cartItem) {
                console.log('Cart item found!: ' + JSON.stringify(cartItem));
                const updatedCartItem = {...cartItem};
                updatedCartItem.quantity = type === 'INCREASE' ? updatedCartItem.quantity + 1 : updatedCartItem.quantity - 1;
                const index = cartItems.findIndex(item => item.productId === productId);
                cartItems[index] = updatedCartItem;
                updatedCart.items = cartItems;
            } else {
                const cartItem: CartItemModel = {
                    productId: productId,
                    quantity: type === 'INCREASE' ? quantity + 1 : quantity - 1
                };
                cartItems.push(cartItem);
                updatedCart.items = cartItems;
            }
        }
        setCart(updatedCart);
    }

    useEffect(() => {
        const data = localStorage.getItem('cart');
        if (data) {
            setCart(JSON.parse(data));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    });

    return (
        <>
            <Head>
                <title>Kobayakawa</title>
            </Head>
            <Layout cart={cart}>
                <div className={homeStyles.Home}>
                    <Categories categories={props.categories}/>
                    <Products products={props.products}
                              controlQuantityHandler={handleControlQuantity}
                              cart={cart}/>
                </div>
            </Layout>
        </>
    )
}

export const getServerSideProps = async (context: GetServerSidePropsContext) => {

    const categoryService = new CategoryService();
    const categories: CategoryModel[] = await categoryService.getCategories();
    if (categories) {
        if (context.query) {
            const category = context.query['category'] ? '' + context.query['category'] : '';
            const productService = new ProductService();
            let products: ProductModel[];
            if (category === '') {
                products = await productService.getProducts();
            } else {
                products = await productService.getProductsByCategory(category);
            }
            if (products) {
                return {
                    props: {
                        categories: categories,
                        products: products
                    }
                }
            }
        }
    }
}

export default home;
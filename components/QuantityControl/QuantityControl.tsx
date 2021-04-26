import quantityControlStyles from "./QuantityControl.module.scss";

interface QuantityControlProps {
    productId: number,
    quantity: number
    controlQuantityHandler: Function
}

const quantityControl = (props: QuantityControlProps) => {

    const controls = props.quantity > 0 ?
        (
            <>
                <button className="button button-primary"
                        onClick={() => props.controlQuantityHandler(props.productId, props.quantity, 'DECREASE')}>
                    -
                </button>
                <p>{props.quantity} in cart</p>
                <button className="button button-primary"
                        onClick={() => props.controlQuantityHandler(props.productId, props.quantity, 'INCREASE')}>
                    +
                </button>
            </>
        ) :
        (
            <button className="button button-primary button-block"
                    onClick={() => props.controlQuantityHandler(props.productId, props.quantity, 'INCREASE')}>
                Add to Cart
            </button>
        )

    return (
        <div className={quantityControlStyles.QuantityControl}>
            <div className={quantityControlStyles.controls}>
                {controls}
            </div>
        </div>
    )
}

export default quantityControl;
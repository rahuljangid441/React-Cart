import React from "react";

const CartItem =(props)=> {

  
        const { price, qty, title } = props.product;
        const { 
            product,
            onIncreaseQty,
            onDecreaseQty,
            onDelete
        } = props;


        return (
            <div className="cart-item">
                <div className="left-block">
                    <img src={product.img} style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25, color: 'grey' }}>{title}</div>
                    <div style={{ fontSize: 25, color: "grey" }}>{price}</div>
                    <div style={{ fontSize: 25, color: 'grey' }}>{qty}</div>
                    <div className="cart-item-actions">
                        <img alt="increaseQty" onClick={() => onIncreaseQty(product)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/9833/9833967.png" />
                        <img alt="decreaseQty" onClick={() => onDecreaseQty(product)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1828/1828899.png" />
                        <img alt="delete" onClick={() => onDelete(product.id)} className="action-icons" src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" />
                    </div>
                </div>
            </div>
        )
    

}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'grey'
    }
}
export default CartItem;
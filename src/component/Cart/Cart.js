import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    console.log(cart)
    // const total = cart.reduce((total, prd) => total+prd.price ,0)
    let total =0
    for (let i = 0; i < cart.length; i++) {
        const prd = cart[i];
        total = total + prd.price
    }
    let shippingCost = 0
    if(total > 50){
        shippingCost = 0
    }
    else if(total>0){
        shippingCost = 12
    }
    else if(total>15){
        shippingCost = 5
    }
    const tax = (total/10).toFixed(2)
    const grandTotal = parseFloat((total + shippingCost + Number(tax)).toFixed(2))

    const convertNum = Num => {
        const precision = Num.toFixed(2)
        const precision2 = Number(precision)
        return precision2
    }
    return (
        <div>
            <h4>Order Summary: </h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price : {convertNum(total)}</p>
            <p><small>Shipping Cost : {shippingCost}</small></p>
            <p><small>TAX + VAT : {tax}</small></p>
            <p>Total Price : {grandTotal} </p>
        </div>
    );
};

export default Cart;
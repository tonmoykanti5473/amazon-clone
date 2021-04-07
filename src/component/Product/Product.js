import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.product)
    const {img, name, seller, price, stock} = props.product
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <br/>
            <p><small>by : {seller} </small></p>
            <p className='price'>${price}</p>
            <br/>
            <p><small>Only {stock} left in the stock</small> </p>
            <button 
            className='button-style'
            onClick={() => props.handleAddproduct(props.product)}
            >
                <FontAwesomeIcon icon={faShoppingCart} />add to cart
            </button>
            </div>
            
        </div>
    );
};

export default Product;
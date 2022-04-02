import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
    // conditional rendering 
    let command;
    if (cart.length === 0) {
        command=<p>Please Ship at least one item</p>

    }
    else if (cart.length === 1) {
        command=<p>Keep Shippig</p>
    }
    else {
        command=<p>Thank you for Shipping</p>
    }
    return (
        <div>
            <h2>Items Selected:{ cart.length}</h2>
            
            {
                cart.map(tShirt => <p>
                    {tShirt.name}&nbsp;
                    <button onClick={()=>handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>YAY you are buying</p>}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
            </div>}
            {command}
            {cart.length !== 4 ? <p>Keep addin2</p> : <button>Remove all</button>}
            {cart.length===4 && <button>Review Order</button>}
        </div>
    );
};

export default Cart;
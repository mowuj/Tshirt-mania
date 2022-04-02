import React from 'react';

const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Items Selected:{ cart.length}</h2>
            {
                cart.map(tShirt => <p>
                    {tShirt.name}&nbsp;
                    <button onClick={()=>handleRemoveFromCart(tShirt)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;
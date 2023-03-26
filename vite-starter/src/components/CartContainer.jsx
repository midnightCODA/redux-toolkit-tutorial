import React from 'react';
// import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from './CartItem';
import { clearCart } from '../features/cart/cartSlice';


const CartContainer = () => {
    const dispatch = useDispatch();

    const { cartItems, total, amount } = useSelector((state) => state.cart)
 

    // DID YOU KNOW YOU CAN RENDER UI COMPONENT CONDITIONALLY
    // LOOK AT THIS

    if(amount < 1) {
        return(
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4  className='empty-cart'>your bag is currently empty, please add some more stuff</h4>
                </header>
            </section>
        )
    }

    else {
        return(
            <section className='cart'>
                {/* the cart header */}
                <header>
                    <h2>your bag</h2>
                </header>
                {/* the cart header ends */}

                {/* cart items start*/}

                <div>
                    {cartItems.map((item) => {
                        return <CartItem key={item.id} {...item} />;
                    })}
                </div>
                {/* cart items ends*/}
                {/* cart footer starts */}
                <footer>
                    <hr/>
                    <div className='cart-total'>
                        <h4>
                            total<sapn>${total}</sapn>
                        </h4>
                     </div>
                     <button className='btn clear-btn' onClick={
                        () => dispatch(clearCart())
                     }>clear cart</button>
                </footer>
                {/* cart footer ends */}

            </section>
        )
    }

}

export default CartContainer
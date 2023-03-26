import React from 'react';
import { CartIcon } from '../icons';
// the use selector is from react redux
import { useSelector } from 'react-redux';

const Navbar = () => {

  // we access store.cart because its what named in the store...
  const { amount } = useSelector((store) => store.cart)
  const { cartItems } = useSelector((store) => store.cart)
  // console.log(cartItems)
  //we can do this or we can do this

  // const amount = useSelector((store) => store.cart.amount)
  // console.log(amount);

  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
import React from 'react';
import './Cart.css'
import { FaXmark } from "react-icons/fa6";

export default function Cart() {
  const toggleSingle = () => {
    document.querySelector('.cart').classList.toggle('active');
  }

  const CartItem = () => {
    return (
      <tr className="cart-item">
        <td><img src="https://i.imgur.com/vZ26Uwy.png"/></td>
        <td><input type="number" value="1" min="0" max="99"></input></td>
        <td>Design Bundle Package</td>
        <td>$79.00</td>
        <td><span class="remove"><FaXmark /></span></td>
      </tr>
    )
  }
  return (
    <div className='cart'>
      <table className="wrapper">
      <thead>
          <tr>
            <th class="first">Photo</th>
            <th class="second">Quantity</th>
            <th class="third">Product</th>
            <th class="fourth">Total</th>
            <th class="fifth">&nbsp;</th>
          </tr>
        </thead>
        <tbody className="cartBody">
           <CartItem />
        </tbody>
        <div className="cartFooter"></div>
      </table>
      <span id="close" onClick={toggleSingle}><FaXmark /></span>
    </div>
  )
}

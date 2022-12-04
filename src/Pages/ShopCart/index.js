import Step from '../../components/Step';
import ShoppingBasket from '../../components/ShoppingBasket';
import { useState } from 'react';

const ShopCart = () => {
  return (
    <main className="site-main">
      <div className="main-container">
        <Step/>
        <ShoppingBasket />
      </div>
    </main>
  )
}
export default  ShopCart;
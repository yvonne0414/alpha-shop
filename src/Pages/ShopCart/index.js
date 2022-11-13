import Step from '../../components/Step';
import ShoppingBasket from '../../components/ShoppingBasket';
import { useState } from 'react';

const initData = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
]

const ShopCart = () => {
  const [sum, setSum] = useState(0);
  const [cartPrdList, setCartPrdList] = useState(initData);
  return (
    <main class="site-main">
      <div class="main-container">
        <Step/>
        <ShoppingBasket cartPrdList={cartPrdList} sum={sum} />
      </div>
    </main>
  )
}
export default  ShopCart;
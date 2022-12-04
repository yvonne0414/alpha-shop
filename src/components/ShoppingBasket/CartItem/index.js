import { useEffect, useState } from 'react';
import {ReactComponent as Minus} from '../../../assets/icons/minus.svg' 
import {ReactComponent as Plus} from '../../../assets/icons/plus.svg' 

const CartItem = (props)=>{
  const {prd, cartPrdList, setCartPrdList} = props;
  const [count, setCount] = useState(prd.quantity)
  useEffect(()=>{
    console.log(cartPrdList);
    const newData = cartPrdList?.map((info)=>{
      if(info.id.toString() === prd.id.toString()){
        info.quantity = count
      }
      return info
    })
    setCartPrdList(newData)
  },[count])
  
  return (
    <div className="product-container col col-12">
      <img className="img-container" src={prd.img} alt="Prd2"  />
      <div className="product-info">
        <div className="product-name">{prd.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <div className="product-action minus" onClick={()=>{count>0 && setCount(count-1)}}>
              <Minus/>
            </div>
            <span className="product-count">{count}</span>
            <div className="product-action plus"  onClick={()=>{setCount(count+1)}}>
              <Plus/>
            </div>
          </div>
        </div>
        <div className="price">$ {prd.price}</div>
      </div>
    </div>
  )
}
export default CartItem;
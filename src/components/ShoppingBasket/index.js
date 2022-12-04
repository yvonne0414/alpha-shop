import { useEffect } from "react"
import CartItem from "./CartItem/index.js"
import { CartContext } from "../../contexts/CartContext"
import { useContext} from "react"

const ShoppingBasket = (props) => {
  const {
    cartPrdList,
    setcartPrdList,
    handleChange
   } = useContext(CartContext)

  let totalPrice = 0
  cartPrdList.forEach(data => {
    totalPrice += data.price * data.quantity
  })

  useEffect(()=>{
    handleChange("totalPrice", totalPrice)
  },[cartPrdList])

  return (        
    <section className="cart-container col col-lg-5 col-sm-12">
          <h3 className="cart-title">購物籃</h3>


          <section className="product-list col col-12" data-total-price="0">
            {totalPrice !== 0 ?
              cartPrdList.map((prd)=>{
                return (
                  <CartItem prd={prd} setCartPrdList={setcartPrdList} cartPrdList={cartPrdList} key={prd.id} />
                )
              }):
              <h3>快去購物吧！</h3>
            }
          </section>

          <section className="cart-info shipping col col-12">
            <div className="text">運費</div>
            <div className="price">免費</div>
          </section>
          <section className="cart-info total col col-12">
            <div className="text">小計</div>
            <div className="price">$ {totalPrice}</div>
          </section>
        </section>)
}
export default  ShoppingBasket;
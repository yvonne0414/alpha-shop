import { useEffect } from "react"
import CartItem from "./CartItem/index.js"

const ShoppingBasket = (props) => {
  const {cartPrdList, setCartPrdList, sum, setSum} = props
  useEffect(()=>{
    let tmpSum = 0
    cartPrdList.map((info)=>{
      tmpSum += info.price*info.quantity
    })
    setSum(tmpSum)
  },[cartPrdList])

  return (        
    <section className="cart-container col col-lg-5 col-sm-12">
          <h3 className="cart-title">購物籃</h3>

          <section className="product-list col col-12" data-total-price="0">
            {
              cartPrdList.map((prd)=>{
                return (
                  <CartItem prd={prd} setCartPrdList={setCartPrdList} cartPrdList={cartPrdList} key={prd.id} />
                )
              })
            }
            {/* <div className="product-container col col-12" data-count="0" data-price="1299">
              <img className="img-container" src={Prd2} alt="Prd2" />
              <div className="product-info">
                <div className="product-name">刷色直筒牛仔褲</div>
                <div className="product-control-container">
                  <div className="product-control">
                    <div className="product-action minus">
                      <Minus/>
                    </div>
                    <span className="product-count"></span>
                    <div className="product-action plus">
                      <Plus/>
                    </div>
                  </div>
                </div>
                <div className="price"></div>
              </div>
            </div> */}
          </section>

          <section className="cart-info shipping col col-12">
            <div className="text">運費</div>
            <div className="price">免費</div>
          </section>
          <section className="cart-info total col col-12">
            <div className="text">小計</div>
            <div className="price">$ {sum}</div>
          </section>
        </section>)
}
export default  ShoppingBasket;
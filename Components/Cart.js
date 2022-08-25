import del from '../public/icon-delete.svg'
import { useContext, useEffect } from 'react'
import CartContext from '../CArtContext'
import cartStyles from '../styles/Layout.module.css'
import Image from 'next/image'



function Cart() {
  const {cartArr , setCartArr} = useContext(CartContext)

  const deleteItem = (index)=>{
    const arr = cartArr
    arr.splice(index,1)
    setCartArr([...arr])
    console.log(cartArr)
  }

  useEffect(()=>{
  },[cartArr])


  return (
    <div >
        <div className={cartStyles.cartTitle}>Cart</div>
        <div className={cartStyles.cartBody}>
          {cartArr.length > 0 ? 
                  cartArr.map((item,index) => (
                    <div className={cartStyles.item} key={index}>
                      <div className={cartStyles.img}>
                        <Image src={item.imgs[0]} alt='p' width="1000px" height="1000px"/>
                      </div>
                      <div className={cartStyles.info}>
                        <span>{item.title}</span>
                        <small>${item.price} X {item.quantity} <span className={cartStyles.sum}>${parseInt(item.price)*item.quantity}</span></small>
                      </div>
                      <div className={cartStyles.del} onClick={()=> deleteItem(index)}>
                        <Image src={del} alt="del"/>
                      </div>
                      <button className={cartStyles.btn} >Checkout</button>
                    </div>
                  )) : 
                  <span className={cartStyles.default}>Your cart is empty.</span>
                  }
        </div>
      </div>
  )
}
export default Cart
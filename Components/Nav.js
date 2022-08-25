import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.svg'
import cart from '../public/icon-cart.svg'
import avatar from '../public/image-avatar.png'
import menu from '../public/icon-menu.svg'
import close from '../public/icon-close.svg'
import navStyles from "../styles/Layout.module.css"
import { useContext, useState } from 'react'
import Cart from './Cart'
import CartContext from '../CArtContext'

function Nav() {

  const [showMenu,setShowMenu] = useState(false)
  const [showCart,setShowCart] = useState(false)

  const menuHandler = ()=> setShowMenu(!showMenu)
  const CartHandler = ()=> setShowCart(!showCart)

  const {cartArr , setCartArr} = useContext(CartContext)
  
  let hiddenMenu = {display:'none'}
  let visibleMenu = {
    display:'flex',
    backgroundColor:'hsla(0, 0%, 0%, 0.75)',
    width:'100vw',
    height:'100vh',
    position:'absolute',
    left:'0px',
    top:'0px'
  }


  const cartNote =  cartArr[0] ? 'block' : 'none'

  return (
    <nav>
    <div className={navStyles.nav}>
        <div className={navStyles.menu} onClick={menuHandler}>
        <Image src={menu} alt="menu" loading="eager"/>
        </div>
        <div className={navStyles.logo}>
        <Image src={logo} alt="logo" loading="eager"/>
        </div>
        
        <ul className={navStyles.links}>
            <li>
            <Link href='/'>Collections</Link>
            </li>
            <li>
            <Link href='/'>Men</Link>
            </li>
            <li>
            <Link href='/'>Women</Link>
            </li>
            <li>
            <Link href='/'>About</Link>
            </li>
            <li>
            <Link href='/'>Contact</Link>
            </li>
        </ul>

        <div className={navStyles.cart} onClick={CartHandler}>
        <div style={{display:cartNote}}>{cartArr[0] ? cartArr[0].quantity : 0}</div>
        <Image src={cart} alt="cart" height="20px" width="20px" loading="eager"/>
        </div>
        <div className={navStyles.avatar}>
        <Image src={avatar} alt="avatar"  height="30px" width="30px" loading="eager"/>
        </div>
        {/* mobile menu */}
        <div style={showMenu ? visibleMenu : hiddenMenu}>
            <div className={navStyles.menuCard}>
              <div >
                <Image src={close} alt="close" onClick={menuHandler} loading="eager"/>
              </div>
              <ul className={navStyles.menuLinks}>
                  <li>
                  <Link href='/'>Collections</Link>
                  </li>
                  <li>
                  <Link href='/'>Men</Link>
                  </li>
                  <li>
                  <Link href='/'>Women</Link>
                  </li>
                  <li>
                  <Link href='/'>About</Link>
                  </li>
                  <li>
                  <Link href='/'>Contact</Link>
                  </li>
              </ul>
            </div>
            <div style={{flexGrow:'2'}} onClick={menuHandler}></div>
        </div>
        {/* cart card */}
        <div className={showCart ? navStyles.cartCard : navStyles.hidecartCard}>
          <Cart />
        </div>
    </div>
    </nav>
  )
}
export default Nav
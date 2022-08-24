import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo.svg'
import cart from '../public/images/icon-cart.svg'
import avatar from '../public/images/image-avatar.png'
import menu from '../public/images/icon-menu.svg'
import close from '../public/images/icon-close.svg'
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


  const hiddenCart = {display:'none'}
  const visibleCart ={}

  return (
    <div className={navStyles.nav}>
        <div className={navStyles.menu} onClick={menuHandler}>
        <Image src={menu} alt="menu" />
        </div>
        <div className={navStyles.logo}>
        <Image src={logo} alt="logo"/>
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
        <Image src={cart} alt="cart" height="20px" width="20px"/>
        </div>
        <div className={navStyles.avatar}>
        <Image src={avatar} alt="avatar"  height="30px" width="30px"/>
        </div>
        {/* mobile menu */}
        <div style={showMenu ? visibleMenu : hiddenMenu}>
            <div className={navStyles.menuCard}>
              <div >
                <Image src={close} alt="close" onClick={menuHandler}/>
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
  )
}
export default Nav
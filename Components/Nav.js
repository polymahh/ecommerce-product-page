import Link from 'next/Link'
import Image from 'next/image'
import logo from '../public/images/logo.svg'
import cart from '../public/images/icon-cart.svg'
import avatar from '../public/images/image-avatar.png'
import menu from '../public/images/icon-menu.svg'
import close from '../public/images/icon-close.svg'
import navStyles from "../styles/Layout.module.css"

function Nav({menu}) {

  // let menuStyle = {menu ? 'display:none' : 'display:block'}
  return (
    <div className={navStyles.nav}>
        <div className={navStyles.menu}>
        <Image src={menu} alt="menu" height="20px" width="20px"/>
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

        <div className={navStyles.cart}>
        <Image src={cart} alt="cart" height="20px" width="20px"/>
        </div>
        <div className={navStyles.avatar}>
        <Image src={avatar} alt="avatar"  height="30px" width="30px"/>
        </div>
        
        <div >
            <div className={navStyles.menuCard}>
              <div >
                <Image src={close} alt="close"/>
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
        </div>

    </div>
  )
}
export default Nav
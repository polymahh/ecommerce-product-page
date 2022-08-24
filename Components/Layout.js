import { useState } from 'react'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import CartContext from '../CArtContext'


function Layout({children}) {

  const [cartArr,setCartArr] = useState([])

  return (
    <CartContext.Provider value={{cartArr , setCartArr}}>

    <div className={styles.containner}>
        <Nav/>
        <main className={styles.main}>
            {children}
        </main>
    </div>
    </CartContext.Provider>
  )
}
export default Layout
import styles from '../styles/Layout.module.css'
import Nav from './Nav'

function Layout({children}) {
  return (
    <div className={styles.containner}>
        <Nav/>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}
export default Layout
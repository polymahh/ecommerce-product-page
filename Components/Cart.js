import cartStyles from '../styles/Layout.module.css'

function Cart() {
  return (
    <div >
        <div className={cartStyles.cartTitle}>Cart</div>
        <div className={cartStyles.cartBody}>
            <span>Your cart is empty.</span>
        </div>
        </div>
  )
}
export default Cart
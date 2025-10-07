import { XMarkIcon } from '@heroicons/react/16/solid'
import './styles.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'
import OrderCard from '../OrderCard'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  if (!context.isCheckoutSideMenuOpen) return null

  const handleDeleteProduct = (title) => {
    const filtered = context.cartProducts.filter((item) => item.title !== title)
    context.setCartProducts(filtered)
  }
  return (
    <aside
      className={`${
        context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'
      } checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="text-lg font-bold">My Order</h2>
        <div
          className={`cursor-pointer`}
          onClick={() => context.closeCheckoutSideMenu()}
        >
          <XMarkIcon className="h-6 w-6 text-black/50 hover:text-black cursor-pointer" />
        </div>
      </div>
      <div className="overflow-y-scroll">
        {context.cartProducts.map((item) => {
          return (
            <OrderCard
              key={item.title}
              title={item.title}
              price={item.price}
              images={item.images}
              handleDeleteProduct={handleDeleteProduct}
            />
          )
        })}
      </div>
    </aside>
  )
}

export default CheckoutSideMenu

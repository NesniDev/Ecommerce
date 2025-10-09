import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  if (!context.isCheckoutSideMenuOpen) return null

  const handleDeleteProduct = (title) => {
    const filtered = context.cartProducts.filter((item) => item.title !== title)
    context.setCartProducts(filtered)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      total: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    console.log(context.order)
    context.setCartProducts([])
    context.closeCheckoutSideMenu()
    context.closeProductDetail()
    context.setSearchByTitle(null)
    context.setSearchByCategory(null)
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
      <div className="overflow-y-scroll flex-1">
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
      <div className="p-6 ">
        <p className="text-lg font-bold flex justify-between items-center">
          {totalPrice(context.cartProducts) === 0 ? (
            <>
              <span className="text-black font-light italic m-auto">
                Add products to your cart
              </span>
            </>
          ) : (
            <>
              <span className="text-black font-light">Total: </span>
              <span className="text-black font-semibold">
                $ {totalPrice(context.cartProducts)}
              </span>
            </>
          )}
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black hover:bg-black/70 text-white py-2 px-4 rounded-lg block m-auto mt-3 cursor-pointer "
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  )
}

export default CheckoutSideMenu

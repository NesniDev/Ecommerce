import { useContext } from 'react'
import Layout from '../../Components/Layout'
import '../../index.css'
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'
import OrderCard from '../../Components/OrderCard'
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'

function MyOrder() {
  const context = useContext(ShoppingCartContext)
  if (context.order.length === 0) return null
  return (
    <>
      <Layout>
        <div className="flex w-80 items-center justify-center gap-3 relative mb-8">
          <Link to="/my-orders" className="absolute left-0">
            <ChevronLeftIcon className="w-6 h-6 cursor-pointer" />
          </Link>
          <h2>My Order</h2>
        </div>
        <div className="flex flex-col gap-2">
          {context.order.slice(-1)[0].products.map((item) => {
            return (
              <OrderCard
                key={item.title}
                title={item.title}
                price={item.price}
                images={item.images}
              />
            )
          })}
        </div>
      </Layout>
    </>
  )
}

export default MyOrder

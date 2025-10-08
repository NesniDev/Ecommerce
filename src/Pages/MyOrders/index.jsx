import Layout from '../../Components/Layout'
import OrdersCard from '../../Components/OrdersCard'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import '../../index.css'

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <>
      <Layout>
        <h1 className="text-2xl font-semibold">My orders</h1>
        {context.order.map((item, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={item.total}
                totalProducts={item.totalProducts}
              />
            </Link>
          )
        })}
      </Layout>
    </>
  )
}

export default MyOrders

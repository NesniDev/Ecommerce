import Layout from '../../Components/Layout'
import OrdersCards from '../../Components/OrdersCard'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'
import { Link } from 'react-router-dom'
import '../../index.css'

function MyOrders() {
  const context = useContext(ShoppingCartContext)
  return (
    <>
      <Layout>
        My orders
        {context.order.map((item, index) => {
          return (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCards
                totalPrice={item.totalPrice}
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

import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import MyOrder from '../MyOrder'
import NotFound from '../NotFound'
import SingIn from '../SingIn'
import NavBar from '../../Components/NavBar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import '../../index.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order/:id', element: <MyOrder /> },
    { path: '/my-orders-last', element: <MyOrder /> },
    { path: '/sing-in', element: <SingIn /> },
    { path: '*', element: <NotFound /> }
  ])
  return routes
}

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

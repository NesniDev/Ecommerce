import { useState } from 'react'
import { ShoppingCartContext } from './ShoppingCartContext'

export const ShoppingCartProvider = ({ children }) => {
  const [countCart, setCountCart] = useState(0)
  const [isproductDetailOpen, setIsproductDetailOpen] = useState(false)
  const [showDetailInfo, setShowDetailInfo] = useState({})
  const [cartProducts, setCartProducts] = useState([])

  const openProductDetail = () => setIsproductDetailOpen(true)
  const closeProductDetail = () => setIsproductDetailOpen(false)

  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  return (
    <ShoppingCartContext.Provider
      value={{
        countCart,
        setCountCart,
        isproductDetailOpen,
        openProductDetail,
        closeProductDetail,
        showDetailInfo,
        setShowDetailInfo,
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        setIsCheckoutSideMenuOpen
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

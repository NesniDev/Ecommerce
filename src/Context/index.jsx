import { useState, useEffect } from 'react'
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

  //shoping cart - orders
  const [order, setOrder] = useState([])

  //get products
  const [items, setItems] = useState([])
  //get product by title
  const [searchByTitle, setSearchByTitle] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => {
        setItems(data)
      })
      .catch((error) => console.error('Error fetching products:', error))
  }, [])

  useEffect(() => {
    let filtered = items

    if (searchByTitle && searchByCategory) {
      filtered = filtered
        ?.filter((item) =>
          item.category.name
            .toLowerCase()
            .includes(searchByCategory.toLowerCase())
        )
        .filter((item) =>
          item.title.toLowerCase().includes(searchByTitle.toLowerCase())
        )
    } else if (searchByTitle) {
      filtered = filtered?.filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      )
    } else if (searchByCategory) {
      filtered = filtered?.filter((item) =>
        item.category.name
          .toLowerCase()
          .includes(searchByCategory.toLowerCase())
      )
    }

    setFilteredItems(filtered)
  }, [items, searchByTitle, searchByCategory])

  console.log(filteredItems)

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
        setIsCheckoutSideMenuOpen,
        order,
        setOrder,
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        searchByCategory,
        setSearchByCategory
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}

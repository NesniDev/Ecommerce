import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'
import { CheckIcon, PlusIcon } from '@heroicons/react/16/solid'

const Card = ({ title, category, price, images, description }) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = () => {
    context.openProductDetail()
    context.setShowDetailInfo({
      title,
      category,
      price,
      images,
      description
    })
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCountCart(context.countCart + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const renderIcon = () => {
    const isInCart =
      context.cartProducts.filter((product) => product.title === title).length >
      0

    if (isInCart) {
      return (
        <p className="absolute  text-xl font-bold mt-1 mr-1 top-0 right-0 size-6 p-1 bg-black rounded-full flex justify-center items-center">
          <CheckIcon className="h-6 w-6 text-white/50 hover:text-white" />
        </p>
      )
    } else {
      return (
        <p
          className="absolute  text-xl font-bold mt-1 mr-1 top-0 right-0 size-6 p-1 bg-white rounded-full flex justify-center items-center"
          onClick={(event) =>
            addProductsToCart(event, {
              title,
              category,
              price,
              images,
              description
            })
          }
        >
          <PlusIcon className="h-6 w-6 text-black/50 hover:text-black" />
        </p>
      )
    }
  }

  return (
    <article
      className="cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct()}
    >
      <figure className="relative mb-4 w-full h-4/5">
        <span className="absolute bottom-0 ml-1 mb-1 px-3 left-0 text-white rounded-lg text-xs p-1 bg-white/60">
          {category?.name}
        </span>
        <img
          src={images[0]}
          alt={title}
          className="size-full object-cover rounded-lg"
        />
        {renderIcon()}
      </figure>
      <p className="flex justify-between items-center mx-3">
        <span className="text-xs font-light">{title}</span>
        <span className="text-lg font-bold">${price}</span>
      </p>
    </article>
  )
}

export default Card

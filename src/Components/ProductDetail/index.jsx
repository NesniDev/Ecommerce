import { XMarkIcon } from '@heroicons/react/16/solid'
import './index.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)
  if (!context.isproductDetailOpen) return null
  return (
    <aside
      className={`${
        context.isproductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="text-lg font-bold">Product Detail</h2>
        <div
          className={`cursor-pointer`}
          onClick={() => context.closeProductDetail()}
        >
          <XMarkIcon className="h-6 w-6 text-black/50 hover:text-black" />
        </div>
      </div>
      <figure>
        <img
          className="w-full h-full object-cover rounded-2xl px-2"
          src={context.showDetailInfo.images[0]}
          alt={context.showDetailInfo.title}
        />
      </figure>
      <p className="flex flex-col justify-between items-center p-6 text-center gap-3">
        <span className="font-medium text-2xl">
          {context.showDetailInfo.title}
        </span>
        <span className="font-medium text-xl ">
          ${context.showDetailInfo.price}
        </span>
        <span className="font-light text-sm">
          {context.showDetailInfo.description}
        </span>
      </p>
    </aside>
  )
}

export default ProductDetail

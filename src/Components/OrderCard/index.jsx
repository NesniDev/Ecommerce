import { XMarkIcon } from '@heroicons/react/16/solid'
const OrderCard = ({ title, price, images, handleDeleteProduct }) => {
  return (
    <article className="flex justify-between items-center px-3 mb-2">
      <div className="flex items-center gap-3">
        <figure className="w-20 h-20">
          <img
            src={images}
            alt={title}
            className="size-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-lg font-medium">${price}</p>
        <XMarkIcon
          className="h-6 w-6 text-black/50 hover:text-black"
          onClick={() => handleDeleteProduct(title)}
        />
      </div>
    </article>
  )
}

export default OrderCard

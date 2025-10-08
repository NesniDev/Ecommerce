import { XMarkIcon } from '@heroicons/react/16/solid'
const OrderCard = ({ title, price, images, handleDeleteProduct }) => {
  let renderIcon
  if (handleDeleteProduct) {
    renderIcon = (
      <XMarkIcon
        className="h-6 w-6 text-black/50 hover:text-black"
        onClick={() => handleDeleteProduct(title)}
      />
    )
  }

  return (
    <article className="flex justify-between items-center px-3 mb-2">
      <div className="flex items-center gap-3">
        <figure className="w-20 h-20">
          <img
            src={images}
            alt={title}
            className="max-w-[200px] h-full rounded-lg object-cover"
          />
        </figure>
        <p className="text-sm font-light mr-3">{title}</p>
      </div>
      <div className="flex items-center gap-3">
        <p className="text-lg font-medium">${price}</p>
        {renderIcon}
      </div>
    </article>
  )
}

export default OrderCard

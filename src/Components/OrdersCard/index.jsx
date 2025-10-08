import { XMarkIcon } from '@heroicons/react/16/solid'

const OrderCard = ({ totalPrice, totalProducts }) => {
  return (
    <article className="flex justify-between items-center px-3 mb-2">
      <div className="flex items-center gap-3">
        <span>{new Date().toDateString()}</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </div>
    </article>
  )
}

export default OrderCard

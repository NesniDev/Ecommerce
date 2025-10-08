import { ChevronRightIcon } from '@heroicons/react/16/solid'

const OrdersCard = ({ totalPrice, totalProducts }) => {
  return (
    <article className="flex justify-between items-center px-3 mb-2 gap-3 p-4 my-2 border border-black rounded-lg">
      <div className="flex justify-between items-center w-60">
        <p className="flex flex-col">
          <span className="text-xs font-light">
            {new Date().toISOString().split('T')[0]}
          </span>
          <span className="text-xs font-semibold">{totalProducts} article</span>
        </p>
        <p className="flex items-center gap-2">
          <span className="text-xl font-semibold">$ {totalPrice}</span>
          <ChevronRightIcon className="w-6 h-6 cursor-pointer" />
        </p>
      </div>
    </article>
  )
}

export default OrdersCard

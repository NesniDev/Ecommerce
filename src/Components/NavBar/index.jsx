import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'
import { ShoppingBagIcon } from '@heroicons/react/16/solid'
import './index.css'

const NavBar = () => {
  let activeStyle = 'underline underline-offset-4'

  const context = useContext(ShoppingCartContext)
  return (
    <>
      <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
        <ul className="flex items-center gap-3">
          <li className="font-bold text-lg">
            <NavLink to={'/'}>Shopi</NavLink>
          </li>
          <li>
            <NavLink
              to={'/'}
              onClick={() => context.setSearchByCategory(null)}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              All
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/clothes'}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => context.setSearchByCategory('clothes')}
            >
              Clothes
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/electronics'}
              onClick={() => context.setSearchByCategory('electronics')}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/furnitures'}
              onClick={() => context.setSearchByCategory('furnitures')}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Furnitures
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/toys'}
              onClick={() => context.setSearchByCategory('toys')}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Toys
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/others'}
              onClick={() => context.setSearchByCategory('others')}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Others
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="">
            <NavLink to={'mailto:neidernieto@gmail.com'}>
              neidernieto@gmail.com
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/my-orders'}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/my-account'}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My account
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/electronics'}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              SingIn
            </NavLink>
          </li>
          <li className={` flex items-center cursor-pointer`}>
            <ShoppingBagIcon className="h-6 w-6 text-black/50 hover:text-black" />
            <div>{context.cartProducts.length}</div>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar

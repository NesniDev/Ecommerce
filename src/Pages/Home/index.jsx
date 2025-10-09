import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import '../../index.css'
import ProductDetail from '../../Components/ProductDetail'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/ShoppingCartContext'

function Home() {
  const context = useContext(ShoppingCartContext)

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => {
        return <Card key={item.id} {...item} />
      })
    } else {
      return (
        <div>
          <h2>No products found</h2>
        </div>
      )
    }
  }

  return (
    <Layout>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-medium">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="border border-gray-950 rounded-lg px-3 py-2 mt-4 focus:outline-none"
        onChange={(e) => context.setSearchByTitle(e.target.value)}
      />
      <section className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {renderView()}
        <ProductDetail />
      </section>
    </Layout>
  )
}

export default Home

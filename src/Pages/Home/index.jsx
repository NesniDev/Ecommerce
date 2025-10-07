import { useState, useEffect } from 'react'
import Card from '../../Components/Card'
import Layout from '../../Components/Layout'
import '../../index.css'
import ProductDetail from '../../Components/ProductDetail'

function Home() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => setItems(data))
  }, [])
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">Home</h1>
      <section className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => {
          return <Card key={item.title} {...item} />
        })}
        <ProductDetail />
      </section>
    </Layout>
  )
}

export default Home

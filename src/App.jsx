import React, { useEffect, useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar.jsx'
import Products from './Components/Products/Products.jsx'
import ProductDetails from './Components/ProductDetails/ProductDetails.jsx'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts)
      .catch(err => console.error(err))
  }, [])

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  )


  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar setSearchTerm={setSearchTerm} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Products products={filteredProducts} />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

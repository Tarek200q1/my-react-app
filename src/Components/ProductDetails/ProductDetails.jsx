import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(setProduct)
      .catch(() => setError("Error is loading"))
  }, [id])

  if (error) return <div className="p-6 text-red-500">{error}</div>
  if (!product) return <div className="p-6">Loading product details..</div>

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">  Back to Products</Link>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.title} className="w-full h-64 object-contain" />
        <div>
          <h2 className="text-xl font-bold mb-2">{product.title}</h2>
          <p className="text-sm text-gray-500 mb-2">Category: {product.category}</p>
          <p className="mb-4">{product.description}</p>
          <p className="text-lg font-semibold text-green-600 mb-2"> ${product.price}</p>
          <p> Reate: {product.rating?.rate} / 5</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '@/components/ProductCard'

type Product = {
  id: number | string
  name: string
  description: string
  price: number
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get<Product[]>(`${process.env.NEXT_PUBLIC_API_BASE}/products`)
        setProducts(res.data)
      } catch (err) {
        console.error('Gagal fetch produk:', err)
      }
    }

    fetchProducts()
  }, [])

  return (
    <main className="p-6 sm:p-10">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Daftar Produk</h1>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-400">Memuat data produk...</p>
      )}
    </main>
  )
}

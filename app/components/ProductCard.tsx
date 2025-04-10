'use client'

type Product = {
  id: number | string
  name: string
  description: string
  price: number
}

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(value)
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div
      className="border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-500 hover:ring-1 hover:ring-blue-400 dark:hover:border-blue-300 dark:hover:ring-blue-300 bg-white dark:bg-gray-900"
    >
      <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{product.description}</p>
      <p className="text-base font-bold text-blue-600 dark:text-blue-400">
        {formatRupiah(product.price)}
      </p>
    </div>
  )
}

import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Premium Silk Dhoti',
    price: 2999,
    category: 'dhoti',
    image: '/products/dhoti-1.jpg',
  },
  {
    id: 2,
    name: 'Traditional Kurta Set',
    price: 3499,
    category: 'kurta',
    image: '/products/kurta-1.jpg',
  },
  // Add more products as needed
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="group">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                {/* Add actual product images later */}
                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">₹{product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

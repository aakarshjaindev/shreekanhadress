import Link from 'next/link'

const categories = [
  {
    id: 'dhoti',
    name: 'Dhoti',
    description: 'Traditional dhotis crafted with premium fabrics',
    image: '/categories/dhoti.jpg',
  },
  {
    id: 'kurta',
    name: 'Kurta',
    description: 'Elegant kurtas for all occasions',
    image: '/categories/kurta.jpg',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    description: 'Complete your look with traditional accessories',
    image: '/categories/accessories.jpg',
  },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.id}`}>
            <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gray-100 relative">
                {/* Add actual category images later */}
                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

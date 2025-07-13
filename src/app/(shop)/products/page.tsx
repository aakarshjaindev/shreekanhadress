"use client"

import Link from 'next/link'

const products = [

import Link from 'next/link'
import NextImage from 'next/image'
    price: 500,
    category: 'dress',
    image: '/demopic1.jpg',
  },
  {
    id: 2,
    name: 'Royal Blue Shine',
    price: 500,
    category: 'dress',
    image: '/demopic2 (1) (1).jpg',
  },
  {
    id: 3,
    name: 'Pink Sparkle Delight',
    price: 500,
    category: 'dress',
    image: '/demopic1 (1) (2).jpg',
  },
  {
    id: 4,
    name: 'Classic Dhoti',
    price: 400,
    category: 'dhoti',
    image: '/demo3 (1).jpg',
  },
  {
    id: 5,
    name: 'Elegant Kurta',
    price: 450,
    category: 'kurta',
    image: '/demopic1 (1) (1).jpg',
  },
  {
    id: 6,
    name: 'Accessories Set',
    price: 350,
    category: 'accessories',
    image: '/photo-collage.png.png',
  },
  {
    id: 7,
    name: 'Designer Dhoti',
    price: 550,
    category: 'dhoti',
    image: '/demopic1 (1) (1) (1).jpg',
  },
  {
    id: 8,
    name: 'Premium Kurta',
    price: 600,
    category: 'kurta',
    image: '/demopic2 (1) (1) (1).jpg',
  },
  {
    id: 9,
    name: 'Special Edition',
    price: 700,
    category: 'special',
    image: '/demo3 (2).jpg',
  },

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8 text-blue-700">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, idx) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="group bg-white rounded-lg shadow-md p-4 flex flex-col items-center opacity-0 translate-y-8 animate-fade-in" style={{animationDelay: `${idx * 80}ms`, animationFillMode: 'forwards'}}>
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden w-full flex items-center justify-center">
                <NextImage src={product.image} alt={product.name} width={220} height={220} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
              <p className="text-blue-700 font-bold">{product.price > 0 ? `₹${product.price.toLocaleString()}` : '—'}</p>
            </div>
          </Link>
        ))}
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          to {
            opacity: 1;
            transform: none;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
      <div className="mt-16 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">Payment Details</h2>
        <div className="w-full max-w-md bg-white rounded-lg shadow p-4 flex flex-col items-center">
          <NextImage src="/payment.jpg" alt="Payment Details" width={400} height={250} className="rounded-md object-contain" />
        </div>
      </div>
    </div>
  )
}

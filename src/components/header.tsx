import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image src="/logo.png" alt="Logo" width={36} height={36} className="rounded-full" />
            <span className="text-2xl font-bold text-blue-700 group-hover:text-blue-800 transition-colors">Krishna Poshak</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/products" className="font-semibold text-gray-900 hover:text-blue-700 transition-colors">Products</Link>
            <Link href="/categories" className="font-semibold text-gray-900 hover:text-blue-700 transition-colors">Categories</Link>
            <Link href="/about" className="font-semibold text-gray-900 hover:text-blue-700 transition-colors">About</Link>
            <Link href="/cart" className="font-semibold text-gray-900 hover:text-blue-700 transition-colors">Cart</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-orange-600">Krishna Poshak</Link>
          <div className="flex items-center space-x-6">
            <Link href="/products" className="hover:text-orange-600 transition-colors">Products</Link>
            <Link href="/categories" className="hover:text-orange-600 transition-colors">Categories</Link>
            <Link href="/about" className="hover:text-orange-600 transition-colors">About</Link>
            <Link href="/cart" className="hover:text-orange-600 transition-colors">Cart</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

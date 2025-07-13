import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Image src="/logo.png" alt="Logo" width={36} height={36} className="rounded-full shadow" />
            <span className="text-2xl font-bold text-pink-600 group-hover:text-pink-700 transition-colors drop-shadow-sm" style={{textShadow: '0 1px 6px rgba(0,0,0,0.10)'}}>Krishna Poshak</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/products" className="font-semibold text-gray-900 hover:text-pink-600 transition-colors drop-shadow-sm" style={{textShadow: '0 1px 6px rgba(0,0,0,0.10)'}}>Products</Link>
            <Link href="/categories" className="font-semibold text-gray-900 hover:text-pink-600 transition-colors drop-shadow-sm" style={{textShadow: '0 1px 6px rgba(0,0,0,0.10)'}}>Categories</Link>
            <Link href="/about" className="font-semibold text-gray-900 hover:text-pink-600 transition-colors drop-shadow-sm" style={{textShadow: '0 1px 6px rgba(0,0,0,0.10)'}}>About</Link>
            <Link href="/cart" className="font-semibold text-gray-900 hover:text-pink-600 transition-colors drop-shadow-sm" style={{textShadow: '0 1px 6px rgba(0,0,0,0.10)'}}>Cart</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

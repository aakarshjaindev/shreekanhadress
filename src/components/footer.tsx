export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Krishna Poshak</h3>
            <p className="text-gray-400">Premium traditional clothing crafted with devotion and care.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/products" className="hover:text-orange-500">All Products</a></li>
              <li><a href="/categories" className="hover:text-orange-500">Categories</a></li>
              <li><a href="/about" className="hover:text-orange-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/shipping" className="hover:text-orange-500">Shipping Info</a></li>
              <li><a href="/returns" className="hover:text-orange-500">Returns</a></li>
              <li><a href="/faq" className="hover:text-orange-500">FAQ</a></li>
              <li><a href="/size-guide" className="hover:text-orange-500">Size Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange-500">Instagram</a></li>
              <li><a href="#" className="hover:text-orange-500">Facebook</a></li>
              <li><a href="#" className="hover:text-orange-500">Twitter</a></li>
              <li><a href="#" className="hover:text-orange-500">WhatsApp</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-900">
          <p>&copy; {new Date().getFullYear()} Krishna Poshak. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

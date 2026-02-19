import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              EStore
            </h2>
            <p className="text-gray-400 mb-6">
              Premium quality products at the best prices. 
              Shop with confidence and fast delivery.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white transition" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white transition" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-white transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer transition">Home</li>
              <li className="hover:text-white cursor-pointer transition">Shop</li>
              <li className="hover:text-white cursor-pointer transition">About Us</li>
              <li className="hover:text-white cursor-pointer transition">Contact</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Customer Support
            </h3>
            <ul className="space-y-3">
              <li className="hover:text-white cursor-pointer transition">FAQ</li>
              <li className="hover:text-white cursor-pointer transition">Shipping Policy</li>
              <li className="hover:text-white cursor-pointer transition">Return Policy</li>
              <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 mb-4">
              Get 10% off your first order and stay updated.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="rounded-xl">
                Subscribe
              </Button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} EStore. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

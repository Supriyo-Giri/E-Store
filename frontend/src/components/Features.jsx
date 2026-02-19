import { Card, CardContent } from "@/components/ui/card"
import { Truck, ShieldCheck, RefreshCcw, CreditCard } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Shop With Us?
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We provide premium quality products with exceptional service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Feature 1 */}
          <Card className="hover:shadow-xl transition duration-300 border-0">
            <CardContent className="p-6 text-center">
              <Truck className="mx-auto h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your products delivered quickly and safely to your doorstep.
              </p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="hover:shadow-xl transition duration-300 border-0">
            <CardContent className="p-6 text-center">
              <ShieldCheck className="mx-auto h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">
                100% secure transactions with trusted payment gateways.
              </p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="hover:shadow-xl transition duration-300 border-0">
            <CardContent className="p-6 text-center">
              <RefreshCcw className="mx-auto h-10 w-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">
                Hassle-free returns within 7 days of purchase.
              </p>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="hover:shadow-xl transition duration-300 border-0">
            <CardContent className="p-6 text-center">
              <CreditCard className="mx-auto h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Payment</h3>
              <p className="text-gray-600">
                Pay using UPI, Cards, Net Banking, or Cash on Delivery.
              </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}

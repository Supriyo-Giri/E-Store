import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    originalPrice: 2999,
    rating: 4.5,
    image: "https://imgs.search.brave.com/FBjHdKCv2pqbm26BJCuqlkqT89vLxkaDfEdhKM6Fz8Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDcv/MTEyLzU3OS9zbWFs/bC9mdWxsLXNpemUt/cHJlbWl1bS13aXJl/bGVzcy1oZWFkcGhv/bmVzLWlzb2xhdGVk/LW9uLWEtd2hpdGUt/YmFja2dyb3VuZC1w/aG90by5qcGc"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2499,
    originalPrice: 3499,
    rating: 4.7,
    image: "https://imgs.search.brave.com/sr0iVoooKg7InFr9eS0rr29e17oWHdcRDKaR1GOjZ4M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3Ivc21hcnR3/YXRjaC1jb2xsZWN0/aW9uLXJlYWxpc3Rp/Yy13cmlzdC13YXRj/aGVzLTI2MG53LTI0/MTU4NzQ4NDEuanBn"
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1499,
    originalPrice: 2199,
    rating: 4.3,
    image: "https://imgs.search.brave.com/Unt1MjSSMyoT607YFADx34mUAIG1P1D0t557QMxlBdw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ibGF1/cHVua3RhdWRpby5p/bi9jZG4vc2hvcC9m/aWxlcy9idDAzLXJn/Yi13aXJlbGVzcy1i/bHVldG9vdGgtc3Bl/YWtlci1ibGF1cHVu/a3QtaW5kaWEtMS1y/ZW1vdmViZy1wcmV2/aWV3LnBuZz92PTE3/NTk0ODQ4Mzg"
  },
  {
    id: 4,
    name: "Gaming Mouse",
    price: 999,
    originalPrice: 299,
    rating: 4.6,
    image: "https://imgs.search.brave.com/7Fg6LN-hJ6dntdwAd4eERqh5vvw7ySsDdOrSL4cTgNM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly96ZWJy/b25pY3MuY29tL2Nk/bi9zaG9wL3Byb2R1/Y3RzL1plYi0tVHJh/bnNmb3JtZXIxLXBp/YzguanBnP3Y9MTY3/MzM1MDc0OSZ3aWR0/aD0xMjAw"
  }
]

export default function BestSellingSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Best Selling Products
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Our most loved products by customers.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <Card
              key={product.id}
              className="group border-0 shadow-sm hover:shadow-xl transition duration-300 rounded-2xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                <Badge className="absolute top-3 left-3 bg-red-500 text-white">
                  Best Seller
                </Badge>
              </div>

              <CardContent className="p-5">
                <h3 className="text-lg font-semibold mb-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-gray-900">
                    ₹{product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-5 pt-0">
                <Button className="w-full rounded-xl">
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}

        </div>
      </div>
    </section>
  )
}

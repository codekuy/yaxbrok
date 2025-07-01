"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  ChevronLeft,
  Star,
  Shield,
  Headphones,
  Clock,
  Award,
  ArrowRight,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  Gamepad2,
  Gift,
} from "lucide-react"
import { useState, useEffect } from "react"

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showCategoryModal, setShowCategoryModal] = useState(false)
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [showProductPage, setShowProductPage] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedGame, setSelectedGame] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [userId, setUserId] = useState("")
  const [zoneId, setZoneId] = useState("")
  const [selectedDiamond, setSelectedDiamond] = useState(null)
  const [selectedPayment, setSelectedPayment] = useState(null)

  const slides = [
    {
      id: 1,
      image: "/placeholder.svg?height=400&width=1200",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=400&width=1200",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=400&width=1200",
    },
  ]

  const categories = [
    { name: "Pulsa", icon: "📱", color: "bg-blue-100", iconColor: "text-blue-600", type: "modal" },
    { name: "Pulsa Transfer", icon: "💸", color: "bg-blue-100", iconColor: "text-blue-600", type: "modal" },
    { name: "Paket Data", icon: "📊", color: "bg-blue-100", iconColor: "text-blue-600", type: "modal" },
    { name: "Token PLN", icon: "⚡", color: "bg-blue-100", iconColor: "text-blue-600", type: "modal" },
    { name: "PLN Pascabayar", icon: "⚡", color: "bg-blue-100", iconColor: "text-blue-600", type: "modal" },
    { name: "Lainnya", icon: "🔴", color: "bg-red-100", iconColor: "text-red-600", type: "modal" },
  ]

  const gameCategories = [
    { name: "Top Up Game", icon: Gamepad2, color: "from-green-500 to-emerald-600", bgColor: "bg-green-50" },
    { name: "Voucher Game", icon: Gift, color: "from-purple-500 to-pink-500", bgColor: "bg-purple-50" },
  ]

  const games = [
    {
      id: 1,
      name: "Mobile Legends",
      subtitle: "Bang Bang",
      description: "Top up diamond dengan harga terjangkau dan proses instan",
      image: "/placeholder.svg?height=80&width=80",
      gradient: "from-purple-500 to-blue-600",
      badges: ["Legal & Aman", "Proses Instan", "Rating 4.9/5"],
    },
    {
      id: 2,
      name: "Free Fire",
      subtitle: "Battlegrounds",
      description: "Top up diamond dengan harga terjangkau dan proses instan",
      image: "/placeholder.svg?height=80&width=80",
      gradient: "from-orange-500 to-red-600",
      badges: ["Legal & Aman", "Proses Instan", "Rating 4.8/5"],
    },
    {
      id: 3,
      name: "PUBG Mobile",
      subtitle: "UC Top Up",
      description: "Top up UC dengan harga terjangkau dan proses instan",
      image: "/placeholder.svg?height=80&width=80",
      gradient: "from-blue-500 to-indigo-600",
      badges: ["Legal & Aman", "Proses Instan", "Rating 4.7/5"],
    },
    {
      id: 4,
      name: "Genshin Impact",
      subtitle: "Genesis Crystal",
      description: "Top up Genesis Crystal dengan harga terjangkau",
      image: "/placeholder.svg?height=80&width=80",
      gradient: "from-cyan-500 to-blue-600",
      badges: ["Legal & Aman", "Proses Instan", "Rating 4.9/5"],
    },
    {
      id: 5,
      name: "Valorant",
      subtitle: "VP Points",
      description: "Top up Valorant Points dengan harga terjangkau",
      image: "/placeholder.svg?height=80&width=80",
      gradient: "from-red-500 to-pink-600",
      badges: ["Legal & Aman", "Proses Instan", "Rating 4.8/5"],
    },
    {
      id: 6,
      name: "Call of Duty",
      subtitle: "Mobile",
      description: "Top up CP dengan harga terjangkau dan proses instan",
      image: "/placeholder.svg?height=80&width=80",
      gradient: "from-gray-700 to-gray-900",
      badges: ["Legal & Aman", "Proses Instan", "Rating 4.6/5"],
    },
  ]

  const diamondPackages = [
    { amount: "5 Diamond", price: "Rp 1.500", originalPrice: "Rp 2.000" },
    { amount: "12 Diamond", price: "Rp 3.500", originalPrice: "Rp 4.000" },
    { amount: "28 Diamond", price: "Rp 7.500", originalPrice: "Rp 8.500", popular: true },
    { amount: "85 Diamond", price: "Rp 22.000", originalPrice: "Rp 25.000" },
    { amount: "170 Diamond", price: "Rp 44.000", originalPrice: "Rp 48.000" },
    { amount: "355 Diamond", price: "Rp 88.000", originalPrice: "Rp 95.000" },
  ]

  const paymentMethods = [
    { name: "QRIS", fee: "Gratis", logo: "🏦" },
    { name: "OVO", fee: "Gratis", logo: "🟣" },
    { name: "Dana", fee: "Gratis", logo: "🔵" },
    { name: "GoPay", fee: "Gratis", logo: "🟢" },
    { name: "Bank Transfer", fee: "Rp 2.500", logo: "🏛️" },
  ]

  const pulsaProducts = [
    { name: "Pulsa Telkomsel", nominal: "Rp 7.000", price: "Rp 9.000", originalPrice: "Rp 12.000" },
    { name: "Pulsa Telkomsel", nominal: "Rp 10.000", price: "Rp 12.000" },
    { name: "Pulsa Telkomsel", nominal: "Rp 50.000", price: "Rp 52.000" },
    { name: "Pulsa Telkomsel", nominal: "Rp 75.000", price: "Rp 78.000" },
    { name: "Pulsa Telkomsel", nominal: "Rp 100.000", price: "Rp 102.000" },
  ]

  const modalPaymentMethods = {
    "E-Wallet": [
      { name: "OVO", logo: "🟣", total: "Rp 102.000" },
      { name: "LinkAja", logo: "🔴", total: "Rp 102.000" },
      { name: "GoPay", logo: "🟢", total: "Rp 102.000" },
      { name: "DANA", logo: "🔵", total: "Rp 102.000" },
    ],
    "Bank Transfer": [
      { name: "OVO", logo: "🟣", total: "Rp 102.000" },
      { name: "LinkAja", logo: "🔴", total: "Rp 102.000" },
      { name: "GoPay", logo: "🟢", total: "Rp 102.000" },
      { name: "DANA", logo: "🔵", total: "Rp 102.000" },
    ],
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 15000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleCategoryClick = (categoryName, type) => {
    if (type === "modal") {
      setSelectedCategory(categoryName)
      setShowCategoryModal(true)
    }
  }

  const handleGameClick = (game) => {
    setSelectedGame(game)
    setShowProductPage(true)
  }

  const handleProductSelect = (product) => {
    setSelectedProduct(product)
    setShowCategoryModal(false)
    setShowPaymentModal(true)
  }

  const calculateTotal = () => {
    if (!selectedDiamond) return 0
    const price = Number.parseInt(selectedDiamond.price.replace(/[^\d]/g, ""))
    const fee =
      selectedPayment?.fee === "Gratis" ? 0 : Number.parseInt(selectedPayment?.fee.replace(/[^\d]/g, "") || "0")
    return price + fee
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Konterkuy
                </span>
              </div>
              <nav className="hidden lg:flex items-center gap-8">
                {["Beranda", "Cek Pesanan", "Layanan"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-gray-600 hover:text-sky-600 font-medium transition-all duration-300 hover:scale-105 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="font-medium hover:bg-sky-50 hover:text-sky-600 transition-all duration-300"
              >
                Masuk
              </Button>
              <Button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Product Page */}
      {showProductPage && selectedGame && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
            {/* Product Header */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
              <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowProductPage(false)}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali
                  </Button>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">K</span>
                    </div>
                    <span className="font-semibold">Konterkuy</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Game Banner */}
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className={`bg-gradient-to-r ${selectedGame.gradient} rounded-2xl p-6 text-white shadow-xl mb-8`}>
                <div className="flex items-center gap-4">
                  <img
                    src={selectedGame.image || "/placeholder.svg"}
                    alt={selectedGame.name}
                    className="w-16 h-16 rounded-xl bg-white/20 p-2"
                  />
                  <div className="flex-1">
                    <h1 className="text-2xl font-bold">
                      {selectedGame.name}: {selectedGame.subtitle}
                    </h1>
                    <p className="text-white/90 mb-3">{selectedGame.description}</p>
                    <div className="flex gap-2">
                      {selectedGame.badges.map((badge, index) => (
                        <Badge key={index} className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-8">
                  {/* Step 1: Game Data */}
                  <Card className="shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          1
                        </div>
                        <h2 className="text-xl font-bold">Masukkan Data Game</h2>
                      </div>
                      <p className="text-gray-600 mb-6">
                        Pastikan User ID dan Zone ID sudah benar untuk menghindari kesalahan
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">User ID</label>
                          <Input
                            placeholder="Contoh: 123456789"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            className="h-12"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Zone ID</label>
                          <Input
                            placeholder="Contoh: 1234"
                            value={zoneId}
                            onChange={(e) => setZoneId(e.target.value)}
                            className="h-12"
                          />
                        </div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-700">
                          💡 Cara menemukan User ID & Zone ID:
                          <br />
                          Buka game → Profile → Account → User ID (Zone ID)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Step 2: Diamond Selection */}
                  <Card className="shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          2
                        </div>
                        <h2 className="text-xl font-bold">Pilih Jumlah Diamond</h2>
                      </div>
                      <p className="text-gray-600 mb-6">Pilih paket diamond sesuai kebutuhan Anda</p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {diamondPackages.map((pkg, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedDiamond(pkg)}
                            className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              selectedDiamond?.amount === pkg.amount
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                            }`}
                          >
                            {pkg.popular && (
                              <Badge className="absolute -top-2 left-4 bg-blue-600 text-white">Popular</Badge>
                            )}
                            <div className="flex justify-between items-center">
                              <div>
                                <h3 className="font-bold text-gray-900">{pkg.amount}</h3>
                                {pkg.originalPrice && (
                                  <p className="text-sm text-gray-500 line-through">{pkg.originalPrice}</p>
                                )}
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-bold text-blue-600">{pkg.price}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Step 3: Payment Method */}
                  <Card className="shadow-lg border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                          3
                        </div>
                        <h2 className="text-xl font-bold">Pilih Metode Pembayaran</h2>
                      </div>
                      <p className="text-gray-600 mb-6">Pilih metode pembayaran yang paling nyaman untuk Anda</p>
                      <div className="space-y-3">
                        {paymentMethods.map((method, index) => (
                          <div
                            key={index}
                            onClick={() => setSelectedPayment(method)}
                            className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                              selectedPayment?.name === method.name
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{method.logo}</span>
                              <span className="font-semibold">{method.name}</span>
                            </div>
                            <Badge
                              className={
                                method.fee === "Gratis" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"
                              }
                            >
                              {method.fee}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="shadow-lg border-0 sticky top-24">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-6">Ringkasan Pesanan</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Produk</span>
                          <span className="font-medium">{selectedDiamond?.amount || "Belum dipilih"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Harga</span>
                          <span className="font-medium">{selectedDiamond?.price || "Rp 0"}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Biaya Admin</span>
                          <span className="font-medium text-green-600">{selectedPayment?.fee || "Gratis"}</span>
                        </div>
                        <hr />
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total</span>
                          <span className="text-blue-600">Rp {calculateTotal().toLocaleString()}</span>
                        </div>
                      </div>
                      <Button
                        className="w-full mt-6 h-12 bg-gray-900 hover:bg-gray-800 text-white font-semibold"
                        disabled={!userId || !zoneId || !selectedDiamond || !selectedPayment}
                      >
                        Beli Sekarang
                      </Button>
                      <p className="text-xs text-gray-500 text-center mt-3">
                        Dengan melanjutkan, Anda menyetujui syarat dan ketentuan kami
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Slider */}
      {!showProductPage && (
        <section className="relative px-6 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                >
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={`Slide ${slide.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      {!showProductPage && (
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Kebutuhan Pokok Anda!</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    onClick={() => handleCategoryClick(category.name, category.type)}
                    className="group cursor-pointer"
                  >
                    <div className="flex flex-col items-center space-y-4 p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105">
                      <div
                        className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}
                      >
                        <span className="text-2xl">{category.icon}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-center text-sm leading-tight">{category.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Top Up Game Section */}
      {!showProductPage && (
        <section className="px-6 py-16 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Top Up Game</h2>
                <p className="text-gray-600">Top up game favorit dengan harga terbaik dan proses instan</p>
              </div>
              <Button
                variant="outline"
                className="group bg-white hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 transition-all duration-300"
              >
                Lihat Semua
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {games.map((game) => (
                <Card
                  key={game.id}
                  onClick={() => handleGameClick(game)}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-4">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-300 mb-3 relative">
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs font-medium truncate">{game.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-sky-600 transition-colors duration-300">
                        {game.name}
                      </h3>
                      <p className="text-xs text-gray-500">Mulai dari Rp 1.500</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Voucher Game Section */}
      {!showProductPage && (
        <section className="px-6 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Voucher Game</h2>
                <p className="text-gray-600">Voucher game dan platform digital terpopuler</p>
              </div>
              <Button
                variant="outline"
                className="group bg-white hover:bg-sky-50 hover:text-sky-600 hover:border-sky-300 transition-all duration-300"
              >
                Lihat Semua
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                {
                  id: 1,
                  name: "Steam Wallet",
                  subtitle: "PC Gaming",
                  description: "Top up Steam Wallet untuk beli game PC",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-blue-900 to-gray-900",
                  price: "Rp 15.000",
                },
                {
                  id: 2,
                  name: "Google Play",
                  subtitle: "Gift Card",
                  description: "Google Play Gift Card untuk Android",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-green-500 to-blue-500",
                  price: "Rp 20.000",
                },
                {
                  id: 3,
                  name: "iTunes",
                  subtitle: "Gift Card",
                  description: "iTunes Gift Card untuk iOS",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-gray-800 to-black",
                  price: "Rp 25.000",
                },
                {
                  id: 4,
                  name: "PlayStation",
                  subtitle: "Store",
                  description: "PlayStation Store Gift Card",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-blue-600 to-indigo-800",
                  price: "Rp 50.000",
                },
                {
                  id: 5,
                  name: "Xbox",
                  subtitle: "Gift Card",
                  description: "Xbox Live Gift Card",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-green-600 to-green-800",
                  price: "Rp 50.000",
                },
                {
                  id: 6,
                  name: "Nintendo",
                  subtitle: "eShop",
                  description: "Nintendo eShop Gift Card",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-red-500 to-red-700",
                  price: "Rp 30.000",
                },
                {
                  id: 7,
                  name: "Garena Shells",
                  subtitle: "Voucher",
                  description: "Garena Shells untuk berbagai game",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-orange-500 to-red-600",
                  price: "Rp 10.000",
                },
                {
                  id: 8,
                  name: "Razer Gold",
                  subtitle: "PIN",
                  description: "Razer Gold PIN untuk gaming",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-green-400 to-green-600",
                  price: "Rp 20.000",
                },
                {
                  id: 9,
                  name: "Battle.net",
                  subtitle: "Balance",
                  description: "Battle.net Balance untuk game Blizzard",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-blue-500 to-purple-600",
                  price: "Rp 50.000",
                },
                {
                  id: 10,
                  name: "Epic Games",
                  subtitle: "Wallet",
                  description: "Epic Games Wallet Code",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-gray-700 to-gray-900",
                  price: "Rp 25.000",
                },
                {
                  id: 11,
                  name: "Riot Points",
                  subtitle: "LoL & Valorant",
                  description: "Riot Points untuk League of Legends",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-yellow-400 to-orange-500",
                  price: "Rp 15.000",
                },
                {
                  id: 12,
                  name: "Ubisoft",
                  subtitle: "Credits",
                  description: "Ubisoft Credits untuk game Ubisoft",
                  image: "/placeholder.svg?height=80&width=80",
                  gradient: "from-blue-600 to-blue-800",
                  price: "Rp 40.000",
                },
              ].map((voucher) => (
                <Card
                  key={voucher.id}
                  onClick={() => handleGameClick(voucher)}
                  className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-4">
                    <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition-transform duration-300 mb-3 relative">
                      <img
                        src={voucher.image || "/placeholder.svg"}
                        alt={voucher.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs font-medium truncate">{voucher.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1 group-hover:text-sky-600 transition-colors duration-300">
                        {voucher.name}
                      </h3>
                      <p className="text-xs text-gray-500">Mulai dari {voucher.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Modal */}
      <Dialog open={showCategoryModal} onOpenChange={setShowCategoryModal}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Kamu lagi perlu apa nih ?</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div className="grid grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center space-y-2 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedCategory === category.name ? "bg-blue-100 border-2 border-blue-500" : "hover:bg-gray-50"
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                    <span className="text-lg">{category.icon}</span>
                  </div>
                  <span className="text-xs font-medium text-center">{category.name}</span>
                </div>
              ))}
            </div>

            <div className="relative">
              <Input
                placeholder="Masukan No Ponsel Anda"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="h-14 pr-20 text-lg"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <img src="/placeholder.svg?height=30&width=60" alt="Telkomsel" className="h-8" />
              </div>
            </div>

            <div className="space-y-3">
              {pulsaProducts.map((product, index) => (
                <div
                  key={index}
                  onClick={() => handleProductSelect(product)}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-300"
                >
                  <div>
                    <h4 className="font-semibold text-gray-900">{product.name}</h4>
                    <p className="text-lg font-bold text-gray-700">{product.nominal}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-blue-600 font-medium">Harga :</p>
                    <div className="flex items-center gap-2">
                      {product.originalPrice && (
                        <span className="text-sm text-red-500 line-through">{product.originalPrice}</span>
                      )}
                      <span className="text-lg font-bold text-blue-600">{product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold"
              onClick={() => {
                setShowCategoryModal(false)
                setShowPaymentModal(true)
              }}
            >
              Lanjut
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">Pilih Metode Pembayaran :</DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {Object.entries(modalPaymentMethods).map(([category, methods]) => (
              <div key={category}>
                <h3 className="font-bold text-lg mb-4">{category}</h3>
                <div className="space-y-3">
                  {methods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{method.logo}</span>
                        <span className="font-semibold">{method.name}</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-600">Total</p>
                        <p className="font-bold text-blue-600">{method.total}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold">Lanjut</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Why Choose Us - New Design */}
      {!showProductPage && (
        <section className="px-6 py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50"></div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Dipercaya Jutaan Pengguna
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Mengapa Memilih Konterkuy?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Platform digital terdepan dengan layanan terlengkap dan harga terjangkau
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Shield className="w-12 h-12" />,
                  title: "100% Aman & Terpercaya",
                  desc: "Transaksi dijamin aman dengan sistem keamanan berlapis dan sertifikasi resmi",
                  color: "bg-green-500",
                  stats: "99.9% Success Rate",
                },
                {
                  icon: <Clock className="w-12 h-12" />,
                  title: "Proses Super Cepat",
                  desc: "Pemrosesan otomatis dalam hitungan detik dengan teknologi terdepan",
                  color: "bg-blue-500",
                  stats: "< 30 Detik",
                },
                {
                  icon: <Star className="w-12 h-12" />,
                  title: "Harga Terjangkau",
                  desc: "Dapatkan harga terbaik dan promo menarik setiap harinya",
                  color: "bg-purple-500",
                  stats: "Hemat 20%",
                },
                {
                  icon: <Headphones className="w-12 h-12" />,
                  title: "Customer Service 24/7",
                  desc: "Tim support profesional siap membantu kapan saja Anda membutuhkan",
                  color: "bg-orange-500",
                  stats: "24/7 Online",
                },
                {
                  icon: <Award className="w-12 h-12" />,
                  title: "Berpengalaman",
                  desc: "Telah melayani jutaan transaksi dengan tingkat kepuasan tinggi",
                  color: "bg-red-500",
                  stats: "1M+ Users",
                },
                {
                  icon: <Zap className="w-12 h-12" />,
                  title: "Teknologi Terdepan",
                  desc: "Menggunakan teknologi cloud terbaru untuk performa optimal",
                  color: "bg-cyan-500",
                  stats: "99.9% Uptime",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="absolute top-6 right-6">
                    <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                      {feature.stats}
                    </span>
                  </div>
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-8 bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">1M+</div>
                  <div className="text-gray-600 text-sm">Pengguna Aktif</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">50K+</div>
                  <div className="text-gray-600 text-sm">Transaksi Harian</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">99.9%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">24/7</div>
                  <div className="text-gray-600 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Statistics */}
      {!showProductPage && (
        <section className="px-6 py-20 bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundRepeat: "repeat",
              }}
            ></div>
          </div>
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Dipercaya Jutaan Pengguna</h2>
              <p className="text-sky-100 text-lg">Bergabunglah dengan komunitas digital terbesar di Indonesia</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "1M+", label: "Pengguna Aktif", desc: "Terdaftar di platform" },
                { number: "50K+", label: "Transaksi Harian", desc: "Diproses setiap hari" },
                { number: "99.9%", label: "Tingkat Keberhasilan", desc: "Transaksi berhasil" },
                { number: "24/7", label: "Layanan Pelanggan", desc: "Siap membantu Anda" },
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="text-5xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold mb-2">{stat.label}</div>
                  <div className="text-sky-100 text-sm">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Footer - New Blue Theme */}
      {!showProductPage && (
        <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="lg:col-span-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                    Konterkuy
                  </span>
                </div>
                <p className="text-blue-200 leading-relaxed mb-6">
                  Platform digital terpercaya untuk semua kebutuhan top up game dan voucher digital Anda dengan harga
                  terbaik di Indonesia.
                </p>
                <div className="flex gap-4">
                  {[
                    { icon: Facebook, color: "hover:text-blue-300" },
                    { icon: Twitter, color: "hover:text-cyan-300" },
                    { icon: Instagram, color: "hover:text-pink-300" },
                    { icon: Youtube, color: "hover:text-red-300" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-10 h-10 bg-blue-800/50 rounded-lg flex items-center justify-center text-blue-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-blue-700/50`}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6 text-white">Layanan Kami</h4>
                <ul className="space-y-3">
                  {[
                    "Top Up Game Mobile",
                    "Voucher Digital",
                    "Pulsa & Paket Data",
                    "E-Wallet Top Up",
                    "Token Listrik PLN",
                    "Streaming Premium",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6 text-white">Bantuan & Dukungan</h4>
                <ul className="space-y-3">
                  {[
                    "Pusat Bantuan",
                    "Cara Pembelian",
                    "Kebijakan Privasi",
                    "Syarat & Ketentuan",
                    "Hubungi Kami",
                    "Status Server",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6 text-white">Hubungi Kami</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-blue-200">support@konterkuy.com</p>
                      <p className="text-blue-200">info@konterkuy.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">WhatsApp</p>
                      <p className="text-blue-200">+62 812-3456-7890</p>
                      <p className="text-blue-200">+62 821-9876-5432</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-white font-medium">Alamat</p>
                      <p className="text-blue-200">Jakarta, Indonesia</p>
                      <p className="text-blue-200">Jam Operasional: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-700 pt-8 mb-8">
              <div className="max-w-md mx-auto text-center">
                <h4 className="font-bold text-lg mb-4 text-white">Dapatkan Update Terbaru</h4>
                <p className="text-blue-200 mb-6">Berlangganan newsletter untuk mendapatkan promo dan update terbaru</p>
                <div className="flex gap-3">
                  <Input
                    placeholder="Masukkan email Anda"
                    className="bg-blue-800/50 border-blue-600 text-white placeholder-blue-300 focus:border-cyan-400"
                  />
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-700 pt-8 text-center">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-blue-200">&copy; 2024 Konterkuy. All rights reserved. Made with ❤️ in Indonesia</p>
                <div className="flex gap-6 text-sm">
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                    Terms of Service
                  </a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  )
}

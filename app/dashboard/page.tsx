"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  ShoppingCart,
  Wallet,
  User,
  Settings,
  LogOut,
  CreditCard,
  History,
  Copy,
  Eye,
  EyeOff,
  RefreshCw,
  Plus,
  Download,
  TrendingUp,
  Activity,
  Zap,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showPassword, setShowPassword] = useState(false)
  const [showApiKey, setShowApiKey] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "pesanan", label: "Pesanan", icon: ShoppingCart },
    { id: "saldo", label: "Saldo", icon: Wallet },
    { id: "edit-profil", label: "Edit Profil", icon: User },
    { id: "konfigurasi-api", label: "Konfigurasi API", icon: Settings },
    { id: "logout", label: "Logout", icon: LogOut },
  ]

  const orderHistory = [
    {
      id: 1,
      invoice: "#RATU-01733378425745",
      date: "05 Desember 2024, 12:00:25",
      service: "Telkomsel Tambah Masa Aktif Kartu 180 Hari",
      price: "Rp 70.000",
      status: "PROSES",
    },
    {
      id: 2,
      invoice: "#RATU-01733377772310",
      date: "05 Desember 2024, 11:48:43",
      service: "Telkomsel Tambah Masa Aktif Kartu 180 Hari",
      price: "Rp 70.000",
      status: "PROSES",
    },
  ]

  const transactionHistory = [
    {
      id: 1,
      date: "05 Desember 2024, 12:00:25",
      type: "CREDIT",
      category: "ORDER",
      description: "Order - Telkomsel Tambah Masa Aktif Kartu 180 Hari",
      nominal: "Rp 70.000",
      before: "Rp 987.225",
      after: "Rp 917.225",
    },
    {
      id: 2,
      date: "05 Desember 2024, 11:48:43",
      type: "CREDIT",
      category: "ORDER",
      description: "Order - Telkomsel Tambah Masa Aktif Kartu 180 Hari",
      nominal: "Rp 70.000",
      before: "Rp 1.057.225",
      after: "Rp 987.225",
    },
    {
      id: 3,
      date: "05 Desember 2024, 10:30:15",
      type: "DEBIT",
      category: "REFUND",
      description: "Refund order #17",
      nominal: "Rp 20.000",
      before: "Rp 20.000",
      after: "Rp 90.000",
    },
  ]

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    setSidebarOpen(false) // Close mobile sidebar when tab changes
  }

  const renderDashboard = () => (
    <div className="space-y-6 lg:space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
                  <p className="text-xs lg:text-sm font-medium text-blue-600">Pesanan</p>
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-blue-900">19</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
                  <p className="text-xs lg:text-sm font-medium text-green-600">Deposit</p>
                </div>
                <p className="text-2xl lg:text-3xl font-bold text-green-900">0</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100 sm:col-span-2 lg:col-span-1">
          <CardContent className="p-4 lg:p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Wallet className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" />
                  <p className="text-xs lg:text-sm font-medium text-purple-600">Saldo</p>
                </div>
                <p className="text-xl lg:text-2xl font-bold text-purple-900">Rp 917.225</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Wallet className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4 lg:p-6">
            <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
              <LayoutDashboard className="w-4 h-4 lg:w-5 lg:h-5" />
              Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 lg:p-6">
            <div className="space-y-3 lg:space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 h-10 lg:h-12">
                <TrendingUp className="w-4 h-4 mr-2" />
                UPGRADE
              </Button>
              <Button variant="outline" className="w-full bg-transparent h-10 lg:h-12">
                <History className="w-4 h-4 mr-2" />
                RIWAYAT UPGRADE
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-4 lg:p-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mb-3 lg:mb-4">
              <User className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">ARIEL</h3>
            <p className="text-gray-600 text-sm lg:text-base">H2H</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderPesanan = () => (
    <div className="space-y-4 lg:space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4 lg:p-6">
          <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
            <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
            Pesanan Saya
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="space-y-4">
            {orderHistory.map((order) => (
              <Card key={order.id} className="border border-gray-200">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4 space-y-2 lg:space-y-0">
                    <div className="flex-1">
                      <h4 className="font-semibold text-base lg:text-lg mb-1 break-all">INVOICE : {order.invoice}</h4>
                      <p className="text-gray-600 text-sm">Total : {order.price}</p>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 self-start lg:self-auto">
                      {order.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4 mb-4">
                    <div>
                      <p className="text-xs lg:text-sm font-medium text-gray-500 mb-1">WAKTU</p>
                      <p className="text-gray-900 text-sm lg:text-base">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-xs lg:text-sm font-medium text-gray-500 mb-1">LAYANAN</p>
                      <p className="text-gray-900 text-sm lg:text-base">{order.service}</p>
                    </div>
                    <div>
                      <p className="text-xs lg:text-sm font-medium text-gray-500 mb-1">HARGA</p>
                      <p className="text-gray-900 font-semibold text-sm lg:text-base">{order.price}</p>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center pt-4 border-t space-y-3 lg:space-y-0">
                    <Button variant="outline" size="sm" className="w-full lg:w-auto bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      INVOICE
                    </Button>
                    <div className="flex items-center gap-2 justify-center lg:justify-end">
                      <span className="text-sm text-gray-600">Status :</span>
                      <Badge className="bg-blue-100 text-blue-700">{order.status}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 w-full lg:w-auto">LIHAT SEMUA PESANAN</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderSaldo = () => (
    <div className="space-y-4 lg:space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4 lg:p-6">
          <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
            <Wallet className="w-4 h-4 lg:w-5 lg:h-5" />
            Saldo
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="text-center mb-6 lg:mb-8">
            <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto mb-3 lg:mb-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
              <Wallet className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
            </div>
            <div className="flex justify-center lg:justify-end mb-4">
              <Button className="bg-blue-600 hover:bg-blue-700 w-full lg:w-auto">
                <Plus className="w-4 h-4 mr-2" />
                DEPOSIT
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4 lg:p-6">
          <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
            <Activity className="w-4 h-4 lg:w-5 lg:h-5" />
            Mutasi Saldo
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          {/* Mobile Card View */}
          <div className="lg:hidden">
            {transactionHistory.map((transaction, index) => (
              <div key={transaction.id} className="p-4 border-b border-gray-200 last:border-b-0">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-sm font-medium text-gray-900">#{index + 1}</span>
                  <Badge
                    className={
                      transaction.type === "CREDIT" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                    }
                  >
                    {transaction.type}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-gray-500">WAKTU</p>
                    <p className="text-sm text-gray-900">{transaction.date}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">KATEGORI</p>
                    <p className="text-sm text-gray-900">{transaction.category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">DESKRIPSI</p>
                    <p className="text-sm text-gray-900 truncate">{transaction.description}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div>
                      <p className="text-xs text-gray-500">NOMINAL</p>
                      <p className="text-sm font-medium text-gray-900">{transaction.nominal}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">SEBELUM</p>
                      <p className="text-sm text-gray-900">{transaction.before}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">SESUDAH</p>
                      <p className="text-sm text-gray-900">{transaction.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    WAKTU / TANGGAL
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    TIPE
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    KATEGORI
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    DESKRIPSI
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    NOMINAL
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SEBELUM
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    SESUDAH
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactionHistory.map((transaction, index) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        className={
                          transaction.type === "CREDIT" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                        }
                      >
                        {transaction.type}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs truncate">{transaction.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {transaction.nominal}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.before}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transaction.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderEditProfil = () => (
    <div className="space-y-4 lg:space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4 lg:p-6">
          <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
            <User className="w-4 h-4 lg:w-5 lg:h-5" />
            Profil
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <div className="text-center mb-6 lg:mb-8">
            <div className="w-16 h-16 lg:w-24 lg:h-24 mx-auto mb-3 lg:mb-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 lg:w-12 lg:h-12 text-white" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">ARIEL</h3>
            <p className="text-gray-600 text-sm lg:text-base">H2H</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4 lg:p-6">
          <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
            <Settings className="w-4 h-4 lg:w-5 lg:h-5" />
            Edit Profil
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6">
          <form className="space-y-4 lg:space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <Input type="email" defaultValue="hackedblack404@gmail.com" className="w-full h-10 lg:h-12" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                <Input type="text" defaultValue="ariel" className="w-full h-10 lg:h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor HP</label>
                <Input type="tel" defaultValue="6281288332248" className="w-full h-10 lg:h-12" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password Baru</label>
                <Input type="password" placeholder="Password baru" className="w-full h-10 lg:h-12" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Konfirmasi Password Baru</label>
                <Input type="password" placeholder="Konfirmasi password baru" className="w-full h-10 lg:h-12" />
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-10 lg:h-12">UPDATE PROFIL</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )

  const renderKonfigurasiAPI = () => (
    <div className="space-y-4 lg:space-y-6">
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4 lg:p-6">
          <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
            <Settings className="w-4 h-4 lg:w-5 lg:h-5" />
            Konfigurasi API
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 lg:p-6 space-y-4 lg:space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">API KEY</label>
            <div className="flex gap-2">
              <Input
                type={showApiKey ? "text" : "password"}
                value="eyJpdiI6ImpuQ0JIQ0xteVBtdUkwd1d3S1BMZkE9PSIsInZhbHVlIjoiS9ZVJsZ0V2NnNzZ3ladW53TE5wNUVIbHlyWlJuVmVpeWF5MT"
                readOnly
                className="flex-1 font-mono text-xs lg:text-sm h-10 lg:h-12"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowApiKey(!showApiKey)}
                className="h-10 lg:h-12 px-3"
              >
                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() =>
                  navigator.clipboard.writeText(
                    "eyJpdiI6ImpuQ0JIQ0xteVBtdUkwd1d3S1BMZkE9PSIsInZhbHVlIjoiS9ZVJsZ0V2NnNzZ3ladW53TE5wNUVIbHlyWlJuVmVpeWF5MT",
                  )
                }
                className="h-10 lg:h-12 px-3"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex flex-col lg:flex-row gap-2 mt-3">
              <Button className="bg-blue-600 hover:bg-blue-700 h-10 lg:h-12">
                <RefreshCw className="w-4 h-4 mr-2" />
                GENERATE
              </Button>
              <Button variant="outline" className="h-10 lg:h-12 bg-transparent">
                <Copy className="w-4 h-4 mr-2" />
                SALIN
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Whitelist IP</label>
            <Input type="text" defaultValue="180.254.224.72" className="w-full h-10 lg:h-12" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="flex gap-2">
              <Input type={showPassword ? "text" : "password"} placeholder="Password" className="flex-1 h-10 lg:h-12" />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
                className="h-10 lg:h-12 px-3"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            <Button className="mt-3 bg-blue-600 hover:bg-blue-700 w-full lg:w-auto h-10 lg:h-12">UPDATE</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const SidebarContent = () => (
    <nav className="space-y-1">
      {sidebarItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleTabChange(item.id)}
          className={`w-full flex items-center gap-3 px-4 lg:px-6 py-3 text-left text-sm font-medium transition-colors ${
            activeTab === item.id ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          <item.icon className="w-4 h-4" />
          {item.label}
        </button>
      ))}
    </nav>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-12">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                </div>
                <span className="font-bold text-lg lg:text-2xl bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
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
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>

              <div className="hidden lg:flex items-center gap-4">
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

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
              <nav className="space-y-2">
                {["Beranda", "Cek Pesanan", "Layanan"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-3 py-2 text-gray-600 hover:text-sky-600 font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-2">
                  <Button
                    variant="ghost"
                    className="justify-start font-medium hover:bg-sky-50 hover:text-sky-600 transition-all duration-300"
                  >
                    Masuk
                  </Button>
                  <Button className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 font-medium">
                    Daftar
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-green-500 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-2 lg:py-3">
          <p className="text-sm">Selamat datang ariel.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg p-4 lg:p-6">
                <CardTitle className="flex items-center gap-2 text-lg lg:text-xl">
                  <User className="w-4 h-4 lg:w-5 lg:h-5" />
                  Profil
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <SidebarContent />
              </CardContent>
            </Card>
          </div>

          {/* Mobile Sidebar */}
          <div className="lg:hidden mb-4">
            <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between h-12 bg-white border-gray-300 hover:bg-gray-50"
                >
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-medium">Menu Dashboard</span>
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Profil
                  </h2>
                </div>
                <SidebarContent />
              </SheetContent>
            </Sheet>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {activeTab === "dashboard" && renderDashboard()}
            {activeTab === "pesanan" && renderPesanan()}
            {activeTab === "saldo" && renderSaldo()}
            {activeTab === "edit-profil" && renderEditProfil()}
            {activeTab === "konfigurasi-api" && renderKonfigurasiAPI()}
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 lg:mb-12">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <span className="font-bold text-xl lg:text-2xl bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
                  Konterkuy
                </span>
              </div>
              <p className="text-blue-200 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                Platform digital terpercaya untuk semua kebutuhan top up game dan voucher digital Anda dengan harga
                terbaik di Indonesia.
              </p>
              <div className="flex gap-3 lg:gap-4">
                {[
                  { icon: Facebook, color: "hover:text-blue-300" },
                  { icon: Twitter, color: "hover:text-cyan-300" },
                  { icon: Instagram, color: "hover:text-pink-300" },
                  { icon: Youtube, color: "hover:text-red-300" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-8 h-8 lg:w-10 lg:h-10 bg-blue-800/50 rounded-lg flex items-center justify-center text-blue-300 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-blue-700/50`}
                  >
                    <social.icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-base lg:text-lg mb-4 lg:mb-6 text-white">Layanan Kami</h4>
              <ul className="space-y-2 lg:space-y-3">
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
                      className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group text-sm lg:text-base"
                    >
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base lg:text-lg mb-4 lg:mb-6 text-white">Bantuan & Dukungan</h4>
              <ul className="space-y-2 lg:space-y-3">
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
                      className="text-blue-200 hover:text-white transition-all duration-300 hover:translate-x-2 inline-flex items-center group text-sm lg:text-base"
                    >
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-base lg:text-lg mb-4 lg:mb-6 text-white">Hubungi Kami</h4>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm lg:text-base">Email</p>
                    <p className="text-blue-200 text-sm">support@konterkuy.com</p>
                    <p className="text-blue-200 text-sm">info@konterkuy.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm lg:text-base">WhatsApp</p>
                    <p className="text-blue-200 text-sm">+62 812-3456-7890</p>
                    <p className="text-blue-200 text-sm">+62 821-9876-5432</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-medium text-sm lg:text-base">Alamat</p>
                    <p className="text-blue-200 text-sm">Jakarta, Indonesia</p>
                    <p className="text-blue-200 text-sm">Jam Operasional: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-700 pt-6 lg:pt-8 mb-6 lg:mb-8">
            <div className="max-w-md mx-auto text-center">
              <h4 className="font-bold text-base lg:text-lg mb-3 lg:mb-4 text-white">Dapatkan Update Terbaru</h4>
              <p className="text-blue-200 mb-4 lg:mb-6 text-sm lg:text-base">
                Berlangganan newsletter untuk mendapatkan promo dan update terbaru
              </p>
              <div className="flex flex-col lg:flex-row gap-3">
                <Input
                  placeholder="Masukkan email Anda"
                  className="bg-blue-800/50 border-blue-600 text-white placeholder-blue-300 focus:border-cyan-400 h-10 lg:h-12"
                />
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-6 h-10 lg:h-12 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-700 pt-6 lg:pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-blue-200 text-sm lg:text-base">
                &copy; 2024 Konterkuy. All rights reserved. Made with ❤️ in Indonesia
              </p>
              <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-xs lg:text-sm">
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
    </div>
  )
}

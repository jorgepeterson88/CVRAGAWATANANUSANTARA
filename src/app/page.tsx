'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Menu, X, MapPin, Phone, Mail, ChevronRight, Shield, FileText, Users, Target, Award, Building } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl text-gray-900">RAGA WATANA</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</button>
              <Button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                Hubungi Kami
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('home')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Beranda</button>
                <button onClick={() => scrollToSection('about')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Tentang</button>
                <button onClick={() => scrollToSection('services')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Layanan</button>
                <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors">Kontak</button>
                <Button onClick={() => scrollToSection('contact')} className="mx-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900">
                  Hubungi Kami
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">CV RAGA WATANA</span>
                  <br />
                  <span className="text-3xl md:text-4xl text-gray-700">NUSANTARA</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Mitra terpercaya untuk solusi bisnis terintegrasi di Indonesia. Kami menyediakan layanan profesional dengan komitmen terhadap kualitas dan kepuasan pelanggan.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3"
                >
                  Konsultasi Gratis
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('about')} 
                  variant="outline" 
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-sm text-gray-600">Klien Puas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Dukungan</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/company-logo.png"
                  alt="CV RAGA WATANA NUSANTARA"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-800/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Perusahaan Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CV RAGA WATANA NUSANTARA adalah perusahaan yang berkomitmen untuk memberikan solusi bisnis terbaik dengan standar kualitas tinggi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Visi</h3>
              <p className="text-gray-600">Menjadi mitra bisnis terpercaya yang mengedepankan inovasi dan keunggulan dalam setiap layanan.</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Misi</h3>
              <p className="text-gray-600">Memberikan solusi bisnis yang komprehensif dengan fokus pada kepuasan pelanggan dan pertumbuhan berkelanjutan.</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Tim Profesional</h3>
              <p className="text-gray-600">Didukung oleh tim berpengalaman yang siap memberikan solusi terbaik untuk kebutuhan bisnis Anda.</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Infrastruktur</h3>
              <p className="text-gray-600">Dilengkapi dengan infrastruktur modern untuk mendukung operasional bisnis yang efisien dan efektif.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Unggulan Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami menyediakan berbagai layanan profesional untuk mendukung kesuksesan bisnis Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Konsultasi Bisnis</h3>
              <p className="text-gray-600 mb-4">Solusi strategis untuk pengembangan bisnis dan optimalisasi proses operasional perusahaan Anda.</p>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0">
                Pelajari lebih lanjut <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Manajemen Proyek</h3>
              <p className="text-gray-600 mb-4">Pengelolaan proyek profesional dari perencanaan hingga implementasi dengan hasil yang terukur.</p>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0">
                Pelajari lebih lanjut <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Pengembangan Usaha</h3>
              <p className="text-gray-600 mb-4">Strategi pengembangan usaha yang komprehensif untuk mencapai pertumbuhan berkelanjutan.</p>
              <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0">
                Pelajari lebih lanjut <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hubungi <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Kami</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap untuk memulai proyek Anda? Tim kami siap membantu mewujudkan visi bisnis Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Informasi Kontak</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Alamat</h4>
                      <p className="text-gray-600">
                        JL. BANTENG BLOK O NO. 11, Kel. Birobuli Selatan, Kec. Palu Selatan<br />
                        Kota Palu, Prov. Sulawesi Tengah<br />
                        Kode Pos: 94231
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Telepon</h4>
                      <p className="text-gray-600">081931987647</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-600">info@ragawatana.co.id</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                    placeholder="Jelaskan kebutuhan Anda..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3">
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="font-bold text-xl">RAGA WATANA</span>
              </div>
              <p className="text-gray-400">
                Mitra terpercaya untuk solusi bisnis terintegrasi di Indonesia.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Navigasi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button onClick={() => scrollToSection('home')} className="hover:text-white transition-colors">Beranda</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">Tentang</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Layanan</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Kontak</button></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Konsultasi Bisnis</li>
                <li>Manajemen Proyek</li>
                <li>Pengembangan Usaha</li>
                <li>Solusi Terintegrasi</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Kontak</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Palu, Sulawesi Tengah</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>081931987647</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@ragawatana.co.id</span>
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-gray-800" />

          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              © 2024 CV RAGA WATANA NUSANTARA. Hak Cipta Dilindungi.
            </p>
            <div className="flex space-x-6">
              <button 
                onClick={() => window.location.href = '/privacy'}
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <Shield className="w-4 h-4" />
                <span>Privacy Policy</span>
              </button>
              <button 
                onClick={() => window.location.href = '/terms'}
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
              >
                <FileText className="w-4 h-4" />
                <span>Terms & Conditions</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
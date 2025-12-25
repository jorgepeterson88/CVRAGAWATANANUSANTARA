'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, Shield, Eye, Lock, Database, UserRights, Cookie } from 'lucide-react'

export default function PrivacyPolicy() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl text-gray-900">RAGA WATANA</span>
            </div>
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            CV RAGA WATANA NUSANTARA berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Pendahuluan</h2>
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di Kebijakan Privasi CV RAGA WATANA NUSANTARA. Dokumen ini menjelaskan bagaimana kami mengumpulkan, 
                  menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika menggunakan layanan kami, mengunjungi 
                  website kami, atau berinteraksi dengan kami secara lainnya.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Kami berdedikasi untuk memastikan bahwa privasi Anda dilindungi sesuai dengan peraturan perundang-undangan 
                  yang berlaku di Indonesia, termasuk Undang-Undang No. 27 Tahun 2022 tentang Perlindungan Data Pribadi.
                </p>
              </div>
            </div>
          </Card>

          {/* Data Collection */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Pengumpulan Data Pribadi</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Data yang Kami Kumpulkan:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li><strong>Informasi Identitas:</strong> Nama lengkap, alamat email, nomor telepon, alamat fisik</li>
                      <li><strong>Informasi Profesional:</strong> Pekerjaan, perusahaan, jabatan, informasi bisnis</li>
                      <li><strong>Informasi Kontak:</strong> Alamat, nomor telepon, email, media sosial</li>
                      <li><strong>Informasi Transaksional:</strong> Riwayat pembelian, layanan yang digunakan, preferensi</li>
                      <li><strong>Informasi Teknis:</strong> Alamat IP, browser, perangkat, lokasi geografis</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Cara Pengumpulan:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Formulir kontak dan pendaftaran di website kami</li>
                      <li>Komunikasi langsung melalui email atau telepon</li>
                      <li>Meeting dan konsultasi tatap muka</li>
                      <li>Analytics dan cookies otomatis di website</li>
                      <li>Dokumen bisnis dan proposal yang dibagikan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Data Usage */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserRights className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Penggunaan Data Pribadi</h2>
                <p className="text-gray-600 mb-4">
                  Kami menggunakan data pribadi Anda untuk tujuan-tujuan berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Layanan Pelanggan:</strong> Merespons pertanyaan, permintaan, dan keluhan Anda</li>
                  <li><strong>Konsultasi Bisnis:</strong> Memberikan solusi dan rekomendasi yang tepat untuk kebutuhan Anda</li>
                  <li><strong>Marketing:</strong> Mengirim informasi tentang layanan dan penawaran khusus (dengan persetujuan)</li>
                  <li><strong>Penyediaan Layanan:</strong> Menjalankan dan mengelola layanan yang Anda minta</li>
                  <li><strong>Penelitian dan Pengembangan:</strong> Meningkatkan kualitas layanan kami</li>
                  <li><strong>Kepatuhan Hukum:</strong> Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Data Protection */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Keamanan Data</h2>
                <p className="text-gray-600 mb-4">
                  Kami menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Enkripsi:</strong> Data sensitif dienkripsi baik saat transit maupun saat disimpan</li>
                  <li><strong>Akses Terbatas:</strong> Hanya personel yang berwenang yang dapat mengakses data pribadi</li>
                  <li><strong>Firewall dan Keamanan Jaringan:</strong> Sistem keamanan berlapis untuk mencegah akses tidak sah</li>
                  <li><strong>Backup Rutin:</strong> Data di-backup secara teratur untuk mencegah kehilangan</li>
                  <li><strong>Audit Keamanan:</strong> Pemeriksaan keamanan berkala untuk identifikasi dan penanganan vulnerability</li>
                  <li><strong>Pelatihan Staff:</strong> Semua staf dilatih tentang protokol keamanan data</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Cookies */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Kebijakan Cookies</h2>
                <p className="text-gray-600 mb-4">
                  Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Cookies Esensial:</strong> Diperlukan untuk fungsi dasar website</li>
                  <li><strong>Cookies Performa:</strong> Membantu kami memahami bagaimana pengguna berinteraksi dengan website</li>
                  <li><strong>Cookies Fungsional:</strong> Mengingat preferensi dan pengaturan Anda</li>
                  <li><strong>Cookies Marketing:</strong> Digunakan untuk menampilkan iklan yang relevan (dengan persetujuan)</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
                </p>
              </div>
            </div>
          </Card>

          {/* Rights */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <UserRights className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Hak Anda Sebagai Pemilik Data</h2>
                <p className="text-gray-600 mb-4">
                  Sesuai dengan peraturan yang berlaku, Anda memiliki hak-hak berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Hak Akses:</strong> Meminta salinan data pribadi yang kami simpan tentang Anda</li>
                  <li><strong>Hak Koreksi:</strong> Memperbaiki data pribadi yang tidak akurat</li>
                  <li><strong>Hak Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                  <li><strong>Hak Pembatasan:</strong> Membatasi pemrosesan data pribadi Anda</li>
                  <li><strong>Hak Portabilitas:</strong> Menerima data dalam format yang dapat dibaca mesin</li>
                  <li><strong>Hak Menolak:</strong> Menolak pemrosesan data untuk tujuan tertentu</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin melaksanakan hak Anda, 
                  silakan hubungi kami:
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div>
                      <strong>Email:</strong> privacy@ragawatana.co.id
                    </div>
                    <div>
                      <strong>Telepon:</strong> 081931987647
                    </div>
                    <div>
                      <strong>Alamat:</strong> JL. BANTENG BLOK O NO. 11, Kel. Birobuli Selatan, Kec. Palu Selatan, 
                      Kota Palu, Prov. Sulawesi Tengah, Kode Pos: 94231
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">
                  Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
                </p>
              </div>
            </div>
          </Card>

          {/* Changes */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Perubahan Kebijakan</h2>
                <p className="text-gray-600">
                  Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diberitahukan 
                  melalui website kami atau email. Penggunaan terus menerus layanan kami setelah perubahan 
                  menunjukkan penerimaan Anda terhadap kebijakan yang diperbarui.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer Actions */}
        <div className="mt-12 text-center">
          <Button 
            onClick={scrollToTop}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-3"
          >
            Kembali ke Atas
          </Button>
        </div>
      </div>
    </div>
  )
}
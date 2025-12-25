'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, FileText, Shield, Users, AlertCircle, CheckCircle, Scale } from 'lucide-react'

export default function TermsAndConditions() {
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
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Syarat dan ketentuan penggunaan layanan CV RAGA WATANA NUSANTARA.
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
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Pendahuluan</h2>
                <p className="text-gray-600 leading-relaxed">
                  Selamat datang di CV RAGA WATANA NUSANTARA. Dokumen Syarat dan Ketentuan ini ("Syarat") mengatur 
                  penggunaan layanan yang kami sediakan. Dengan mengakses atau menggunakan layanan kami, Anda setuju 
                  untuk terikat oleh syarat dan ketentuan ini.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
                </p>
              </div>
            </div>
          </Card>

          {/* Definitions */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Definisi</h2>
                <div className="space-y-3">
                  <div>
                    <strong>"Perusahaan":</strong>
                    <p className="text-gray-600 mt-1">CV RAGA WATANA NUSANTARA, entitas bisnis yang menyediakan layanan konsultasi dan manajemen proyek.</p>
                  </div>
                  <div>
                    <strong>"Layanan":</strong>
                    <p className="text-gray-600 mt-1">Semua layanan konsultasi bisnis, manajemen proyek, dan pengembangan usaha yang disediakan oleh Perusahaan.</p>
                  </div>
                  <div>
                    <strong>"Klien":</strong>
                    <p className="text-gray-600 mt-1">Individu atau entitas bisnis yang menggunakan layanan Perusahaan.</p>
                  </div>
                  <div>
                    <strong>"Platform":</strong>
                    <p className="text-gray-600 mt-1">Website dan semua platform digital yang disediakan oleh Perusahaan.</p>
                  </div>
                  <div>
                    <strong>"Konten":</strong>
                    <p className="text-gray-600 mt-1">Semua informasi, dokumen, materi, dan data yang dibagikan antara Perusahaan dan Klien.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Services */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Layanan Kami</h2>
                <p className="text-gray-600 mb-4">
                  CV RAGA WATANA NUSANTARA menyediakan layanan-layanan berikut:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Konsultasi Bisnis:</strong> Analisis bisnis, perencanaan strategis, dan rekomendasi solusi</li>
                  <li><strong>Manajemen Proyek:</strong> Perencanaan, eksekusi, dan monitoring proyek</li>
                  <li><strong>Pengembangan Usaha:</strong> Strategi pengembangan dan ekspansi bisnis</li>
                  <li><strong>Solusi Terintegrasi:</strong> Layanan komprehensif untuk kebutuhan bisnis</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  Setiap layanan akan dijelaskan secara rinci dalam proposal atau perjanjian terpisah.
                </p>
              </div>
            </div>
          </Card>

          {/* Client Responsibilities */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Kewajiban Klien</h2>
                <p className="text-gray-600 mb-4">
                  Sebagai Klien, Anda setuju untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap tentang kebutuhan bisnis Anda</li>
                  <li>Menyediakan dokumen dan data yang diperlukan untuk pelaksanaan layanan</li>
                  <li>Melakukan pembayaran tepat waktu sesuai dengan perjanjian</li>
                  <li>Berkolaborasi secara aktif dalam proses konsultasi dan implementasi</li>
                  <li>Memberikan feedback konstruktif untuk peningkatan layanan</li>
                  <li>Mematuhi jadwal dan kesepakatan yang telah ditetapkan bersama</li>
                  <li>Menjaga kerahasiaan informasi dan strategi yang dibahas</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Company Responsibilities */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Kewajiban Perusahaan</h2>
                <p className="text-gray-600 mb-4">
                  CV RAGA WATANA NUSANTARA berkomitmen untuk:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Memberikan layanan profesional dengan standar kualitas tinggi</li>
                  <li>Menjaga kerahasiaan semua informasi bisnis Klien</li>
                  <li>Memberikan solusi yang tepat dan sesuai dengan kebutuhan Klien</li>
                  <li>Menyelesaikan proyek sesuai dengan jadwal yang disepakati</li>
                  <li>Memberikan laporan kemajuan secara berkala</li>
                  <li>Menyediakan dukungan teknis dan konsultasi pasca-implementasi</li>
                  <li>Terus mengembangkan kompetensi dan pengetahuan tim</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Payment Terms */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Syarat Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Struktur Pembayaran:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li><strong>Uang Muka:</strong> 30-50% dari total nilai proyek</li>
                      <li><strong>Pembayaran Progress:</strong> Sesuai dengan milestone yang dicapai</li>
                      <li><strong>Pelunasan:</strong> Setelah proyek selesai dan disetujui Klien</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Metode Pembayaran:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Transfer bank ke rekening resmi Perusahaan</li>
                      <li>E-wallet (jika tersedia)</li>
                      <li>Cek atau giro (untuk perusahaan)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Keterlambatan Pembayaran:</h3>
                    <p className="text-gray-600">
                      Pembayaran yang terlambat akan dikenakan bunga sebesar 2% per bulan dari jumlah yang terhutang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Intellectual Property */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Hak Kekayaan Intelektual</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Hak Cipta Perusahaan:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Metodologi, framework, dan tools yang dikembangkan oleh Perusahaan</li>
                      <li>Dokumen template dan materi pelatihan</li>
                      <li>Proposed solutions dan strategi unik</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Hak Cipta Klien:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Data dan informasi bisnis yang disediakan oleh Klien</li>
                      <li>Dokumen dan materi yang dikembangkan khusus untuk Klien</li>
                      <li>Hasil akhir proyek yang telah dibayar penuh</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Confidentiality */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Kerahasiaan</h2>
                <p className="text-gray-600 mb-4">
                  Kedua belah pihak setuju untuk menjaga kerahasiaan:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><strong>Informasi Rahasia:</strong> Semua data bisnis, finansial, strategis, dan teknis</li>
                  <li><strong>Periode Kerahasiaan:</strong> Selama kerjasama berlangsung dan 5 tahun setelahnya</li>
                  <li><strong>Pengecualian:</strong> Informasi yang sudah publik atau diwajibkan oleh hukum</li>
                  <li><strong>Kewajiban:</strong> Tidak mengungkapkan kepada pihak ketiga tanpa persetujuan tertulis</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Limitation of Liability */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Pembatasan Tanggung Jawab</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Batas Tanggung Jawab:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Tanggung jawab Perusahaan dibatasi pada jumlah nilai kontrak</li>
                      <li>Perusahaan tidak bertanggung jawab atas kerugian tidak langsung atau konsekuensial</li>
                      <li>Perusahaan tidak bertanggung jawab atas keputusan bisnis yang dibuat oleh Klien</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Force Majeure:</h3>
                    <p className="text-gray-600">
                      Perusahaan dibebaskan dari kewajiban jika terjadi hal di luar kendali seperti bencana alam, 
                      perang, pemogokan, atau perubahan regulasi pemerintah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Termination */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Pengakhiran Kerjasama</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Pengakhiran oleh Klien:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Dapat dilakukan dengan pemberitahuan 30 hari</li>
                      <li>Wajib membayar semua layanan yang telah diberikan</li>
                      <li>Mungkin dikenakan biaya pengakhiran sesuai kontrak</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Pengakhiran oleh Perusahaan:</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                      <li>Jika Klien melanggar syarat dan ketentuan</li>
                      <li>Jika pembayaran terlambat lebih dari 30 hari</li>
                      <li>Jika Klien tidak kooperatif dalam pelaksanaan proyek</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Dispute Resolution */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Penyelesaian Sengketa</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Prosedur Penyelesaian:</h3>
                    <ol className="list-decimal list-inside text-gray-600 space-y-2">
                      <li><strong>Negosiasi:</strong> Kedua belah pihak berusaha menyelesaikan secara musyawarah</li>
                      <li><strong>Mediasi:</strong> Jika negosiasi gagal, dapat menggunakan mediator netral</li>
                      <li><strong>Arbitrase:</strong> Sengketa diselesaikan melalui Badan Arbitrase Nasional Indonesia</li>
                      <li><strong>Pengadilan:</strong> Sebagai upaya terakhir, diselesaikan di Pengadilan Negeri Palu</li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Yurisdiksi:</h3>
                    <p className="text-gray-600">
                      Syarat dan ketentuan ini diatur oleh hukum Republik Indonesia. Setiap sengketa akan 
                      diselesaikan dalam yurisdiksi pengadilan di Kota Palu, Sulawesi Tengah.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Contact */}
          <Card className="p-8 shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
                <p className="text-gray-600 mb-4">
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="space-y-3">
                    <div>
                      <strong>Email:</strong> legal@ragawatana.co.id
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
              </div>
            </div>
          </Card>

          {/* Agreement */}
          <Card className="p-8 shadow-lg border-2 border-blue-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Persetujuan</h2>
              <p className="text-gray-600 leading-relaxed">
                Dengan menggunakan layanan CV RAGA WATANA NUSANTARA, Anda menyatakan bahwa telah membaca, 
                memahami, dan setuju untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju 
                dengan bagian mana pun dari syarat ini, harap tidak menggunakan layanan kami.
              </p>
              <p className="text-gray-600 mt-4">
                Syarat dan ketentuan ini merupakan kesepakatan yang mengikat secara hukum antara Anda 
                dan CV RAGA WATANA NUSANTARA.
              </p>
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
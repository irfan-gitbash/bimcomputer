import React, { useState } from 'react';
import { PenTool as Tool, Monitor, HardDrive, Cpu, RefreshCw, Database, Calendar } from 'lucide-react';

const Services = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    deviceType: '',
    issue: '',
    preferredDate: '',
  });

  const services = [
    {
      icon: Monitor,
      title: "Service Laptop",
      description: "Perbaikan berbagai masalah laptop, dari hardware hingga software",
      price: "Mulai dari Rp 200.000",
      details: [
        "Ganti LCD",
        "Perbaikan Keyboard",
        "Upgrade RAM/SSD",
        "Service Motherboard"
      ]
    },
    {
      icon: HardDrive,
      title: "Service PC",
      description: "Solusi lengkap untuk komputer desktop Anda",
      price: "Mulai dari Rp 150.000",
      details: [
        "Upgrade Komponen",
        "Perbaikan Hardware",
        "Optimasi Sistem",
        "Perakitan PC Baru"
      ]
    },
    {
      icon: Cpu,
      title: "Pembersihan Komputer",
      description: "Bersihkan komputer Anda dari debu dan optimasi performa",
      price: "Mulai dari Rp 100.000",
      details: [
        "Pembersihan Komponen",
        "Ganti Thermal Paste",
        "Optimasi Pendinginan",
        "Cable Management"
      ]
    },
    {
      icon: RefreshCw,
      title: "Instalasi Sistem",
      description: "Instalasi dan setup sistem operasi beserta software",
      price: "Mulai dari Rp 250.000",
      details: [
        "Install Windows/Linux",
        "Backup Data",
        "Install Software",
        "Optimasi Sistem"
      ]
    },
    {
      icon: Database,
      title: "Data Recovery",
      description: "Pemulihan data yang hilang atau rusak",
      price: "Mulai dari Rp 500.000",
      details: [
        "Recovery Hard Disk",
        "Recovery SSD",
        "Recovery Flash Drive",
        "Recovery Memory Card"
      ]
    },
    {
      icon: Tool,
      title: "Maintenance Rutin",
      description: "Perawatan berkala untuk performa optimal",
      price: "Mulai dari Rp 300.000/bulan",
      details: [
        "Pembersihan Rutin",
        "Update Sistem",
        "Optimasi Performa",
        "Backup Data"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    // Reset form
    setFormData({
      name: '',
      phone: '',
      deviceType: '',
      issue: '',
      preferredDate: '',
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Layanan Service</h1>
          <p className="text-xl text-gray-600">Solusi Profesional untuk Perangkat Anda</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <service.icon className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-blue-600 font-semibold mb-4">{service.price}</p>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600">• {detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <Calendar className="text-blue-600 w-6 h-6 mr-2" />
            <h2 className="text-2xl font-bold">Booking Service Online</h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor HP/WhatsApp
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jenis Perangkat
              </label>
              <select
                name="deviceType"
                value={formData.deviceType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Pilih Jenis Perangkat</option>
                <option value="laptop">Laptop</option>
                <option value="pc">PC Desktop</option>
                <option value="other">Lainnya</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Keluhan/Masalah
              </label>
              <textarea
                name="issue"
                value={formData.issue}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tanggal Kedatangan
              </label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Booking Sekarang
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Berapa lama waktu pengerjaan service?</h3>
              <p className="text-gray-600">Waktu pengerjaan bervariasi tergantung jenis kerusakan, umumnya 1-3 hari kerja.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Apakah ada garansi service?</h3>
              <p className="text-gray-600">Ya, kami memberikan garansi service selama 30 hari untuk setiap perbaikan.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Bagaimana jika spare part tidak tersedia?</h3>
              <p className="text-gray-600">Kami akan mencarikan alternatif atau memesankan spare part yang dibutuhkan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
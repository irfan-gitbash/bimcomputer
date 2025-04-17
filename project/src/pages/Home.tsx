import React from "react";
import { Link } from "react-router-dom";
import { Star, ChevronRight, ChevronLeft } from "lucide-react";

const Home = () => {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      comment:
        "Service yang sangat memuaskan! Laptop saya kembali seperti baru.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      comment: "Teknisi yang profesional dan harga yang terjangkau.",
      rating: 5,
    },
    {
      id: 3,
      name: "David Wilson",
      comment: "Proses pengerjaan cepat dan hasilnya maksimal.",
      rating: 5,
    },
  ];

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Laptop Gaming Pro X",
      price: 15000000,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      name: "SSD 1TB Performance",
      price: 1800000,
      image:
        "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      name: "Mechanical Keyboard RGB",
      price: 1200000,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Solusi Komputer Anda,
              <br />
              Cepat & Terpercaya!
            </h1>
            <p className="text-xl mb-8">
              Layanan service komputer profesional dengan teknisi berpengalaman
            </p>
            <div className="flex space-x-4">
              <Link
                to="/services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
              >
                Servis Sekarang
              </Link>
              <Link
                to="https://api.whatsapp.com/send/?phone=%2B6285889214624&text&type=phone_number&app_absent=0"
                className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-lg font-semibold"
              >
                Whatsapp Sekarang
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Section */}
      <div className="bg-blue-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold">
            🎉 Promo Spesial: Diskon 20% untuk Service Laptop! Berlaku sampai
            akhir bulan.
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center ">
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-800">
                Service Laptop
              </h3>
              <p className="text-gray-600 mb-4">
                Perbaikan hardware & software oleh teknisi ahli
              </p>
              <Link
                to="/services"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Selengkapnya →
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2 dark:text-gray-800">
                Konsultasi Gratis
              </h3>
              <p className="text-gray-600 mb-4">
                Konsultasikan masalah komputer Anda
              </p>
              <Link
                to="/contact"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Selengkapnya →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Produk Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 dark:text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-blue-600 font-semibold">
                    Rp {product.price.toLocaleString("id-ID")}
                  </p>
                  <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Beli Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-whit">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Testimoni Pelanggan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                <p className="font-semibold text-gray-600">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

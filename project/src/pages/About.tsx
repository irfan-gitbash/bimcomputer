import React from "react";
import { Award, Users, Target, MapPin } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Riko Saputra",
      role: "Senior Teknisi",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      specialization: "Hardware & Software Specialist",
    },
  ];

  const certifications = [
    {
      title: "Microsoft Certified Professional",
      year: "2023",
      icon: Award,
    },
    {
      title: "CompTIA A+ Certification",
      year: "2022",
      icon: Award,
    },
    {
      title: "Apple Certified Mac Technician",
      year: "2023",
      icon: Award,
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Tentang Bima Computer</h1>
          <p className="text-xl text-gray-600">
            Melayani dengan Profesional sejak 2010
          </p>
        </div>

        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Sejarah Kami</h2>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 mb-4">
              Bima Computer didirikan pada tahun 2010 dengan visi untuk
              memberikan layanan teknologi yang terpercaya dan profesional
              kepada masyarakat Indonesia. Berawal dari sebuah toko kecil di
              Jakarta, kini kami telah berkembang menjadi salah satu penyedia
              layanan komputer terkemuka.
            </p>
            <p className="text-gray-600">
              Dengan pengalaman lebih dari 13 tahun, kami telah melayani ribuan
              pelanggan dan menyelesaikan berbagai masalah teknologi dengan
              tingkat kepuasan yang tinggi.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Visi & Misi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold">Visi</h3>
              </div>
              <p className="text-gray-600">
                Menjadi penyedia layanan teknologi terpercaya dan terdepan di
                Indonesia, memberikan solusi teknologi yang inovatif dan
                berkualitas.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 w-8 h-8 mr-3" />
                <h3 className="text-2xl font-semibold">Misi</h3>
              </div>
              <ul className="text-gray-600 space-y-2">
                <li>
                  • Memberikan layanan berkualitas tinggi dengan harga
                  terjangkau
                </li>
                <li>• Mengutamakan kepuasan pelanggan dalam setiap layanan</li>
                <li>• Terus berinovasi mengikuti perkembangan teknologi</li>
                <li>• Mengembangkan tim profesional yang kompeten</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Tim Teknisi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600">{member.specialization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Sertifikasi & Penghargaan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <cert.icon className="text-blue-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600">Diperoleh tahun {cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Lokasi Kami</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1744888387319!6m8!1m7!1sZxwoWiv_VIVdwp4HeaVx3Q!2m2!1d-6.325367674709641!2d106.8584115347552!3f218.47264446658505!4f-8.3631980876211!5f0.7820865974627469"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="text-blue-600 w-6 h-6 mr-2" />
                <h3 className="text-xl font-semibold">Bima Computer</h3>
              </div>
              <p className="text-gray-600">
                Jl. Bima No 1
                <br />
                Jakarta Timur, DKI Jakarta
                <br />
                Indonesia 13770
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

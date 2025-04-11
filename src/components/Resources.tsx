
import React from "react";
import { Video, FileText, Code, Users } from "lucide-react";

const Resources = () => {
  return (
    <section id="resources" className="py-12 md:py-16 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Resep Malas Coding</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Racikan spesial biar kamu tetap bisa ngaku-ngaku jadi programmer tanpa perlu pusing coding! 🥴
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResourceCard
            icon={<Video className="w-6 h-6 text-imphnen" />}
            title="Video Bikin Ngantuk"
            description="Tutorial video membosankan dengan suara monoton yang dijamin bikin kamu tertidur dalam 5 menit pertama!"
            buttonText="Pengganti Obat Tidur"
            buttonLink="#"
          />
          <ResourceCard
            icon={<FileText className="w-6 h-6 text-imphnen" />}
            title="Artikel Rumit"
            description="Bacaan dengan bahasa yang seolah ditulis oleh alien, penuh jargon tak berguna, dan contoh kode yang sudah usang!"
            buttonText="Bikin Pusing"
            buttonLink="#"
          />
          <ResourceCard
            icon={<Code className="w-6 h-6 text-imphnen" />}
            title="Tantangan Mustahil"
            description="Uji kemampuanmu dengan tantangan yang level kesulitannya bikin kamu ingin ganti karir jadi tukang bakso!"
            buttonText="Coba Kalau Berani"
            buttonLink="#"
          />
          <ResourceCard
            icon={<Users className="w-6 h-6 text-imphnen" />}
            title="Ngobrol Bareng 'Suhu'"
            description="Ikuti sesi sharing dengan para 'suhu' yang sebenarnya cuma lebih jago ngomong daripada coding."
            buttonText="Mendengarkan Omong Kosong"
            buttonLink="#"
          />
        </div>
      </div>
    </section>
  );
};

const ResourceCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl p-6 shadow-soft card-hover flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-imphnen-light dark:bg-imphnen/20 rounded-lg mr-3">{icon}</div>
        <h3 className="text-lg font-bold dark:text-white">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      <a
        href={buttonLink}
        className="text-imphnen dark:text-imphnen-light font-medium hover:underline flex items-center"
      >
        {buttonText} →
      </a>
    </div>
  );
};

export default Resources;

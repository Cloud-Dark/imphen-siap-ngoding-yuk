
import React from "react";
import { Video, FileText, Code, Users } from "lucide-react";

const Resources = () => {
  return (
    <section id="resources" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sumber Belajar</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Akses berbagai materi belajar yang akan membantu kamu menguasai konsep programming dengan cara yang menyenangkan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResourceCard
            icon={<Video className="w-6 h-6 text-imphnen" />}
            title="Video Tutorial"
            description="Belajar melalui tutorial video langkah demi langkah yang mudah diikuti."
            buttonText="Lihat Semua Video"
            buttonLink="#"
          />
          <ResourceCard
            icon={<FileText className="w-6 h-6 text-imphnen" />}
            title="Artikel & Tutorial"
            description="Pelajari konsep programming melalui artikel yang disusun secara terstruktur."
            buttonText="Baca Artikel"
            buttonLink="#"
          />
          <ResourceCard
            icon={<Code className="w-6 h-6 text-imphnen" />}
            title="Tantangan Koding"
            description="Uji kemampuanmu dengan tantangan koding yang menyenangkan dan menantang."
            buttonText="Mulai Tantangan"
            buttonLink="#"
          />
          <ResourceCard
            icon={<Users className="w-6 h-6 text-imphnen" />}
            title="Sharing Session"
            description="Ikuti sesi sharing bersama programmer berpengalaman dan belajar dari pengalaman mereka."
            buttonText="Jadwal Session"
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
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-soft card-hover flex flex-col h-full">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-imphnen-light rounded-lg mr-3">{icon}</div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a
        href={buttonLink}
        className="text-imphnen font-medium hover:underline flex items-center"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Resources;

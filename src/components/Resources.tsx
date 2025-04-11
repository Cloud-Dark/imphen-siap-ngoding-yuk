
import React from "react";
import { Video, FileText, Code, Users } from "lucide-react";

const Resources = () => {
  return (
    <section id="resources" className="py-12 md:py-16 bg-white dark:bg-gray-950">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Resep Rahasia Jago Coding</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Racikan spesial biar otak kamu nyantol sama ilmu programming tanpa bikin kepala berasap! 🔥
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ResourceCard
            icon={<Video className="w-6 h-6 text-imphnen" />}
            title="Video Anti Ngantuk"
            description="Tutorial video seru yang bikin mata melek dan otak nyambung, dijamin nggak bakalan molor di tengah jalan!"
            buttonText="Tonton Sekarang"
            buttonLink="#"
          />
          <ResourceCard
            icon={<FileText className="w-6 h-6 text-imphnen" />}
            title="Artikel Santuy"
            description="Bacaan ringkas yang nggak bikin pusing, dijelasin pake bahasa manusia bukan bahasa alien dari mars."
            buttonText="Baca Yuk"
            buttonLink="#"
          />
          <ResourceCard
            icon={<Code className="w-6 h-6 text-imphnen" />}
            title="Tantangan Seru"
            description="Uji kemampuan otakmu dengan tantangan coding yang bikin ketagihan, level dari cupu sampai pro!"
            buttonText="Siap Tantangan?"
            buttonLink="#"
          />
          <ResourceCard
            icon={<Users className="w-6 h-6 text-imphnen" />}
            title="Ngobrol Bareng Suhu"
            description="Ikuti sesi sharing bersama para jago coding yang sudah makan asam garam dunia programming."
            buttonText="Join Ngobrol"
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

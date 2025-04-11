
import React from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-gradient-to-b from-white to-imphnen-light/30 dark:from-gray-900 dark:to-gray-800/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="bg-imphnen/10 text-imphnen dark:bg-imphnen/20 dark:text-imphnen-light px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4 animate-fade-in">Sosial</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white animate-fade-in" style={{animationDelay: '100ms'}}>Komunitas "Kami"</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '200ms'}}>
            Bergabunglah dengan ribuan programmer Indonesia yang akan membuat motivasi codingmu menurun drastis!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <CommunityCard
            icon={<Facebook className="w-12 h-12 text-blue-600" />}
            title="Grup Facebook Kacau"
            description="Tempat tanya jawab yang jawabannya lebih membingungkan dari pertanyaanmu. Dijamin bikin kamu tambah stres!"
            buttonText="Siap Frustasi"
            buttonLink="#"
            color="blue"
            index={0}
          />
          <CommunityCard
            icon={<Instagram className="w-12 h-12 text-pink-600" />}
            title="Instagram Abal-abal"
            description="Follow akun yang updatenya setahun sekali dengan konten copas dari StackOverflow yang sudah kadaluwarsa."
            buttonText="Liat Drama"
            buttonLink="#"
            color="pink"
            index={1}
          />
          <CommunityCard
            icon={<MessageCircle className="w-12 h-12 text-indigo-600" />}
            title="Server Discord Sepi"
            description="Gabung di server Discord kami yang online 24 jam tapi ga ada yang jawab pertanyaanmu selama 24 hari."
            buttonText="Ngobrol Sendiri"
            buttonLink="#"
            color="indigo"
            index={2}
          />
        </div>
      </div>
    </section>
  );
};

const CommunityCard = ({
  icon,
  title,
  description,
  buttonText,
  buttonLink,
  color,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  color: "blue" | "pink" | "indigo";
  index: number;
}) => {
  const bgColors = {
    blue: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/20 dark:hover:bg-blue-900/30",
    pink: "bg-pink-50 hover:bg-pink-100 dark:bg-pink-900/20 dark:hover:bg-pink-900/30",
    indigo: "bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-900/20 dark:hover:bg-indigo-900/30",
  };

  const buttonColors = {
    blue: "bg-blue-600 hover:bg-blue-700 dark:bg-blue-600/90 dark:hover:bg-blue-500",
    pink: "bg-pink-600 hover:bg-pink-700 dark:bg-pink-600/90 dark:hover:bg-pink-500",
    indigo: "bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600/90 dark:hover:bg-indigo-500",
  };

  return (
    <div className="feature-card animate-fade-in" style={{animationDelay: `${index * 100 + 300}ms`}}>
      <div className={`mb-4 p-4 rounded-full ${bgColors[color]}`}>{icon}</div>
      <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <a
        href={buttonLink}
        className={`mt-auto inline-block text-white px-4 py-2 rounded-full font-medium ${buttonColors[color]} transition-colors duration-300`}
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Community;

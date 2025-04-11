
import React from "react";
import { Facebook, Instagram, MessageCircle } from "lucide-react";

const Community = () => {
  return (
    <section id="community" className="py-16 md:py-24 bg-gradient-to-b from-white to-imphnen-light/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Komunitas Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan ribuan programmer Indonesia yang saling membantu dan berbagi pengetahuan.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <CommunityCard
            icon={<Facebook className="w-12 h-12 text-blue-600" />}
            title="Facebook Group"
            description="Bergabunglah dengan grup Facebook kami untuk tanya jawab, sharing ide, dan artikel menarik."
            buttonText="Gabung Sekarang"
            buttonLink="#"
            color="blue"
          />
          <CommunityCard
            icon={<Instagram className="w-12 h-12 text-pink-600" />}
            title="Instagram"
            description="Ikuti kami di Instagram untuk tips programming, quotes inspiratif, dan info event terbaru."
            buttonText="Follow Kami"
            buttonLink="#"
            color="pink"
          />
          <CommunityCard
            icon={<MessageCircle className="w-12 h-12 text-indigo-600" />}
            title="Discord Server"
            description="Diskusi realtime dengan sesama programmer dan dapatkan bantuan langsung dari para ahli."
            buttonText="Join Server"
            buttonLink="#"
            color="indigo"
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
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  color: "blue" | "pink" | "indigo";
}) => {
  const bgColors = {
    blue: "bg-blue-50 hover:bg-blue-100",
    pink: "bg-pink-50 hover:bg-pink-100",
    indigo: "bg-indigo-50 hover:bg-indigo-100",
  };

  const buttonColors = {
    blue: "bg-blue-600 hover:bg-blue-700",
    pink: "bg-pink-600 hover:bg-pink-700",
    indigo: "bg-indigo-600 hover:bg-indigo-700",
  };

  return (
    <div className={`feature-card`}>
      <div className={`mb-4 p-4 rounded-full ${bgColors[color]}`}>{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
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

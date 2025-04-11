
import React from "react";
import { Code, Users, BookOpen } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fitur Unggulan</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            IMPHNEN hadir dengan berbagai fitur untuk membantu kamu menjadi programmer handal tanpa harus pusing dengan coding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code className="w-12 h-12 text-imphnen" />}
            title="Belajar Tanpa Koding"
            description="Pelajari konsep programming dengan cara yang mudah dipahami tanpa harus menulis kode yang rumit."
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-imphnen" />}
            title="Komunitas Supportif"
            description="Bergabunglah dengan komunitas programmer Indonesia yang siap membantu dan berbagi pengalaman."
          />
          <FeatureCard
            icon={<BookOpen className="w-12 h-12 text-imphnen" />}
            title="Tutorial Interaktif"
            description="Akses tutorial interaktif yang membuat konsep pemrograman sulit menjadi mudah dipahami."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div className="feature-card flex flex-col items-center text-center">
      <div className="mb-4 p-4 bg-imphnen-light rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Features;

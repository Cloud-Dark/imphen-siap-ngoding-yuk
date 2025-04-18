
import React from "react";
import { Code, Users, BookOpen } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="bg-imphnen/10 text-imphnen dark:bg-imphnen/20 dark:text-imphnen-light px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4 animate-fade-in">Fitur</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white animate-fade-in" style={{animationDelay: '100ms'}}>Fitur "Unggulan"</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '200ms'}}>
            IMPHNEN hadir dengan berbagai fitur untuk membantu kamu menjadi programmer yang malas dan enggan menyentuh kode!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Code className="w-12 h-12 text-imphnen dark:text-imphnen-light" />}
            title="Belajar Tanpa Koding"
            description="Kenapa capek-capek nulis kode? Di sini kamu bisa jadi programmer cuma dengan nonton tutorial tanpa pernah praktek!"
            index={0}
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-imphnen dark:text-imphnen-light" />}
            title="Komunitas Anti-Bantuan"
            description="Bertanya di forum kami dan rasakan sensasi diabaikan atau mendapat jawaban yang lebih membingungkan daripada masalahmu!"
            index={1}
          />
          <FeatureCard
            icon={<BookOpen className="w-12 h-12 text-imphnen dark:text-imphnen-light" />}
            title="Tutorial Bikin Pusing"
            description="Tutorial kami dijamin membuat konsep pemrograman yang sederhana menjadi terasa seperti fisika kuantum!"
            index={2}
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
  index
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="feature-card flex flex-col items-center text-center animate-fade-in" style={{animationDelay: `${index * 100 + 300}ms`}}>
      <div className="mb-4 p-4 bg-imphnen-light dark:bg-imphnen/20 rounded-full">{icon}</div>
      <h3 className="text-xl font-bold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Features;

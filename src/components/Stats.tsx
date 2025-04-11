
import React, { useEffect, useState } from "react";
import { Users, BookOpen, Star, MessageCircle } from "lucide-react";

const statsData = [
  {
    icon: <Users className="w-8 h-8" />,
    value: 5000,
    label: "Member Aktif",
    suffix: "+",
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    value: 120,
    label: "Tutorial",
    suffix: "+",
  },
  {
    icon: <Star className="w-8 h-8" />,
    value: 98,
    label: "Tingkat Kepuasan",
    suffix: "%",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    value: 24,
    label: "Jam Support",
    suffix: "/7",
  },
];

const Stats = () => {
  return (
    <section className="py-16 md:py-24 bg-imphnen text-white dark:bg-gray-800">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({
  stat,
  index,
}: {
  stat: {
    icon: React.ReactNode;
    value: number;
    label: string;
    suffix: string;
  };
  index: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = duration / frameRate;
    const increment = stat.value / totalFrames;

    let currentFrame = 0;
    let currentCount = 0;

    const timer = setInterval(() => {
      currentFrame++;
      currentCount += increment;
      
      if (currentFrame === totalFrames) {
        clearInterval(timer);
        setCount(stat.value);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [stat.value]);

  return (
    <div 
      className="text-center animate-fade-in" 
      style={{animationDelay: `${index * 200}ms`}}
    >
      <div className="mb-4 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
        {React.cloneElement(stat.icon as React.ReactElement, { 
          className: "text-white" 
        })}
      </div>
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {count}
        <span className="text-imphnen-light">{stat.suffix}</span>
      </div>
      <p className="text-lg text-white/80">{stat.label}</p>
    </div>
  );
};

export default Stats;

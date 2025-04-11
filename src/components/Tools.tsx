
import React from "react";
import { Code2, Terminal, Palette, Globe, Database, Search } from "lucide-react";

const toolsData = [
  {
    icon: <Code2 className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    name: "Visual Studio Berat",
    description: "Editor kode yang dijamin bikin laptopmu kepanasan dan kipas menderu seperti pesawat jet.",
    color: "blue"
  },
  {
    icon: <Terminal className="w-8 h-8 text-green-500 dark:text-green-400" />,
    name: "Git & Pusing",
    description: "Tool yang bikin kamu bingung dengan pesan error 'merge conflict' dan membuat proyekmu hancur.",
    color: "green"
  },
  {
    icon: <Globe className="w-8 h-8 text-purple-500 dark:text-purple-400" />,
    name: "Browser Bug Tools",
    description: "Alat debugging yang malah bikin tambah bingung dengan ratusan tab dan error yang tak terpecahkan.",
    color: "purple"
  },
  {
    icon: <Palette className="w-8 h-8 text-orange-500 dark:text-orange-400" />,
    name: "Figma Ribet",
    description: "Platform desain UI/UX yang membuatmu menyadari kamu tidak punya jiwa seni sama sekali.",
    color: "orange"
  },
  {
    icon: <Database className="w-8 h-8 text-red-500 dark:text-red-400" />,
    name: "MySQL Workbantai",
    description: "Tools untuk mengelola database yang sesekali menghapus semua datamu tanpa peringatan.",
    color: "red"
  },
  {
    icon: <Search className="w-8 h-8 text-indigo-500 dark:text-indigo-400" />,
    name: "Postman Pelit",
    description: "Aplikasi testing API dengan fitur premium yang selalu kamu butuhkan tapi tidak bisa kamu akses.",
    color: "indigo"
  },
];

const Tools = () => {
  return (
    <section id="tools" className="py-16 md:py-24 bg-imphnen-light/30 dark:bg-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="bg-imphnen/10 text-imphnen dark:bg-imphnen/20 dark:text-imphnen-light px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">Toolkit</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Tools Perusak Mood</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Kenali berbagai tools yang sering bikin programmer profesional pengen banting laptop dan beralih profesi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((tool, index) => (
            <ToolCard key={index} tool={tool} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ToolCard = ({
  tool,
  index
}: {
  tool: {
    icon: React.ReactNode;
    name: string;
    description: string;
    color: string;
  };
  index: number;
}) => {
  const getBgColor = (color: string) => {
    const colors = {
      blue: "bg-blue-50 dark:bg-blue-900/30",
      green: "bg-green-50 dark:bg-green-900/30",
      purple: "bg-purple-50 dark:bg-purple-900/30",
      orange: "bg-orange-50 dark:bg-orange-900/30",
      red: "bg-red-50 dark:bg-red-900/30",
      indigo: "bg-indigo-50 dark:bg-indigo-900/30",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300 flex flex-col animate-fade-in" 
      style={{animationDelay: `${index * 100}ms`}}
    >
      <div className={`p-4 rounded-lg mb-4 ${getBgColor(tool.color)} w-fit`}>
        {tool.icon}
      </div>
      <h3 className="text-xl font-bold mb-3 dark:text-white">{tool.name}</h3>
      <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
      <a href="#" className="mt-4 text-imphnen dark:text-imphnen-light hover:underline font-medium inline-block">Pelajari lebih lanjut</a>
    </div>
  );
};

export default Tools;

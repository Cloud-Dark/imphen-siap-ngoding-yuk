
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Apa itu komunitas IMPHNEN?",
    answer:
      "IMPHNEN adalah komunitas programmer Indonesia yang bertujuan untuk membantu semua orang belajar pemrograman dengan cara yang menyenangkan dan tidak membingungkan. Nama kami kepanjangan dari Ingin Menjadi Programmer Handal, Namun Enggan Ngoding."
  },
  {
    question: "Apakah saya harus memiliki latar belakang IT untuk bergabung?",
    answer:
      "Tidak perlu! Komunitas kami terbuka untuk siapa saja, dari pemula yang belum pernah coding hingga profesional yang sudah berpengalaman. Kami memiliki materi dan sesi khusus untuk berbagai tingkatan."
  },
  {
    question: "Bagaimana cara bergabung dengan komunitas IMPHNEN?",
    answer:
      "Kamu dapat bergabung dengan komunitas kami melalui grup Facebook, server Discord, atau mengikuti Instagram kami. Semua link tersebut tersedia di bagian Komunitas di website ini."
  },
  {
    question: "Apakah semua materi dan event IMPHNEN gratis?",
    answer:
      "Sebagian besar materi dasar dan diskusi di komunitas kami gratis. Untuk workshop intensif dan beberapa kelas khusus mungkin ada biaya untuk menutupi operasional, tetapi kami selalu berusaha menjaga agar biayanya terjangkau."
  },
  {
    question: "Bahasa pemrograman apa saja yang dibahas di IMPHNEN?",
    answer:
      "Kami membahas berbagai bahasa pemrograman populer seperti JavaScript, PHP, Python, HTML, CSS, dan banyak lagi. Forum diskusi kami juga terbuka untuk bahasa pemrograman apapun yang ingin didiskusikan."
  },
  {
    question: "Bagaimana jika saya memiliki pertanyaan teknis?",
    answer:
      "Kamu dapat mengajukan pertanyaan di grup Facebook atau server Discord kami. Komunitas kami sangat aktif dan biasanya akan memberikan jawaban dalam waktu singkat."
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="bg-imphnen/10 text-imphnen dark:bg-imphnen/20 dark:text-imphnen-light px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">Question</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Pertanyaan Umum</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beberapa pertanyaan yang sering ditanyakan tentang komunitas IMPHNEN dan cara bergabungnya.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border dark:border-gray-700 mb-4 rounded-lg overflow-hidden bg-gray-50 dark:bg-gray-800 data-[state=open]:shadow-md animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                <AccordionTrigger className="px-4 py-4 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium text-left dark:text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

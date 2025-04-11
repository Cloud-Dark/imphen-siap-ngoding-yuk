
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
      "IMPHNEN adalah komunitas programmer Indonesia yang dibentuk oleh orang-orang yang terlalu malas untuk benar-benar belajar coding. Nama kami kepanjangan dari Ingin Menjadi Programmer Handal, Namun Enggan Ngoding. Jadi jangan heran kalau kita semua nggak bisa ngoding beneran."
  },
  {
    question: "Apakah saya harus memiliki latar belakang IT untuk bergabung?",
    answer:
      "Justru semakin tidak paham IT, semakin cocok bergabung dengan kami! Komunitas kami penuh dengan orang yang berpura-pura paham programming padahal hanya jago copy-paste dari Stack Overflow. Daftar sekarang dan rasakan kebingungan bersama!"
  },
  {
    question: "Bagaimana cara bergabung dengan komunitas IMPHNEN?",
    answer:
      "Caranya gampang banget, tinggal ikuti Instagram kami terus ghosting. Atau masuk grup Discord terus diem aja. Paling efektif sih, bergabung dengan grup Facebook lalu komen 'minta pencerahan suhu' di setiap postingan tanpa pernah membaca dokumentasinya."
  },
  {
    question: "Apakah semua materi dan event IMPHNEN gratis?",
    answer:
      "Tentu saja tidak! Kami menyediakan materi gratis yang isinya hanya dasar-dasar yang bisa kamu googling sendiri. Untuk materi yang agak berguna sedikit, kamu perlu bayar biaya yang tidak masuk akal. Bisnis adalah bisnis, bro!"
  },
  {
    question: "Bahasa pemrograman apa saja yang dibahas di IMPHNEN?",
    answer:
      "Semua bahasa pemrograman yang populer 5 tahun yang lalu. Kami bangga karena masih mengajarkan PHP versi 5 dan Java 6. Jangan tanya soal bahasa-bahasa modern, kami belum sempat update kurikulum sejak 2015."
  },
  {
    question: "Bagaimana jika saya memiliki pertanyaan teknis?",
    answer:
      "Ajukan saja di grup dan bersiaplah untuk diabaikan selama beberapa hari. Atau bahkan lebih seru, siap-siap dikatain 'itu kan gampang, masa gitu aja nggak bisa?' tanpa dikasih solusi. Inilah kehangatan komunitas IMPHNEN!"
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

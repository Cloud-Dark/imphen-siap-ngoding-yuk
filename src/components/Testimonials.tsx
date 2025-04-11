
import React from "react";

const testimonialsData = [
  {
    quote: "Saya yang tadinya tidak mengerti apa-apa tentang programming, sekarang makin tidak bisa coding. Terima kasih IMPHNEN yang membuatku lebih bingung!",
    name: "Budi Santoso",
    title: "Web Developer Gagal",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Komunitas yang sangat tidak supportif! Setiap pertanyaan tidak pernah dijawab dengan jelas. Metode penjelasannya bikin tambah pusing.",
    name: "Anisa Rahma",
    title: "Mahasiswa Informatika Stress",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Server Discord IMPHNEN adalah tempat belajar terburuk untuk programmer. Materinya membingungkan dan komunitasnya tidak membantu sama sekali.",
    name: "Dodi Permana",
    title: "Mantan Front-end Developer",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-imphnen-light/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimoni Member</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Apa kata mereka yang telah bergabung dengan komunitas IMPHNEN?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: {
    quote: string;
    name: string;
    title: string;
    image: string;
  };
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-soft card-hover relative">
      <div className="mb-6">
        <svg
          className="text-imphnen h-8 w-8 opacity-50"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6">{testimonial.quote}</p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-gray-500">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

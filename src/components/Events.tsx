
import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";

const eventsData = [
  {
    title: "Workshop: JavaScript Dasar",
    date: "24 April 2025",
    time: "13:00 - 16:00 WIB",
    location: "Online via Zoom",
    description: "Belajar dasar-dasar JavaScript dari awal, cocok untuk pemula tanpa background programming.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Meetup: Ngobrol Santai Seputar Web Dev",
    date: "15 Mei 2025",
    time: "19:00 - 21:00 WIB",
    location: "Kopi Kode, Jakarta Selatan",
    description: "Sharing session dan networking bersama web developer dari berbagai perusahaan.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Bootcamp: Full Stack Development",
    date: "3-5 Juni 2025",
    time: "09:00 - 17:00 WIB",
    location: "Hotel Dreamland, Bandung",
    description: "Intensive coding bootcamp selama 3 hari untuk membangun aplikasi web full stack.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
];

const Events = () => {
  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-b from-white to-imphnen-light/30 dark:from-gray-900 dark:to-gray-800">
      <div className="section-container">
        <div className="text-center mb-16">
          <span className="bg-imphnen/10 text-imphnen dark:bg-imphnen/20 dark:text-imphnen-light px-4 py-1.5 rounded-full text-sm font-medium inline-block mb-4">Upcoming</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Event & Workshop</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ikuti berbagai event menarik dan workshop bersama komunitas IMPHNEN untuk meningkatkan skill programingmu.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EventCard = ({
  event,
  index
}: {
  event: {
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    image: string;
  };
  index: number;
}) => {
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 group animate-fade-in" 
      style={{animationDelay: `${index * 150}ms`}}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 dark:text-white">{event.title}</h3>
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
          <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{event.date}</span>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
          <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{event.time}</span>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
          <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
          <span className="text-sm">{event.location}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{event.description}</p>
        <a
          href="#"
          className="inline-flex items-center text-imphnen hover:text-imphnen-dark dark:text-imphnen-light font-medium"
        >
          Daftar Sekarang
        </a>
      </div>
    </div>
  );
};

export default Events;

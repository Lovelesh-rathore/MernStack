import React from "react";

const services = [
  {
    icon: "💬",
    title: "Real-Time Messaging",
    desc: "Instant conversations with anyone, anytime."
  },
  {
    icon: "👥",
    title: "Group Chats",
    desc: "Create and join groups for lively discussions."
  },
  {
    icon: "📸",
    title: "Multimedia Sharing",
    desc: "Share photos, videos, and files with ease."
  },
  {
    icon: "🔒",
    title: "Privacy Features",
    desc: "Your conversations are secure and private."
  }
];

const ServicesSection = () => (
  <section className="py-16 px-4 bg-base-100">
    <h2 className="text-3xl font-bold text-center mb-10 text-primary">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {services.map((service, idx) => (
        <div key={idx} className="card bg-base-200 shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
          <span className="text-5xl mb-4" aria-label={service.title}>{service.icon}</span>
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-base text-center text-base-content">{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ServicesSection;

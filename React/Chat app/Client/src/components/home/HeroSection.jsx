import React from "react";

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-primary/10 via-base-200 to-secondary/10 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="/public/vite.svg" alt="ChatBuzz background" className="w-full h-full object-cover opacity-10" />
    </div>
    <div className="relative z-10 text-center py-16 px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-primary drop-shadow mb-6">Connect Instantly. Chat Freely.</h1>
      <p className="text-xl md:text-2xl text-base-content mb-8 max-w-2xl mx-auto">Experience seamless, secure, and fun conversations with friends, family, and communities. ChatBuzz brings people together like never before.</p>
      <a href="/register" className="btn btn-primary btn-lg text-lg px-8 py-3 shadow-lg hover:scale-105 transition-transform">Get Started</a>
    </div>
  </section>
);

export default HeroSection;

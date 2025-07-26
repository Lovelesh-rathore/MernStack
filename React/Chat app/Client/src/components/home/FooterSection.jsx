import React from "react";

const FooterSection = () => (
  <footer className="bg-base-300 py-8 px-4 mt-8">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start gap-2">
        <span className="font-bold text-xl text-primary">ChatBuzz</span>
        <div className="flex gap-4 mt-2">
          <a href="/privacy" className="link link-hover text-base-content">Privacy Policy</a>
          <a href="/terms" className="link link-hover text-base-content">Terms of Service</a>
          <a href="/contact" className="link link-hover text-base-content">Contact Us</a>
        </div>
      </div>
      <div className="flex gap-4">
        <a href="#" aria-label="Facebook" className="text-xl text-primary hover:text-secondary"><i className="fa-brands fa-facebook"></i></a>
        <a href="#" aria-label="Twitter" className="text-xl text-primary hover:text-secondary"><i className="fa-brands fa-twitter"></i></a>
        <a href="#" aria-label="Instagram" className="text-xl text-primary hover:text-secondary"><i className="fa-brands fa-instagram"></i></a>
        <a href="#" aria-label="LinkedIn" className="text-xl text-primary hover:text-secondary"><i className="fa-brands fa-linkedin"></i></a>
      </div>
      <form className="flex gap-2 items-center">
        <input type="email" placeholder="Subscribe for updates" className="input input-bordered" aria-label="Email" />
        <button className="btn btn-primary">Subscribe</button>
      </form>
    </div>
    <div className="text-center text-xs text-base-content mt-6">© {new Date().getFullYear()} ChatBuzz. All rights reserved.</div>
  </footer>
);

export default FooterSection;

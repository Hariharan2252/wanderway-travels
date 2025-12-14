import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xl font-bold">WanderWay Travels</h4>
          <p className="mt-3 text-sm text-slate-300 max-w-xs">
            Curated travel experiences, secure bookings, and personalised itineraries for unforgettable journeys.
          </p>
          <div className="mt-4 text-sm text-slate-400">
            © {new Date().getFullYear()} WanderWay
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Explore</h5>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/destinations" className="hover:text-white">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-white">Packages</Link></li>
            <li><Link to="/offers" className="hover:text-white">Offers</Link></li>
            <li><Link to="/blog" className="hover:text-white">Travel Blog</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Support</h5>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold mb-3">Contact</h5>
          <p className="text-sm text-slate-300">support@wanderway.com</p>
          <p className="text-sm text-slate-300 mt-2">+91 98765 43210</p>

          <div className="mt-4 flex gap-3">
            <a aria-label="twitter" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">T</a>
            <a aria-label="instagram" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">I</a>
            <a aria-label="facebook" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">F</a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 text-sm text-slate-400 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
          <div>© {new Date().getFullYear()} WanderWay Travels. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Made with ❤️ • Built with React & Firebase</div>
        </div>
      </div>
    </footer>
  );
}

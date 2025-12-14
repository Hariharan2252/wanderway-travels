import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white/60 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white flex items-center justify-center font-bold shadow">
                WW
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-slate-800">WanderWay</div>
                <div className="text-xs text-slate-500 -mt-1">Travels</div>
              </div>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({isActive}) => isActive ? "text-indigo-600 font-semibold" : "text-slate-700 hover:text-indigo-600"}>Home</NavLink>
            <NavLink to="/destinations" className={({isActive}) => isActive ? "text-indigo-600 font-semibold" : "text-slate-700 hover:text-indigo-600"}>Destinations</NavLink>
            <NavLink to="/profile" className={({isActive}) => isActive ? "text-indigo-600 font-semibold" : "text-slate-700 hover:text-indigo-600"}>My Trips</NavLink>
            <NavLink to="/contact" className="text-slate-700 hover:text-indigo-600">Contact</NavLink>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:inline-block px-4 py-2 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100">Login</Link>
            <Link to="/signup" className="hidden sm:inline-block px-4 py-2 rounded-lg bg-yellow-400 text-slate-900 hover:bg-yellow-500 font-semibold">Get Started</Link>

            {/* mobile menu button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg bg-white/40 hover:bg-white/60"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/90 border-t py-3">
          <div className="px-4 flex flex-col gap-3">
            <NavLink to="/" onClick={() => setOpen(false)} className="text-slate-700">Home</NavLink>
            <NavLink to="/destinations" onClick={() => setOpen(false)} className="text-slate-700">Destinations</NavLink>
            <NavLink to="/profile" onClick={() => setOpen(false)} className="text-slate-700">My Trips</NavLink>
            <NavLink to="/contact" onClick={() => setOpen(false)} className="text-slate-700">Contact</NavLink>

            <div className="pt-2 border-t mt-2">
              <Link to="/login" onClick={() => setOpen(false)} className="block py-2">Login</Link>
              <Link to="/signup" onClick={() => setOpen(false)} className="block py-2 font-semibold text-indigo-600">Get Started</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
